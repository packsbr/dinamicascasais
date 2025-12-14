// State
let currentCategory = null;
let searchTerm = "";

// DOM Elements
const grid = document.getElementById('dinamicas-grid');
const categoryList = document.getElementById('category-list');
const emptyState = document.getElementById('empty-state');
const listView = document.getElementById('list-view');
const detailView = document.getElementById('detail-view');
const searchInput = document.getElementById('search-input');
const btnAll = document.getElementById('btn-cat-all');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderCategories();
    renderGrid();
    setupEventListeners();
});

function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderGrid();
    });

    // Mobile Sidebar
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    }

    menuToggle.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
}

function getCategories() {
    const categories = new Set(dinamicasData.map(d => d.category));
    return Array.from(categories);
}

function renderCategories() {
    const categories = getCategories();
    categoryList.innerHTML = categories.map(cat => `
        <button onclick="filterCategory('${cat}')" 
                class="w-full flex items-center justify-start px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-primary hover:bg-primary/5 transition-colors text-left btn-category"
                data-category="${cat}">
            <div class="w-2 h-2 rounded-full bg-primary/40 mr-2"></div>
            ${cat}
        </button>
    `).join('');
}

function filterCategory(category) {
    currentCategory = category;
    
    // Update active state in sidebar
    btnAll.className = category === null 
        ? "w-full flex items-center justify-start px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-foreground hover:bg-secondary/80 transition-colors text-left"
        : "w-full flex items-center justify-start px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-primary hover:bg-primary/5 transition-colors text-left";
        
    document.querySelectorAll('.btn-category').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.className = "w-full flex items-center justify-start px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-foreground hover:bg-secondary/80 transition-colors text-left btn-category";
        } else {
            btn.className = "w-full flex items-center justify-start px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-primary hover:bg-primary/5 transition-colors text-left btn-category";
        }
    });

    // Close sidebar on mobile if open
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar.classList.contains('-translate-x-full') && window.innerWidth < 768) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    // Return to list view if in detail view
    closeDetail();
    renderGrid();
}

function renderGrid() {
    const filtered = dinamicasData.filter(d => {
        const matchesSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              d.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = currentCategory ? d.category === currentCategory : true;
        return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        grid.innerHTML = filtered.map((d, index) => `
            <div class="animate-fade-in" style="animation-delay: ${index * 50}ms">
                <div onclick="openDetail(${d.id})" class="h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border border-transparent hover:-translate-y-1 group">
                    <div class="flex justify-between items-start mb-4">
                        <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                            ${d.category}
                        </span>
                        <div class="bg-secondary/50 p-2 rounded-full text-muted group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                           <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </div>
                    </div>
                    <h3 class="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">${d.title}</h3>
                    <p class="text-muted line-clamp-3 text-sm leading-relaxed">${d.description}</p>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }
}

function openDetail(id) {
    const dinamica = dinamicasData.find(d => d.id === id);
    if (!dinamica) return;

    // Populate Detail View
    document.getElementById('detail-category').textContent = dinamica.category;
    document.getElementById('detail-title').textContent = dinamica.title;
    document.getElementById('detail-description').textContent = dinamica.description;
    document.getElementById('detail-application').textContent = `"${dinamica.application}"`;
    
    const instructionsList = document.getElementById('detail-instructions');
    instructionsList.innerHTML = dinamica.instructions.map((step, i) => `
        <li class="flex gap-3">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-white text-primary font-bold text-sm flex items-center justify-center shadow-sm border border-secondary">
                ${i + 1}
            </span>
            <span class="text-foreground/90">${step}</span>
        </li>
    `).join('');

    // Toggle Views
    listView.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    // Scroll to top
    document.getElementById('main-content').scrollTop = 0;
    
    lucide.createIcons();
}

function closeDetail() {
    detailView.classList.add('hidden');
    listView.classList.remove('hidden');
    document.getElementById('main-content').scrollTop = 0;
}

function clearFilters() {
    setSearchTerm("");
    searchInput.value = "";
    filterCategory(null);
}

function setSearchTerm(term) {
    searchTerm = term;
    renderGrid();
}

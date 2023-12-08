
function setUrlParam(variableName, value) {
    let currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set(variableName, value);
    history.replaceState(null, null, currentUrl);
}

function filterBrandSubmitHandler(event) {
    event.preventDefault();
    const brandName = event.target.querySelector('input').value;
  
    setUrlParam('brand', brandName);

    const brandNameLowerCase = brandName.toLowerCase();
    const rows = document.querySelectorAll('.car-table tbody tr');
        rows.forEach(row => {
            const rowBrandName = row.querySelector('.brand-name').textContent.toLowerCase();
            if (rowBrandName.includes(brandNameLowerCase)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
} 

function sortByPrice() {
    const sortParam = new URLSearchParams(window.location.search).get("sort");

    const rows = document.querySelectorAll('.car-table tbody tr');
    const sortedRows = Array.from(rows).sort((rowA, rowB) => {
        const priceA = parseFloat(rowA.querySelector('.price').textContent);
        const priceB = parseFloat(rowB.querySelector('.price').textContent);
        return sortParam === 'asc' ? priceA - priceB : priceB - priceA;
    });

    const tbody = document.querySelector('.car-table tbody');
    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
}

function changeSort() {
    const sortParam = new URLSearchParams(window.location.search).get("sort");

    if (!sortParam || sortParam === 'desc') {
        setUrlParam('sort', 'asc');
    } else{
        setUrlParam('sort', 'desc');
    }

    sortByPrice();
}


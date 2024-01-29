function filterBrandSubmitHandler(event) {
    event.preventDefault();
    const brandName = event.target.querySelector('input').value.toLowerCase()

    const rows = document.querySelectorAll('.table-row');
        rows.forEach(row => {
            const rowBrandName = row.querySelector('.brand-name').textContent.toLowerCase();
            rowBrandName.includes(brandName) ? row.style.display = '' : row.style.display = 'none';
        });
} 

function sortByPrice() {
    const tableBody = document.querySelector('.table-body');
    const rows = document.querySelectorAll('.table-row');
    const order = tableBody.dataset.order;

    const sortedRows = Array.from(rows).sort((rowA, rowB) => {
        const priceA = parseFloat(rowA.querySelector('.price').textContent);
        const priceB = parseFloat(rowB.querySelector('.price').textContent);
        return order === 'asc' ? priceB - priceA : priceA - priceB;
    });

    order === 'asc' ? tableBody.dataset.order = 'desc' : tableBody.dataset.order = 'asc';

    tableBody.innerHTML = '';
    sortedRows.forEach(row => tableBody.appendChild(row));
}
document.getElementById('product-list').addEventListener('click', function(e) {
    if (e.target && e.target.id.startsWith('modositas-')) {
        
        const productId = e.target.id.split('-')[1];
        
        console.log("Módosítani akarod a terméket, aminek az ID-ja:", productId);
        
        megnyitModositasModalt(productId);
    }
});

function termekModositasa(id) {
    console.log("Szerkesztés indítása az ID alapján:", id);
    
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    
    document.getElementById('edit-id').value = id;
    
    modal.show();
}
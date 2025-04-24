// Datos iniciales (15 perdidos + 15 encontrados)
const initialLostPets = [
    // Perdidos (1-15)
    {
        id: 1, name: "Max", 
        description: "Labrador dorado con collar azul. Perdido cerca del parque central.",
        photo: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        date: "15/05/2023", 
        location: { lat: 19.4326, lng: -99.1332 },
        sightings: [{ date: "16/05/2023", location: { lat: 19.4350, lng: -99.1350 } }],
        comments: [], 
        contactInfo: "tel:5512345678"
    },
    {
        id: 2,
        name: "Bella",
        description: "Perrita schnauzer miniatura, pelo gris, última vez vista en la colonia Roma. Tiene un lazo rojo en el collar.",
        photo: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",
        date: "10/05/2023",
        location: { lat: 19.4194, lng: -99.1615 },
        sightings: [],
        comments: [],
        contactInfo: "tel:5511223344"
    },
    {
        id: 3,
        name: "Rocky",
        description: "Perro mestizo color café con blanco, aproximadamente 3 años. Perdido cerca del mercado San Juan.",
        photo: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        date: "12/05/2023",
        location: { lat: 19.4339, lng: -99.1941 },
        sightings: [
            { date: "13/05/2023", location: { lat: 19.4345, lng: -99.1950 } }
        ],
        comments: [],
        contactInfo: "tel:5577889900"
    },
    {
        id: 4,
        name: "Luna",
        description: "Perrita husky siberiano, ojos azules, escapó durante los fuegos artificiales. Tiene placa con número de contacto.",
        photo: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "20/05/2023",
        location: { lat: 19.4018, lng: -99.1576 },
        sightings: [],
        comments: [],
        contactInfo: "tel:5599887766"
    },
    {
        id: 5,
        name: "Toby",
        description: "Perro golden retriever, pelaje dorado claro, muy amigable. Se perdió durante paseo en el bosque de Chapultepec.",
        photo: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        date: "18/05/2023",
        location: { lat: 19.4210, lng: -99.1865 },
        sightings: [
            { date: "19/05/2023", location: { lat: 19.4220, lng: -99.1870 } },
            { date: "20/05/2023", location: { lat: 19.4205, lng: -99.1850 } }
        ],
        comments: [],
        contactInfo: "tel:5544332211"
    },
    {
        id: 6,
        name: "Coco",
        description: "Perro chihuahua cabeza de manzana, color café, muy nervioso. Se perdió en la colonia Condesa.",
        photo: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "22/05/2023",
        location: { lat: 19.4135, lng: -99.1710 },
        sightings: [],
        comments: [],
        contactInfo: "tel:5566778899"
    }
];

const initialFoundPets = [
    {
        id: 11,
        name: "Rex",
        description: "Perro pastor belga encontrado en Polanco. Tiene chip pero la información está desactualizada.",
        photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        date: "14/05/2023",
        foundLocation: { lat: 19.4339, lng: -99.1941 },
        contactInfo: "Refugio Amigos Fieles - tel:5555667788"
    },
    {
        id: 12,
        name: "Daisy",
        description: "Perrita salchicha encontrada en la colonia Roma. Usa un collar rosa sin placa.",
        photo: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
        date: "16/05/2023",
        foundLocation: { lat: 19.4194, lng: -99.1615 },
        contactInfo: "Clínica Veterinaria Patitas - tel:5544332211"
    },
    {
        id: 13,
        name: "Bruno",
        description: "Perro boxer encontrado en Coyoacán. Tiene cicatriz en la pata derecha.",
        photo: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        date: "18/05/2023",
        foundLocation: { lat: 19.3496, lng: -99.1613 },
        contactInfo: "tel:5577889900 (Sra. Martínez)"
    },
    {
        id: 14,
        name: "Lola",
        description: "Perrita poodle blanca encontrada en San Ángel. Está esterilizada y tiene arete verde.",
        photo: "https://images.unsplash.com/photo-1594149929921-788d2d6907f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "20/05/2023",
        foundLocation: { lat: 19.3449, lng: -99.1946 },
        contactInfo: "Veterinaria San Ángel - tel:5599887766"
    },
    {
        id: 15,
        name: "Zeus",
        description: "Perro gran danés encontrado en Santa Fe. Es joven y muy juguetón.",
        photo: "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "22/05/2023",
        foundLocation: { lat: 19.3593, lng: -99.2593 },
        contactInfo: "Refugio Milagros Caninos - tel:5555667788"
    },
    {
        id: 16,
        name: "Molly",
        description: "Perrita bulldog francés encontrada en la Condesa. Tiene un lunar cerca del ojo izquierdo.",
        photo: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        date: "17/05/2023",
        foundLocation: { lat: 19.4135, lng: -99.1710 },
        contactInfo: "tel:5511223344 (Juan Pérez)"
    },
    {
        id: 17, name: "Rocky",
        description: "Perro mestizo encontrado en Polanco, aproximadamente 2 años.",
        photo: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        date: "12/05/2023", 
        foundLocation: { lat: 19.4339, lng: -99.1941 },
        contactInfo: "Refugio Amigos Fieles - tel:5555667788"
    }
];

// Variables globales
let lostPets = [];
let foundPets = [];
let currentPetId = null;
let currentMarker = null;
let mapModal = null;
let petMarkers = {};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupEventListeners();
});

function loadData() {
    const savedLost = localStorage.getItem('lostPets');
    const savedFound = localStorage.getItem('foundPets');
    
    lostPets = savedLost ? JSON.parse(savedLost) : [...initialLostPets];
    foundPets = savedFound ? JSON.parse(savedFound) : [...initialFoundPets];
    
    if (!savedLost || !savedFound) {
        saveAllData();
    }
    
    displayAllPets();
}

function saveAllData() {
    localStorage.setItem('lostPets', JSON.stringify(lostPets));
    localStorage.setItem('foundPets', JSON.stringify(foundPets));
}

function displayAllPets() {
    displayPetsSection(lostPets, 'lost-pets-container', true);
    displayPetsSection(foundPets, 'found-pets-container', false);
}

function displayPetsSection(pets, containerId, isLost) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    if (pets.length === 0) {
        container.innerHTML = `<div class="alert alert-info">No hay perritos ${isLost ? 'perdidos' : 'encontrados'} aún</div>`;
        return;
    }
    
    pets.forEach(pet => {
        const petCard = createPetCard(pet, isLost);
        container.appendChild(petCard);
        
        if (isLost && pet.location) {
            setTimeout(() => initPetMap(pet.id, pet.location, pet.sightings || []), 100);
        }
    });
}

function createPetCard(pet, isLost) {
    const card = document.createElement('div');
    card.className = 'pet-card fade-in';
    card.dataset.petId = pet.id;
    
    card.innerHTML = `
        <img src="${pet.photo}" class="pet-image" alt="${pet.name || 'Perrito'}">
        <div class="pet-info">
            <h3>${pet.name || 'Sin nombre'}</h3>
            <p>${pet.description}</p>
            <small class="text-muted">Reportado el ${pet.date}</small>
            
            ${isLost ? `
            <div class="pet-map" id="map-${pet.id}"></div>
            <div class="d-flex flex-wrap">
                <button class="btn btn-warning btn-action report-sighting">
                    <i class="bi bi-geo-alt"></i> Avistamiento
                </button>
                <button class="btn btn-info btn-action view-comments">
                    <i class="bi bi-chat"></i> Comentarios
                </button>
                <button class="btn btn-success btn-action mark-found" style="width:100%">
                    <i class="bi bi-check-circle"></i> Encontrado
                </button>
            </div>
            ` : `
            <p><strong>Contacto:</strong> ${pet.contactInfo}</p>
            `}
        </div>
    `;
    
    if (isLost) {
        card.querySelector('.report-sighting').addEventListener('click', () => {
            currentPetId = pet.id;
            initMapModal();
            new bootstrap.Modal(document.getElementById('sightingModal')).show();
        });
        
        card.querySelector('.view-comments').addEventListener('click', () => {
            currentPetId = pet.id;
            loadComments(pet.id);
            new bootstrap.Modal(document.getElementById('commentsModal')).show();
        });
        
        card.querySelector('.mark-found').addEventListener('click', () => {
            markPetAsFound(pet.id);
        });
    }
    
    return card;
}

function initPetMap(petId, mainLocation, sightings) {
    const mapElement = document.getElementById(`map-${petId}`);
    if (!mapElement || !mainLocation) return;

    if (petMarkers[petId]) {
        petMarkers[petId].map.remove();
    }

    const map = L.map(mapElement, {
        center: [mainLocation.lat, mainLocation.lng],
        zoom: 15,
        zoomControl: true,
        dragging: true,
        scrollWheelZoom: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const mainMarker = L.marker([mainLocation.lat, mainLocation.lng], {
        icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        })
    }).addTo(map).bindPopup("Última ubicación reportada");

    const sightingMarkers = [];

    sightings?.forEach((sighting, index) => {
        const marker = L.marker([sighting.location.lat, sighting.location.lng], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            })
        }).addTo(map).bindPopup(`Avistamiento ${index + 1}<br>Fecha: ${sighting.date}`);
        sightingMarkers.push(marker);
    });

    petMarkers[petId] = {
        map: map,
        mainMarker: mainMarker,
        sightingMarkers: sightingMarkers
    };

    if (sightings.length > 0) {
        const group = new L.featureGroup([mainMarker, ...sightingMarkers]);
        map.fitBounds(group.getBounds().pad(0.2));
    }

    setTimeout(() => map.invalidateSize(), 100);
}

function initMapModal() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    if (mapModal) {
        mapModal.remove();
    }
    
    mapModal = L.map(mapElement).setView([19.4326, -99.1332], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapModal);

    // Permitir agregar marcadores haciendo clic
    mapModal.on('click', function(e) {
        if (currentMarker) {
            mapModal.removeLayer(currentMarker);
        }
        
        currentMarker = L.marker(e.latlng, {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            })
        }).addTo(mapModal).bindPopup("Nuevo avistamiento").openPopup();
    });
}

function getCurrentLocation() {
    if (!navigator.geolocation) {
        alert('Tu navegador no soporta geolocalización');
        return;
    }
    
    if (currentMarker && mapModal) {
        mapModal.removeLayer(currentMarker);
    }
    
    navigator.geolocation.getCurrentPosition(
        position => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            if (!mapModal) return;
            
            mapModal.setView([pos.lat, pos.lng], 15);
            
            currentMarker = L.marker([pos.lat, pos.lng], {
                icon: L.icon({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34]
                })
            }).addTo(mapModal).bindPopup("Tu ubicación actual").openPopup();
        },
        error => {
            alert(`Error al obtener ubicación: ${error.message}`);
        },
        { timeout: 10000 }
    );
}

function submitSighting() {
    if (!currentMarker || !currentPetId) {
        alert('Primero marca una ubicación en el mapa');
        return;
    }
    
    const position = currentMarker.getLatLng();
    const petIndex = lostPets.findIndex(p => p.id === currentPetId);
    
    if (petIndex === -1) {
        alert('Error: No se encontró el perrito');
        return;
    }
    
    const newSighting = {
        date: new Date().toLocaleDateString(),
        location: { lat: position.lat, lng: position.lng }
    };
    
    if (!lostPets[petIndex].sightings) {
        lostPets[petIndex].sightings = [];
    }
    
    lostPets[petIndex].sightings.push(newSighting);

    if (petMarkers[currentPetId]) {
        const map = petMarkers[currentPetId].map;
        const newMarker = L.marker([position.lat, position.lng], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            })
        }).addTo(map).bindPopup(`Nuevo avistamiento<br>Fecha: ${newSighting.date}`);

        petMarkers[currentPetId].sightingMarkers.push(newMarker);

        const group = new L.featureGroup([
            petMarkers[currentPetId].mainMarker,
            ...petMarkers[currentPetId].sightingMarkers
        ]);
        map.fitBounds(group.getBounds().pad(0.2));
    }

    saveAllData();
    bootstrap.Modal.getInstance(document.getElementById('sightingModal')).hide();
    alert('¡Avistamiento reportado correctamente!');
}

function markPetAsFound(petId) {
    if (!confirm('¿Estás seguro de marcar este perrito como encontrado?')) {
        return;
    }
    
    const petIndex = lostPets.findIndex(p => p.id === petId);
    if (petIndex === -1) return;
    
    const foundPet = { ...lostPets[petIndex] };
    foundPet.foundLocation = foundPet.location;
    foundPet.date = new Date().toLocaleDateString();
    delete foundPet.location;
    delete foundPet.sightings;
    
    lostPets.splice(petIndex, 1);
    foundPets.unshift(foundPet);
    
    saveAllData();
    displayAllPets();
    alert('¡Perrito marcado como encontrado!');
}

function loadComments(petId) {
    const pet = lostPets.find(p => p.id === petId);
    const container = document.getElementById('comments-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!pet?.comments?.length) {
        container.innerHTML = '<p>No hay comentarios aún.</p>';
        return;
    }
    
    pet.comments.forEach(comment => {
        const commentEl = document.createElement('div');
        commentEl.className = 'comment mb-3 p-3 bg-light rounded';
        commentEl.innerHTML = `
            <h6>${comment.user || 'Anónimo'}</h6>
            <p>${comment.text}</p>
            <small class="text-muted">${comment.date}</small>
        `;
        container.appendChild(commentEl);
    });
}

function submitComment() {
    const commentText = document.getElementById('new-comment').value.trim();
    if (!commentText || !currentPetId) {
        alert('Escribe un comentario primero');
        return;
    }
    
    const petIndex = lostPets.findIndex(p => p.id === currentPetId);
    if (petIndex === -1) {
        alert('Error: No se encontró el perrito');
        return;
    }
    
    const newComment = {
        user: "Usuario",
        text: commentText,
        date: new Date().toLocaleDateString()
    };
    
    if (!lostPets[petIndex].comments) {
        lostPets[petIndex].comments = [];
    }
    
    lostPets[petIndex].comments.push(newComment);
    saveAllData();
    loadComments(currentPetId);
    document.getElementById('new-comment').value = '';
}

function submitReport() {
    const petName = document.getElementById('pet-name').value;
    const description = document.getElementById('pet-description').value;
    const contactInfo = document.getElementById('contact-info').value;
    const photoInput = document.getElementById('pet-photo');
    
    if (!description || !contactInfo || !photoInput.files[0]) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    let photoUrl;
    try {
        photoUrl = URL.createObjectURL(photoInput.files[0]);
    } catch (e) {
        console.error('Error al procesar foto:', e);
        alert('Error al procesar la imagen. Intenta con otra foto.');
        return;
    }
    
    const newPet = {
        id: Date.now(),
        name: petName,
        description,
        photo: photoUrl,
        date: new Date().toLocaleDateString(),
        contactInfo,
        location: null,
        sightings: [],
        comments: []
    };
    
    lostPets.unshift(newPet);
    saveAllData();
    displayAllPets();
    document.getElementById('report-form').reset();
    alert(`¡Reporte de ${petName || 'perrito'} enviado correctamente!`);
    document.getElementById('perdidos').scrollIntoView({ behavior: 'smooth' });
}

function setupEventListeners() {
    document.getElementById('report-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitReport();
    });
    
    document.getElementById('get-location-btn').addEventListener('click', getCurrentLocation);
    document.getElementById('submit-sighting').addEventListener('click', submitSighting);
    document.getElementById('submit-comment').addEventListener('click', submitComment);
}
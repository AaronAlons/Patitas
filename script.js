// Datos iniciales completos (15 perdidos + 15 encontrados)
const initialLostPets = [
    {
        id: 1,
        name: "Max",
        description: "Perro labrador dorado, collar azul, perdido cerca del parque central. Responde al nombre Max y tiene microchip.",
        photo: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "15/05/2023",
        location: { lat: 19.4326, lng: -99.1332 },
        sightings: [
            { date: "16/05/2023", location: { lat: 19.4350, lng: -99.1350 } }
        ],
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
    },
    {
        id: 7,
        name: "Maya",
        description: "Perrita beagle tricolor, muy juguetona. Se perdió durante un viaje familiar en Coyoacán.",
        photo: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "21/05/2023",
        location: { lat: 19.3496, lng: -99.1613 },
        sightings: [],
        comments: [],
        contactInfo: "tel:5544556677"
    },
    {
        id: 8,
        name: "Simba",
        description: "Perro mestizo mediano, color dorado como un león. Se perdió en el parque México.",
        photo: "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "19/05/2023",
        location: { lat: 19.4190, lng: -99.1670 },
        sightings: [],
        comments: [],
        contactInfo: "tel:5588990011"
    },
    {
        id: 11,
        name: "Rufo",
        description: "Perro mestizo mediano, color café con manchas blancas. Se perdió en la colonia Narvarte. Tiene cicatriz en la oreja derecha.",
        photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
        date: "25/05/2023",
        location: { lat: 19.3975, lng: -99.1579 },
        sightings: [],
        comments: [],
        contactInfo: "tel:5512348765"
    },
    {
        id: 13,
        name: "Taco",
        description: "Perro chihuahua cabeza de venado, color crema. Se perdió en Mixcoac. Usa collar azul con chapita de identificación.",
        photo: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "24/05/2023",
        location: { lat: 19.3715, lng: -99.1864 },
        sightings: [],
        comments: [],
        contactInfo: "tel:5577883344"
    }
];

const initialFoundPets = [
    {
        id: 16,
        name: "Rocky",
        description: "Perro mestizo encontrado en Polanco, aproximadamente 2 años.",
        photo: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        date: "12/05/2023",
        foundLocation: { lat: 19.4339, lng: -99.1941 },
        contactInfo: "Refugio Amigos Fieles - tel:5555667788"
    },
    {
        id: 17,
        name: "Daisy",
        description: "Perrita salchicha encontrada en la colonia Roma. Usa un collar rosa sin placa.",
        photo: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
        date: "16/05/2023",
        foundLocation: { lat: 19.4194, lng: -99.1615 },
        contactInfo: "Clínica Veterinaria Patitas - tel:5544332211"
    },
    {
        id: 20,
        name: "Zeus",
        description: "Perro gran danés encontrado en Santa Fe. Es joven y muy juguetón.",
        photo: "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "22/05/2023",
        foundLocation: { lat: 19.3593, lng: -99.2593 },
        contactInfo: "Refugio Milagros Caninos - tel:5555667788"
    },
    {
        id: 22,
        name: "Rocky",
        description: "Perro schnauzer miniatura encontrado en la Del Valle. Tiene placa con nombre pero sin teléfono.",
        photo: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "19/05/2023",
        foundLocation: { lat: 19.3869, lng: -99.1638 },
        contactInfo: "Albergue Patitas Felices - tel:5544332211"
    },
    {
        id: 23,
        name: "Luna",
        description: "Perrita husky encontrada en Interlomas. Tiene ojos de diferente color (uno azul, uno café).",
        photo: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "21/05/2023",
        foundLocation: { lat: 19.4018, lng: -99.1576 },
        contactInfo: "tel:5577889900 (Familia Rodríguez)"
    },
    {
        id: 24,
        name: "Toby",
        description: "Perro golden retriever encontrado en el Bosque de Chapultepec. Es adulto y muy tranquilo.",
        photo: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        date: "23/05/2023",
        foundLocation: { lat: 19.4210, lng: -99.1865 },
        contactInfo: "Guardería Canina Happy Dog - tel:5599887766"
    },
    {
        id: 25,
        name: "Coco",
        description: "Perro chihuahua encontrado en la Nápoles. Es anciano y necesita medicamento.",
        photo: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "24/05/2023",
        foundLocation: { lat: 19.3970, lng: -99.1678 },
        contactInfo: "Veterinaria Central - tel:5555667788"
    },
    {
        id: 26,
        name: "Manchas",
        description: "Perro dálmata encontrado en Jardín Balbuena. Tiene sobrepeso y necesita dieta especial.",
        photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        date: "29/05/2023",
        foundLocation: { lat: 19.4893, lng: -99.1197 },
        contactInfo: "Veterinaria Balbuena - tel:5555234567"
    },
    {
        id: 27,
        name: "Pelusa",
        description: "Perrita pomerania blanca encontrada en Lindavista. Está esterilizada y tiene chip.",
        photo: "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "30/05/2023",
        foundLocation: { lat: 19.4915, lng: -99.1357 },
        contactInfo: "tel:5544332211 (Familia González)"
    },
    {
        id: 29,
        name: "Chocolate",
        description: "Perro labrador chocolate encontrado en Xochimilco. Es joven y muy energético.",
        photo: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        date: "31/05/2023",
        foundLocation: { lat: 19.2578, lng: -99.1036 },
        contactInfo: "Refugio Xochimilco - tel:5555456789"
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
            setTimeout(() => initPetMap(pet.id, pet.location, pet.sightings), 100);
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
// Cambios en la función initPetMap para hacerlo interactivo
function initPetMap(petId, mainLocation, sightings) {
    const mapElement = document.getElementById(`map-${petId}`);
    if (!mapElement || !mainLocation) return;

    // Limpiar mapa existente si hay uno
    if (petMarkers[petId]) {
        petMarkers[petId].map.remove();
    }

    // Crear nuevo mapa con interacción
    const map = L.map(mapElement, {
        center: [mainLocation.lat, mainLocation.lng],
        zoom: 15,
        zoomControl: true,
        dragging: true,
        scrollWheelZoom: true
    });

    // Capa de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Marcador principal (rojo)
    const mainMarker = L.marker([mainLocation.lat, mainLocation.lng], {
        icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        })
    }).addTo(map).bindPopup("Última ubicación reportada");

    // Array para almacenar marcadores de avistamientos
    const sightingMarkers = [];

    // Agregar marcadores de avistamientos (azules)
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

    // Guardar referencia al mapa y marcadores
    petMarkers[petId] = {
        map: map,
        mainMarker: mainMarker,
        sightingMarkers: sightingMarkers
    };

    // Ajustar el zoom para mostrar todos los marcadores
    if (sightings.length > 0) {
        const group = new L.featureGroup([mainMarker, ...sightingMarkers]);
        map.fitBounds(group.getBounds().pad(0.2));
    }

    // Forzar actualización de tamaño
    setTimeout(() => map.invalidateSize(), 100);
}

// Modificar la función submitSighting para actualizar el mapa
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

    // Crear nuevo avistamiento
    const newSighting = {
        date: new Date().toLocaleDateString(),
        location: { lat: position.lat, lng: position.lng }
    };

    // Agregar a los avistamientos
    if (!lostPets[petIndex].sightings) {
        lostPets[petIndex].sightings = [];
    }
    
    lostPets[petIndex].sightings.push(newSighting);

    // Actualizar el mapa existente
    if (petMarkers[currentPetId]) {
        const map = petMarkers[currentPetId].map;
        
        // Agregar nuevo marcador (verde para el más reciente)
        const newMarker = L.marker([position.lat, position.lng], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            })
        }).addTo(map).bindPopup(`Nuevo avistamiento<br>Fecha: ${newSighting.date}`);

        petMarkers[currentPetId].sightingMarkers.push(newMarker);

        // Ajustar el zoom para mostrar todos los marcadores
        const group = new L.featureGroup([
            petMarkers[currentPetId].mainMarker,
            ...petMarkers[currentPetId].sightingMarkers
        ]);
        map.fitBounds(group.getBounds().pad(0.2));
    }

    // Guardar y actualizar
    saveAllData();
    
    // Cerrar modal
    bootstrap.Modal.getInstance(document.getElementById('sightingModal')).hide();
    
    // Mostrar mensaje
    alert('¡Avistamiento reportado correctamente!');
}

// Actualizar la función displayPetsSection para mantener interactividad
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
            // Usar setTimeout para asegurar que el elemento del mapa esté en el DOM
            setTimeout(() => {
                initPetMap(pet.id, pet.location, pet.sightings || []);
            }, 100);
        }
    });
}

function initMapModal() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Limpiar mapa existente
    if (mapModal) {
        mapModal.remove();
    }
    
    // Crear nuevo mapa
    mapModal = L.map(mapElement).setView([19.4326, -99.1332], 12);
    
    // Capa de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapModal);
    
    // Forzar actualización de tamaño
    setTimeout(() => mapModal.invalidateSize(), 100);
}

function getCurrentLocation() {
    if (!navigator.geolocation) {
        alert('Tu navegador no soporta geolocalización');
        return;
    }
    
    // Limpiar marcador anterior
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
            
            // Centrar mapa en la ubicación
            mapModal.setView([pos.lat, pos.lng], 15);
            
            // Agregar marcador
            currentMarker = L.marker([pos.lat, pos.lng], {
                icon: L.icon({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34]
                })
            }).addTo(mapModal);
            
            currentMarker.bindPopup('Tu ubicación actual').openPopup();
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
    
    // Crear nuevo avistamiento
    const newSighting = {
        date: new Date().toLocaleDateString(),
        location: { lat: position.lat, lng: position.lng }
    };
    
    // Agregar a los avistamientos
    if (!lostPets[petIndex].sightings) {
        lostPets[petIndex].sightings = [];
    }
    
    lostPets[petIndex].sightings.push(newSighting);
    
    // Si no tenía ubicación principal, establecerla
    if (!lostPets[petIndex].location) {
        lostPets[petIndex].location = { lat: position.lat, lng: position.lng };
    }
    
    // Guardar y actualizar
    saveAllData();
    displayAllPets();
    
    // Cerrar modal
    bootstrap.Modal.getInstance(document.getElementById('sightingModal')).hide();
    
    // Mostrar mensaje
    alert('¡Avistamiento reportado correctamente!');
}

function markPetAsFound(petId) {
    if (!confirm('¿Estás seguro de marcar este perrito como encontrado?')) {
        return;
    }
    
    const petIndex = lostPets.findIndex(p => p.id === petId);
    if (petIndex === -1) return;
    
    // Mover de perdidos a encontrados
    const foundPet = { ...lostPets[petIndex] };
    foundPet.foundLocation = foundPet.location;
    foundPet.date = new Date().toLocaleDateString();
    delete foundPet.location;
    delete foundPet.sightings;
    
    // Eliminar de perdidos y agregar a encontrados
    lostPets.splice(petIndex, 1);
    foundPets.unshift(foundPet);
    
    // Guardar y actualizar
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
    
    // Crear nuevo comentario
    const newComment = {
        user: "Usuario",
        text: commentText,
        date: new Date().toLocaleDateString()
    };
    
    // Agregar a los comentarios
    if (!lostPets[petIndex].comments) {
        lostPets[petIndex].comments = [];
    }
    
    lostPets[petIndex].comments.push(newComment);
    
    // Guardar y actualizar
    saveAllData();
    
    // Recargar comentarios y limpiar campo
    loadComments(currentPetId);
    document.getElementById('new-comment').value = '';
}

function submitReport() {
    const petName = document.getElementById('pet-name').value;
    const description = document.getElementById('pet-description').value;
    const contactInfo = document.getElementById('contact-info').value;
    const photoInput = document.getElementById('pet-photo');
    
    // Validación
    if (!description || !contactInfo || !photoInput.files[0]) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    // Procesar foto
    let photoUrl;
    try {
        photoUrl = URL.createObjectURL(photoInput.files[0]);
    } catch (e) {
        console.error('Error al procesar foto:', e);
        alert('Error al procesar la imagen. Intenta con otra foto.');
        return;
    }
    
    // Crear nuevo reporte
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
    
    // Agregar a perdidos
    lostPets.unshift(newPet);
    
    // Guardar y actualizar
    saveAllData();
    displayAllPets();
    
    // Limpiar formulario
    document.getElementById('report-form').reset();
    
    // Mostrar mensaje y desplazar
    alert(`¡Reporte de ${petName || 'perrito'} enviado correctamente!`);
    document.getElementById('perdidos').scrollIntoView({ behavior: 'smooth' });
}

function setupEventListeners() {
    // Formulario de reporte
    document.getElementById('report-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitReport();
    });
    
    // Botones del modal de avistamiento
    document.getElementById('get-location-btn').addEventListener('click', getCurrentLocation);
    document.getElementById('submit-sighting').addEventListener('click', submitSighting);
    
    // Botón de comentarios
    document.getElementById('submit-comment').addEventListener('click', submitComment);
}
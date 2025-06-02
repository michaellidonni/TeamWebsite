document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById("rosterGrid");
    const render = list => {
        grid.innerHTML = '';
        list.forEach((p, index) => {
            const col = document.createElement('div');
            col.className = 'col-6 col-lg-2';
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${p.photo}" class="card-img-top photo" alt="${p.firstName} ${p.lastName}">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
                        <div class=" badge badge-position badge-pos-${p.weightClass}">${p.weightClass}</div>
                        <p class="small age mb-0">Rank ${p.rank}</p>
                        <p class="small age mb-2">Age ${p.age}</p>
                        <button class="btn btn-sm btn-primary show-info-btn" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
                            More Info
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(col);
        });
    };

    render(players);

    grid.addEventListener('click', function (e) {
        if (e.target.classList.contains('show-info-btn')) {
            const index = e.target.getAttribute('data-player-index');
            const player = players[index];
            showPlayerModal(player);
        }
    });

    function showPlayerModal(player) {
        document.getElementById('modalPhoto').src = player.photo;
        document.getElementById('modalName').textContent = `${player.firstName} ${player.lastName}`;
        document.getElementById('modalPosition').textContent = player.weightClass;
        document.getElementById('modalRank').textContent = `Rank ${player.rank}`;
        document.getElementById('modalAge').textContent = `Age ${player.age}`;
    }
});

const params = new URLSearchParams(window.location.search);
const id = params.get('id').toLowerCase();
const profil = profils[id];
const container = document.getElementById('profil-container');

if (profil) {
    // Découpe l'histoire en paragraphes
    const paragraphs = profil.histoire.split('\n').filter(p => p.trim() !== '');
    
    // Répartit les photos dans le texte (positions 2 et 5)
    const buildStory = () => {
        let html = '';
        paragraphs.forEach((para, i) => {
            html += `<p>${para}</p>`;
            
            // Photo insérée après le 2e paragraphe
if (i === 1) {
    html += `
    <div class="profil-img-edito left">
        <img src="${profil.image2}" alt="${profil.nom}">
        <span class="img-caption">${profil.nom} — ${profil.role}</span>
    </div>`;
}
// Photo insérée après le 5e paragraphe
if (i === 4) {
    html += `
    <div class="profil-img-edito right">
        <img src="${profil.image3}" alt="${profil.nom}">
        <span class="img-caption">${profil.role}</span>
    </div>`;
}
            
        });
        return html;
    };

    container.innerHTML = `

        <!-- HERO PLEINE LARGEUR -->
        <div class="profil-cover">
            <img src="${profil.image}" alt="${profil.nom}" class="profil-cover-img">
            <div class="profil-cover-overlay"></div>
            <div class="profil-cover-content">
                <span class="profil-cover-badge">${profil.badge}</span>
                <h1>${profil.nom}</h1>
                <p class="profil-cover-role">${profil.role}</p>
            </div>
        </div>

        <!-- CONTENU ÉDITORIAL -->
        <div class="profil-editorial">

            <!-- Citation mise en avant -->
            <div class="profil-pull-quote">
                <blockquote>"${profil.citation}"</blockquote>
            </div>

            <!-- Texte + photos intercalées -->
            <div class="profil-story">
                ${buildStory()}
            </div>

            <!-- Bouton retour -->
            <div class="profil-back-wrap">
                <a href="profils.html" class="btn-retour">← Retour aux profils</a>
            </div>
        </div>
    `;
} else {
    container.innerHTML = '<p style="padding:100px 40px;text-align:center;">Profil introuvable.</p>';
}
// проверка
console.log('скрипт работает!');

// помещение для карточек
const grid_place = document.querySelector('.mod-grid');

// данные карточек
let mod_cards = [
    // {
    //     container_title: 'Default mod name',
    //     container_description: 'Default description for the default mod title.',

    //     mod_icon_src: './imgs/modlist/default/icon.png',
    //     mod_background: './imgs/modlist/default/background.png',
    //     mod_general_color: '#00D076',

    //     mod_title: 'Minecraft Mod',
    //     mod_description: 'Default description for a mod <br/>without a description',
    //     mod_website_url: 'https://files.minecraftforge.net/net/minecraftforge/forge/',
    //     mod_curseforge_url: 'https://www.curseforge.com/',

    //     mod_size: '420 MB',
    //     mod_requirements: 'req',
    // },
    {
        container_title: 'A taste of paradise',
        container_description: 'Does everyone remember <br/>the glowstone portal?',

        mod_icon_src: './imgs/modlist/aether/icon.png',
        mod_background: './imgs/modlist/aether/background.png',
        mod_general_color: '#4D51ED',

        mod_title: 'The Aether',
        mod_description: 'Aether allows you <br/>to journey to the Heavens.',
        mod_website_url: 'https://www.curseforge.com/minecraft/mc-mods/aether',
        mod_curseforge_url: 'https://www.curseforge.com/minecraft/mc-mods/aether',

        mod_size: '14,00 MB',
        mod_requirements: 'low',
    },
    {
        container_title: 'Ancient danger',
        container_description: 'Feel the presence of <br/>something majestic.',

        mod_icon_src: './imgs/modlist/fossils/icon.png',
        mod_background: './imgs/modlist/fossils/background.png',
        mod_general_color: '#FF6A00',

        mod_title: 'Fossils & Archeology',
        mod_description: 'Find fossilized bones and raise dinosaurs special enclosures!',
        mod_website_url: 'https://fossils-archeology.fandom.com/wiki/F/A_Mod_Revival_Wiki',
        mod_curseforge_url: 'https://www.curseforge.com/minecraft/mc-mods/fossils',

        mod_size: '52,51 MB',
        mod_requirements: 'medium',
    },
    {
        container_title: 'A mod for dreamers',
        container_description: 'Immerse yourself fully in an epic, galaxy-spanning adventure.',

        mod_icon_src: './imgs/modlist/galacticraft/icon.png',
        mod_background: './imgs/modlist/galacticraft/background.png',
        mod_general_color: '#313131',

        mod_title: 'Galacticraft',
        mod_description: 'Build your space base and set off to explore infinity space!',
        mod_website_url: 'https://ru.minecraft.wiki/w/Galacticraft',
        mod_curseforge_url: 'https://www.curseforge.com/minecraft/mc-mods/galacticraft-legacy',

        mod_size: '29,95 MB',
        mod_requirements: 'hard',
    },
    {
        container_title: 'Сlatter of wheels',
        container_description: 'Does everyone remember <br/>the glowstone portal?',

        mod_icon_src: './imgs/modlist/railcraft/icon.png',
        mod_background: './imgs/modlist/railcraft/background.png',
        mod_general_color: '#EA3326',

        mod_title: 'Railcraft',
        mod_description: 'Railcraft will help you with logistics and add new rails.',
        mod_website_url: 'https://ru.minecraft.wiki/w/Railcraft',
        mod_curseforge_url: 'https://www.curseforge.com/minecraft/mc-mods/railcraft',

        mod_size: '131,56 MB',
        mod_requirements: 'hard',
    },
    {
        container_title: 'Civilizations mod',
        container_description: 'It will appeal to those who want "smart" residents.',

        mod_icon_src: './imgs/modlist/millinaire/icon.png',
        mod_background: './imgs/modlist/millinaire/background.png',
        mod_general_color: '#05A49F',

        mod_title: 'Millenaire',
        mod_description: 'Build your own civilization or stick with an existing one.',
        mod_website_url: 'https://ru.minecraft.wiki/w/Railcraft',
        mod_curseforge_url: 'https://www.curseforge.com/minecraft/mc-mods/railcraft',

        mod_size: '6,79 MB',
        mod_requirements: 'hard',
    },
    {
        container_title: 'A Creepy Surprise',
        container_description: 'I just felt like adding some <br/>multicolored creepers.',

        mod_icon_src: './imgs/modlist/camo_creepers/icon.png',
        mod_background: './imgs/modlist/camo_creepers/background.png',
        mod_general_color: '#00D076',

        mod_title: 'Camouflaged Creepers',
        mod_description: 'I’m not even sure myself what they are yet.',
        mod_website_url: 'https://www.curseforge.com/minecraft/mc-mods/camo-creepers/gallery',
        mod_curseforge_url: 'https://www.curseforge.com/minecraft/mc-mods/camouflaged-creepers',

        mod_size: '466 KB',
        mod_requirements: 'low',
    },
];

// создание карточки
grid_place.innerHTML = mod_cards.map(mod_card => `
    <!-- Контейнер карточки -->
    <article class="mod-card-container">

        <!-- Шапка контейнера -->
        <header class="mod-card-container__header">
            <h3 class="mod-card-container__title">${mod_card.container_title}</h3>
            <p class="mod-card-container__subtitle">${mod_card.container_description}</p>
        </header>

        <!-- Карточка -->
        <div class="mod-card" style="
            background:

            url(../imgs/modlist/card-back-deco.png) top no-repeat,

            linear-gradient(
                to bottom, 
                color-mix(in srgb, ${mod_card.mod_general_color} 80%, transparent) 0%, 
                #111111 67%, 
                #1D1D1D 100%
            ),

            url(${mod_card.mod_background}) center center / 100% no-repeat;

            border: 1px solid #393C3D;
            outline: 1px solid #2a2c2c;
            outline-offset: 3px;
        ">

            <!-- Иконка мода -->
            <div class="mod-card__icon">
                <img src="${mod_card.mod_icon_src}"/>
            </div>

            <!-- Название и описание мода -->
            <h4 class="mod-card__name">${mod_card.mod_title}</h4>
            <p class="mod-card__desc">${mod_card.mod_description}</p>

            <!-- Ссылки -->
            <div class="mod-card__links">
                <a 
                    href="${mod_card.mod_website_url}" 
                    class="mod-card__link btn--primary" 
                    target="_blank"
                >
                    <span style="
                        color: ${mod_card.mod_general_color}; 
	                    font-size: 16px;
                    ">◆</span>Official website
                </a>
                <a 
                    href="${mod_card.mod_curseforge_url}" 
                    class="mod-card__link btn--secondary"
                    target="_blank"
                >
                    Curse Forge
                </a>
            </div>
        </div>

        <!-- Метаданные контейнера карточки -->
        <footer class="mod-card__footer">
            <span class="mod-card__size">${mod_card.mod_size}</span>
            <span class="mod-card__status mod-card__status ${mod_card.mod_requirements}">
            <span class="mod-card__status-dot"></span>${mod_card.mod_requirements}
            </span>
        </footer>
    </article>
`).join("");
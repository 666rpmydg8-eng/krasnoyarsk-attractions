// Данные о достопримечательностях Красноярского края
const attractions = [
    {
        id: 1,
        name: "Природный парк «Столбы»",
        category: "nature",
        image: "https://kras-stolby.ru/media-proxy/cache/b6/96/b696518ae1f18d88bf424e899de05ad9.jpg",
        description: "Уникальный природный парк с красивыми скальными формированиями. Идеальное место для пеших прогулок и скалолазания.",
        coordinates: "55.7642° N, 93.0353° E",
        facts: "Столбы - это государственный природный заповедник, основанный в 1925 году. Площадь около 47,219 га. Высота столбов достигает 100 метров."
    },
    {
        id: 2,
        name: "Енисей",
        category: "nature",
        image: "https://avatars.mds.yandex.net/i?id=b022605ba71ed7abb8b8d11a3551889b_l-8081694-images-thumbs&n=13",
        description: "Одна из крупнейших рек России. Енисей протекает через Красноярск, создавая величественный пейзаж.",
        coordinates: "55.7558° N, 93.0395° E",
        facts: "Енисей - третья по длине река России (3487 км). Впадает в Карское море. Пересекает три климатические зоны."
    },
    {
        id: 3,
        name: "Красноярский краеведческий музей",
        category: "museum",
        image: "https://avatars.mds.yandex.net/i?id=2cbbdb3cb2c022d8f3065fd3ecf3a597_l-5231505-images-thumbs&n=13",
        description: "Один из крупнейших музеев Сибири. Хранит богатую коллекцию артефактов, отражающих историю и культуру края.",
        coordinates: "55.7621° N, 93.0565° E",
        facts: "Музей основан в 1889 году. Коллекция насчитывает более 80,000 предметов. Здесь хранятся экспонаты, связанные с историей коренных народов Сибири."
    },
    {
        id: 4,
        name: "Часовня Параскевы Пятницы",
        category: "temple",
        image: "https://static.tildacdn.com/tild3164-6135-4337-b164-376336313466/photo.jpg",
        description: "Символ города Красноярска. Часовня красиво расположена на скале и видна из разных уголков города.",
        coordinates: "55.7699° N, 93.0315° E",
        facts: "Часовня построена в 1804 году. Находится на высоте 100 метров над уровнем Енисея. С площадки открывается панорамный вид на город."
    },
    {
        id: 5,
        name: "Красноярск",
        category: "city",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Красноярск_Стрелка_с_высоты.jpg/1280px-Красноярск_Стрелка_с_высоты.jpg",
        description: "Крупный город на берегу Енисея. Население около 1 млн человек. Центр культуры и образования Сибири.",
        coordinates: "55.7558° N, 93.0395° E",
        facts: "Красноярск основан в 1628 году как острог. Город входит в список самых красивых городов России. Здесь проводилась Универсиада 2019."
    },
    {
        id: 6,
        name: "Музей-усадьба В.И. Сурикова",
        category: "museum",
        image: "https://avatars.mds.yandex.net/i?id=d4acf6f6a96b56f6d1523a3100edca3c_l-9690504-images-thumbs&n=13",
        description: "Дом-музей известного русского художника. Сохранена атмосфера жилища великого мастера живописи.",
        coordinates: "55.7621° N, 93.0265° E",
        facts: "Василий Иванович Суриков (1848-1916) - выдающийся русский живописец. Музей содержит его личные вещи и произведения искусства."
    },
    {
        id: 7,
        name: "Саяны",
        category: "nature",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Саянские_горы_возле_Аршана.jpg/960px-Саянские_горы_возле_Аршана.jpg",
        description: "Горная система на юге Красноярского края. Популярное место для горного туризма и альпинизма.",
        coordinates: "52.5 ° N, 92.5° E",
        facts: "Западные и Восточные Саяны - важная часть природного наследия. Высочайшая точка - гора Мунку-Сардык (3491 м). Богаты полезными ископаемыми."
    },
    {
        id: 8,
        name: "Ярмарка «Красноярская»",
        category: "cultural",
        image: "https://avatars.mds.yandex.net/i?id=ec7659bd5d50f2e0b43eca3a5ac44361_l-5260221-images-thumbs&n=13",
        description: "Международная ярмарка. Проходит ежегодно и является одним из крупнейших событий региона.",
        coordinates: "55.7650° N, 93.0420° E",
        facts: "Краевая ярмарка существует с 1993 года. Привлекает более 200,000 посетителей. На ней представлены товары и услуги из разных регионов."
    },
    {
        id: 9,
        name: "Литературный музей",
        category: "museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Литературный_музей_им._В.П._Астафьева.jpg/1280px-Литературный_музей_им._В.П._Астафьева.jpg",
        description: "Музей, посвященный литературной истории Красноярского края. Выставки о знаменитых писателях региона.",
        coordinates: "55.7615° N, 93.0570° E",
        facts: "В музее хранятся рукописи и издания известных писателей. Проводятся лекции и культурные мероприятия. Библиотека содержит редкие издания."
    },
    {
        id: 10,
        name: "Красноярская ГЭС",
        category: "historical",
        image: "https://resize.tripster.ru/oUJCl60VYr7sw1dMA2o2NYydrFE=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/ffb1b560-02a6-42d5-b037-a87f0387803a.jpg",
        description: "Одна из крупнейших гидроэлектростанций России. Грандиозное инженерное сооружение советской эпохи.",
        coordinates: "56.0199° N, 93.0558° E",
        facts: "ГЭС построена в 1971 году. Плотина имеет высоту 124 метра. Мощность станции 6000 МВт. Создано крупное водохранилище."
    },
    {
        id: 11,
        name: "Туристический комплекс «Бор»",
        category: "nature",
        image: "https://cdn.worldota.net/t/1024x768/extranet/cf/03/cf032ae62f40b00a50a372f77344d8018020bbd5.jpeg",
        description: "Лесной массив с развитой инфраструктурой для отдыха. Идеально подходит для семейного туризма.",
        coordinates: "55.8000° N, 93.1200° E",
        facts: "Комплекс включает турбазы, пансионаты и кемпинги. Здесь проложены туристические маршруты. Располагается в экологически чистой зоне."
    },
    {
        id: 12,
        name: "Церковь Архангела Михаила",
        category: "temple",
        image: "https://avatars.mds.yandex.net/i?id=6b7e2115ce7ace2fff5d662465ced191_l-5329060-images-thumbs&n=13",
        description: "Историческая церковь с уникальной архитектурой. Один из старейших храмов Красноярска.",
        coordinates: "55.7598° N, 93.0445° E",
        facts: "Церковь построена в 1861 году. Выполнена в псевдорусском стиле. Недавно отреставрирована и открыта для посещения."
    }
];

// Загрузка достопримечательностей
function loadAttractions(filter = "all", search = "") {
    const grid = document.getElementById('attractionsGrid');
    grid.innerHTML = '';

    let filtered = attractions.filter(attr => {
        const matchCategory = filter === "all" || attr.category === filter;
        const matchSearch = attr.name.toLowerCase().includes(search.toLowerCase()) ||
                          attr.description.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Достопримечательности не найдены</p>';
        return;
    }

    filtered.forEach(attr => {
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.innerHTML = `
            <img src="${attr.image}" alt="${attr.name}" class="attraction-image" onerror="this.src='https://via.placeholder.com/500x300?text=${encodeURIComponent(attr.name)}'">
            <div class="attraction-content">
                <span class="attraction-category">${getCategoryLabel(attr.category)}</span>
                <h3>${attr.name}</h3>
                <p>${attr.description.substring(0, 100)}...</p>
                <button class="btn-learn-more" onclick="openModal(${attr.id})">Узнать больше</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Получить название категории
function getCategoryLabel(category) {
    const labels = {
        nature: "🌲 Природа",
        museum: "🏛️ Музеи",
        temple: "⛩️ Храмы",
        city: "🏙️ Города",
        historical: "📚 Исторические",
        cultural: "🎨 Культура"
    };
    return labels[category] || category;
}

// Открыть модальное окно
function openModal(id) {
    const attr = attractions.find(a => a.id === id);
    if (!attr) return;

    document.getElementById('modalImage').src = attr.image;
    document.getElementById('modalImage').onerror = function() {
        this.src = 'https://via.placeholder.com/500x300?text=' + encodeURIComponent(attr.name);
    };
    document.getElementById('modalTitle').textContent = attr.name;
    document.getElementById('modalCategory').innerHTML = `<strong>Категория:</strong> ${getCategoryLabel(attr.category)}`;
    document.getElementById('modalDescription').innerHTML = `<strong>Описание:</strong> ${attr.description}`;
    document.getElementById('modalCoordinates').innerHTML = `<strong>Координаты:</strong> ${attr.coordinates}`;
    document.getElementById('modalFacts').innerHTML = `<strong>Интересные факты:</strong> ${attr.facts}`;

    document.getElementById('modal').style.display = 'block';
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Обработчик закрытия модального окна при клике на X
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    // Закрыть модальное окно при клике вне его
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Обработчики фильтра и поиска
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const category = categoryFilter.value;
            const search = this.value;
            loadAttractions(category, search);
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const search = searchInput.value;
            loadAttractions(this.value, search);
        });
    }

    // Загрузить достопримечательности при загрузке страницы
    loadAttractions();
});

// Плавная прокрутка при клике на ссылки навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

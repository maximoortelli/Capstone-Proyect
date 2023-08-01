function PersonsConstructor(image, name, subtitle, description) {
  this.name = name;
  this.description = description;
  this.subtitle = subtitle;
  this.image = image;
}

const alvar = new PersonsConstructor(
  'images/i1.svg',
  'Yochai Alvar',
  'Berkman professor of entrepreneurial legal studies at Harvard law school',
  'Alvar studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
);

const chon = new PersonsConstructor(
  'images/i2.svg',
  'Kilnam Chon',
  'Kilnam Chon, renowned computer scientist from South Korea.',
  'Kilnam Chon helped bring the internet to Asia and is an outspooken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society´s (ISOC) Internet Hall of Fame.',
);

const julia = new PersonsConstructor(
  'images/i3.svg',
  'Julia Leda',
  'President of Younh Pirates of Europe',
  'European integration, political democracy and participation of youth trough online as her mayor condem, Reda is report outlining potential changes to EU copyright law was approved by the Parlament in July.',
);

const lila = new PersonsConstructor(
  'images/i4.svg',
  'Lila Tretikov',
  'Executive Director of the Wikimedia Foundation',
  'Lila Tretikov is the Executive director of the Wikimedia foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
);

const ryan = new PersonsConstructor(
  'images/i5.svg',
  'Ryan Merkley',
  'CEO of Creative Commons, ex COO of the Mozilla Foundation',
  'Ryan had been leading open-source proyects at the Mozilla Foundation such as the open source movement.',
);

const noh = new PersonsConstructor(
  'images/i6.svg',
  'SohYeong Noh',
  'Director of Art Centre Nabi and a board member of CC Korea',
  'As the main vanue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
);

const persons = [alvar, chon, julia, lila, ryan, noh];

function Card(person) {
  const htmlTemplate = `
  <div class="all-cards">
    <div class="image"><img src="${person.image}" alt="${person.name}"></div>
    <div class="all-cards-text">
      <h4>${person.name}</h4>
      <p class="suborange">${person.subtitle}</p>
      <hr>
      <p class="description"> ${person.description}</p>
    </div>
  </div>
  `;
  return htmlTemplate;
}

const gridPerson = document.getElementById('person');

document.addEventListener('DOMContentLoaded', () => {
  persons.forEach((n) => {
    gridPerson.innerHTML += Card(n);
  });
});

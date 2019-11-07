export interface Candidate {
  id: string;
  name: string;
  imgSrc: string;
  birthday: Date;
  data: number[];
}

const candidates: Candidate[] = [
  {
    id: 'joe-biden',
    name: 'Joe Biden',
    imgSrc: 'http://www.gstatic.com/tv/thumb/persons/588180/588180_v9_ba.jpg',
    birthday: new Date('Nov 20 1942'),
    data: [],
  },
  {
    id: 'cory-booker',
    name: 'Cory Booker',
    imgSrc: 'http://www.gstatic.com/tv/thumb/persons/579427/579427_v9_ba.jpg',
    birthday: new Date('Apr 27 1969'),
    data: [],
  },
  {
    id: 'pete-buttigieg',
    name: 'Pete Buttigieg',
    // tslint:disable-next-line:max-line-length
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pete_Buttigieg_by_Gage_Skidmore.jpg/440px-Pete_Buttigieg_by_Gage_Skidmore.jpg',
    birthday: new Date('Jan 19 1982'),
    data: [],
  },
  {
    id: 'tulsi-gabbard',
    name: 'Tulsi Gabbard',
    // tslint:disable-next-line:max-line-length
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress.jpg/1200px-Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress.jpg',
    birthday: new Date('Apr 12 1981'),
    data: [],
  },
  {
    id: 'kamala-harris',
    name: 'Kamala Harris',
    imgSrc: 'https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2019/10/kamala-harris-april-2019.jpg?fit=789%2C460&ssl=1',
    birthday: new Date('Oct 20 1964'),
    data: [],
  },
  {
    id: 'amy-klobuchar',
    name: 'Amy Klobuchar',
    // tslint:disable-next-line:max-line-length
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg/1200px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg',
    birthday: new Date('May 25 1960'),
    data: [],
  },
  {
    id: 'bernie-sanders',
    name: 'Bernie Sanders',
    imgSrc: 'https://image.businessinsider.com/5d7162e22e22af6596043fcb?width=1100&format=jpeg&auto=webp',
    birthday: new Date('Sep 8 1941'),
    data: [],
  },
  {
    id: 'tom-steyer',
    name: 'Tom Steyer',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Tom_Steyer_by_Gage_Skidmore.jpg',
    birthday: new Date('Jun 27 1957'),
    data: [],
  },
  {
    id: 'elizabeth-warren',
    name: 'Elizabeth Warren',
    // tslint:disable-next-line:max-line-length
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg/1200px-Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg',
    birthday: new Date('Jun 22 1949'),
    data: [],
  },
  {
    id: 'andrew-yang',
    name: 'Andrew Yang',
    // tslint:disable-next-line:max-line-length
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Andrew_Yang_talking_about_urban_entrepreneurship_at_Techonomy_Conference_2015_in_Detroit%2C_MI_%28cropped%29.jpg/220px-Andrew_Yang_talking_about_urban_entrepreneurship_at_Techonomy_Conference_2015_in_Detroit%2C_MI_%28cropped%29.jpg',
    birthday: new Date('Jan 13 1975'),
    data: [],
  },
];

export default candidates;

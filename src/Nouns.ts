export enum KasusName {
  Nominativ,
  Genitiv,
  Dativ,
  Akkusativ,
  Plural
}

export interface Kasus {
  name: KasusName
  phrase: string
  toFill: string
  translation: string
}

export interface Noun {
  key: string
  translation: string
  kasus: Kasus[]
}

export const nouns: Noun[] = [
  {
    key: 'Hund',
    translation: 'dog',
    kasus: [
      {
        name: KasusName.Nominativ,
        phrase: 'Der Hund bellt.',
        toFill: '___ Hund bellt.',
        translation: 'The dog is barking.'
      },
      {
        name: KasusName.Genitiv,
        phrase: 'Das Futter des Hundes ist lecker.',
        toFill: 'Das Futter ___ ___ ist lecker.',
        translation: 'The dog\'s food is tasty.'
      },
      {
        name: KasusName.Dativ,
        phrase: 'Ich gebe dem Hund einen Knochen.',
        toFill: 'Ich gebe ___ ___ einen Knochen.',
        translation: 'I give the dog a bone.'
      },
      {
        name: KasusName.Akkusativ,
        phrase: 'Ich sehe den Hund im Garten.',
        toFill: 'Ich sehe ___ ___ im Garten.',
        translation: 'I see the dog in the garden.'
      },
      {
        name: KasusName.Plural,
        phrase: 'Die Hunde spielen im Park.',
        toFill: '___ ___ spielen im Park.',
        translation: 'The dogs are playing in the park.'
      }
    ]
  },
  {
    key: 'Katze',
    translation: 'cat',
    kasus: [
      {
        name: KasusName.Nominativ,
        phrase: 'Die Katze schläft.',
        toFill: '___ Katze schläft.',
        translation: 'The cat is sleeping.'
      },
      {
        name: KasusName.Genitiv,
        phrase: 'Das Spielzeug der Katze ist bunt.',
        toFill: 'Das Spielzeug ___ ___ ist bunt.',
        translation: 'The cat\'s toy is colorful.'
      },
      {
        name: KasusName.Dativ,
        phrase: 'Ich gebe der Katze Milch.',
        toFill: 'Ich gebe ___ ___ Milch.',
        translation: 'I give the cat milk.'
      },
      {
        name: KasusName.Akkusativ,
        phrase: 'Ich sehe die Katze auf dem Dach.',
        toFill: 'Ich sehe ___ ___ auf dem Dach.',
        translation: 'I see the cat on the roof.'
      },
      {
        name: KasusName.Plural,
        phrase: 'Die Katzen spielen im Garten.',
        toFill: '___ ___ spielen im Garten.',
        translation: 'The cats are playing in the garden.'
      }
    ]
  },
  {
    key: 'Tisch',
    translation: 'table',
    kasus: [
      {
        name: KasusName.Nominativ,
        phrase: 'Der Tisch ist gedeckt.',
        toFill: '___ Tisch ist gedeckt.',
        translation: 'The table is set.'
      },
      {
        name: KasusName.Genitiv,
        phrase: 'Die Farbe des Tisches gefällt mir.',
        toFill: 'Die Farbe ___ ___ gefällt mir.',
        translation: 'I like the color of the table.'
      },
      {
        name: KasusName.Dativ,
        phrase: 'Ich lege das Buch auf den Tisch.',
        toFill: 'Ich lege das Buch auf ___ ___.',
        translation: 'I put the book on the table.'
      },
      {
        name: KasusName.Akkusativ,
        phrase: 'Ich sehe den Tisch im Wohnzimmer.',
        toFill: 'Ich sehe ___ ___ im Wohnzimmer.',
        translation: 'I see the table in the living room.'
      },
      {
        name: KasusName.Plural,
        phrase: 'Die Tische sind aus Holz.',
        toFill: '___ ___ sind aus Holz.',
        translation: 'The tables are made of wood.'
      }
    ]
  },
  {
    key: 'Stuhl',
    translation: 'chair',
    kasus: [
      {
        name: KasusName.Nominativ,
        phrase: 'Der Stuhl ist bequem.',
        toFill: '___ Stuhl ist bequem.',
        translation: 'The chair is comfortable.'
      },
      {
        name: KasusName.Genitiv,
        phrase: 'Die Lehne des Stuhls ist kaputt.',
        toFill: 'Die Lehne ___ ___ ist kaputt.',
        translation: 'The backrest of the chair is broken.'
      },
      {
        name: KasusName.Dativ,
        phrase: 'Ich sitze auf dem Stuhl.',
        toFill: 'Ich sitze auf ___ ___.',
        translation: 'I am sitting on the chair.'
      },
      {
        name: KasusName.Akkusativ,
        phrase: 'Ich kaufe den Stuhl für das Büro.',
        toFill: 'Ich kaufe ___ ___ für das Büro.',
        translation: 'I am buying the chair for the office.'
      },
      {
        name: KasusName.Plural,
        phrase: 'Die Stühle stehen um den Tisch.',
        toFill: '___ ___ stehen um ___ ___.',
        translation: 'The chairs are arranged around the table.'
      }
    ]
  },
  {
    key: 'Apfel',
    translation: 'apple',
    kasus: [
      {
        name: KasusName.Nominativ,
        phrase: 'Der Apfel ist rot.',
        toFill: '___ Apfel ist rot.',
        translation: 'The apple is red.'
      },
      {
        name: KasusName.Genitiv,
        phrase: 'Die Sorte des Apfels ist wichtig.',
        toFill: 'Die Sorte ___ Apfels ist wichtig.',
        translation: 'The variety of the apple is important.'
      },
      {
        name: KasusName.Dativ,
        phrase: 'Ich gebe dem Kind einen Apfel.',
        toFill: 'Ich gebe ___ ___ einen Apfel.',
        translation: 'I give the child an apple.'
      },
      {
        name: KasusName.Akkusativ,
        phrase: 'Ich esse den Apfel gerne.',
        toFill: 'Ich esse ___ ___ gerne.',
        translation: 'I like to eat the apple.'
      },
      {
        name: KasusName.Plural,
        phrase: 'Die Äpfel sind frisch vom Baum.',
        toFill: '___ ___ sind frisch vom Baum.',
        translation: 'The apples are fresh from the tree.'
      }
    ]
  },
  {
    key: 'Stadt',
    translation: 'city',
    kasus: [
      {
        name: KasusName.Nominativ,
        phrase: 'Die Stadt ist groß.',
        toFill: '___ Stadt ist groß.',
        translation: 'The city is large.'
      },
      {
        name: KasusName.Genitiv,
        phrase: 'Die Geschichte der Stadt ist interessant.',
        toFill: 'Die Geschichte ___ ___ ist interessant.',
        translation: 'The history of the city is interesting.'
      },
      {
        name: KasusName.Dativ,
        phrase: 'Ich wohne in der Stadt.',
        toFill: 'Ich wohne in ___ ___.',
        translation: 'I live in the city.'
      },
      {
        name: KasusName.Akkusativ,
        phrase: 'Ich besuche die Stadt oft.',
        toFill: 'Ich besuche ___ ___ oft.',
        translation: 'I visit the city often.'
      },
      {
        name: KasusName.Plural,
        phrase: 'Die Städte haben viele Einwohner.',
        toFill: '___ ___ haben viele Einwohner.',
        translation: 'The cities have many inhabitants.'
      }
    ]
  }
]

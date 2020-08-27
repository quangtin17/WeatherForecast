import { City } from '../core/interfaces/city';

export const CITIES: Array<City> = [
 {
   name: 'New-York',
   forecast: {
     conditions: 'cloudy',
     wind: {
       speed: 6,
       direction: 'north-west'
     },
     temperature: {
       day: {
         min: 14,
         max: 18
       },
       night: {
         min: 5,
         max: 8
       }
     }
   }
 },
 {
   name: 'London',
   forecast: {
     conditions: 'rain',
     wind: {
       speed: 3,
       direction: 'east'
     },
     temperature: {
       day: {
         min: 11,
         max: 14
       },
       night: {
         min: 3,
         max: 7
       }
     }
   }
 },
 {
   name: 'Tokyo',
   forecast: {
     conditions: 'sunny',
     wind: {
       speed: 2,
       direction: 'south'
     },
     temperature: {
       day: {
         min: 22,
         max: 28
       },
       night: {
         min: 16,
         max: 19
       }
     }
   }
 },
 {
  name: 'Bắc Kinh',
  forecast: {
    conditions: 'sunny',
    wind: {
      speed: 2,
      direction: 'south'
    },
    temperature: {
      day: {
        min: 27,
        max: 30
      },
      night: {
        min: 24,
        max: 26
      }
    }
  }
},
{
  name: 'Paris',
  forecast: {
    conditions: 'cloudy',
    wind: {
      speed: 2,
      direction: 'south'
    },
    temperature: {
      day: {
        min: 17,
        max: 20
      },
      night: {
        min: 16,
        max: 19
      }
    }
  }
},
{
  name: 'Singapore',
  forecast: {
    conditions: 'sunny',
    wind: {
      speed: 2,
      direction: 'south'
    },
    temperature: {
      day: {
        min: 27,
        max: 31
      },
      night: {
        min: 25,
        max: 28
      }
    }
  }
}
];

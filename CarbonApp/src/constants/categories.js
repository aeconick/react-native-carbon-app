const categories = [
    {
        category: 'Meal',
        types: [
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) per meal */

            /* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/ */
            /* Mean greenhouse gas emissions per 2,000 kcal */
            /* https://globalnews.ca/news/3615212/this-is-what-your-breakfast-lunch-and-dinner-calories-actually-look-like/ */
            /* Human eats around 600 calories per meal */
            {
                type: 'High Meat',
                emissions: (7.19 * 600) / 2000,
                unit: 'Quantity',
                text: 'meals(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Medium Meat',
                emissions: (5.63 * 600) / 2000,
                unit: 'Quantity',
                text: 'meals(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Low Meat',
                emissions: (4.67 * 600) / 2000,
                unit: 'Quantity',
                text: 'meals(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Pescetarian',
                emissions: (3.91 * 600) / 2000,
                unit: 'Quantity',
                text: 'meals(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Vegetarian',
                emissions: (3.81 * 600) / 2000,
                unit: 'Quantity',
                text: 'meals(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Vegan',
                emissions: (2.89 * 600) / 2000,
                unit: 'Quantity',
                text: 'meals(s)',
                min: 1,
                max: 10,
            },

        ]
    },
    {
        category: 'Transport',
        types: [
            /* https://static.ducky.eco/calculator_documentation.pdf */

            /* Unit: kgCO2eq/m (kilograms of carbon dioxide equivalent) per ?meter? */

            {
                type: 'Train',
                emissions: 0.042,
                unit: 'Distance',
                text: 'kilometer(s)',
                min: 2,
                max: 1000,
            },
            {
                type: 'Car',
                emissions: 0.257,
                unit: 'Distance',
                text: 'kilometer(s)',
                min: 2,
                max: 1000,
            },
            {
                type: 'Bus',
                emissions: 0.103,
                unit: 'Distance',
                text: 'kilometer(s)',
                min: 2,
                max: 1000,
            },
            {
                type: 'Plane',
                emissions: 0.1,
                unit: 'Duration',
                text: 'kilometer(s)',
                min: 20,
                max: 1000,
            },
            {
                type: 'Boat',
                emissions: 0.803,
                unit: 'Distance',
                text: 'kilometer(s)',
                min: 2,
                max: 1000,
            },
            {
                type: 'Motorbike',
                emissions: 0.108,
                unit: 'Distance',
                text: 'kilometer(s)',
                min: 2,
                max: 1000,
            },
        ]
    }, {
        category: 'Streaming',
        types: [
            /* TODO: Unit: bits/s, use getInternetUsageCarbonImpact to get kgCO₂eq */

            /* MP3 song at 192 kbps (kilobytes per second) / 3.8 MB */

            {
                type: 'Audio - Mp3',
                emissions: 0.000526,
                unit: 'Duration',
                text: 'minutes(s)',
                min: 15,
                max: 600,
            },

            /* 
            Star Wars The Rise Of Skywalker - 2h22
            HD / 720p : 1.21 GB
            Full HD / 1080p : 7.02 GB
            Ultra HD / 2160p : 35.73 Gb
            */

            {
                type: 'Video - Hd',
                emissions: 0.000763,
                unit: 'Duration',
                text: 'minutes(s)',
                min: 15,
                max: 600,
            },
            {
                type: 'Video - FullHd/1080p',
                emissions: 0.002143,
                unit: 'Duration',
                text: 'minutes(s)',
                min: 15,
                max: 600,
            },
            {
                type: 'Video - UltraHd/4K',
                emissions: 0.008964,
                unit: 'Duration',
                text: 'minutes(s)',
                min: 15,
                max: 600,
            },
        ]
    },
    {
        category: 'Purchase',
        types: [
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) per product / transaction */

            {
                type: 'Smartphone',
                emissions: 80,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Laptop',
                emissions: 210,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Tablet',
                emissions: 87,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Computer',
                emissions: 588,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Television',
                emissions: 500,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Electric Car',
                emissions: 8800,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Fossil Fuel Car',
                emissions: 5600,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Hybrid Car',
                emissions: 6500,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Crypto Currency Transaction',
                emissions: 20,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Single Edition Nft',
                emissions: 211,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
        ]
    },
    {
        category: 'Fashion',
        types: [
            /* Unit: kgCO2eq per product */

            /* Clothing
            https://www.ademe.fr/sites/default/files/assets/documents/poids_carbone-biens-equipement-201809-rapport.pdf
            */

            {
                type: 'Coat',
                emissions: (89 + 39 + 25) / 3,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Dress',
                emissions: (56 + 56 + 51) / 3,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Jeans',
                emissions: 25,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Shirt',
                emissions: (13 + 12) / 2,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Shoes',
                emissions: (15 + 19 + 20) / 3,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'Sweater',
                emissions: (28 + 26 + 31 + 56 + 12) / 5,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
            {
                type: 'T-Shirt',
                emissions: (7 + 10 + 6) / 3,
                unit: 'Quantity',
                text: 'item(s)',
                min: 1,
                max: 10,
            },
        ]
    },
    {
        category: 'Food',
        types: [
            /* Unit: kgCO2eq */

            /* http://www.greeneatz.com/foods-carbon-footprint.html */

            {
                type: 'Red Meat',
                emissions: (39.2 + 27.0) / 2000,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            }, // (lamb + beef) / 2
            {
                type: 'White Meat',
                emissions: (12.1 + 10.9 + 6.9) / 3000,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            }, // (pork + turkey + chicken) / 3
            {
                type: 'Fish',
                emissions: 0.0061,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Lamb',
                emissions: 0.0392,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Beef',
                emissions: 0.027,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Cheese',
                emissions: 0.0135,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Pork',
                emissions: 0.0121,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Turkey',
                emissions: 0.0109,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Chicken',
                emissions: 0.0069,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Tuna',
                emissions: 0.0061,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Eggs',
                emissions: 0.0048,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Potatoes',
                emissions: 0.0029,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Rice',
                emissions: 0.0027,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Nuts',
                emissions: 0.0023,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Beans',
                emissions: 0.002,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Tofu',
                emissions: 0.002,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Vegetables',
                emissions: 0.002,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Milk',
                emissions: 0.0019,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Fruit',
                emissions: 0.0011,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Lentils',
                emissions: 0.0009,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },

            /* https://www.bilans-ges.ademe.fr/ */

            {
                type: 'Coffee',
                emissions: 0.00314,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
            {
                type: 'Chocolate',
                emissions: 0.00487,
                unit: 'Quantity',
                text: 'g',
                min: 20,
                max: 500,
            },
        ]
    },
    {
        category: 'Electricity',
        types: [
            /* Unit: kgCO₂eq/J (kilograms of carbon dioxide equivalent) per Joule */

            /* source : https://github.com/carbonalyser/Carbonalyser - kgCO₂eq/kWh */

            {
                type: 'Europe',
                emissions: 0.276,
                unit: 'Consumption',
                text: 'kWh',
                min: 1,
                max: 1000,
            }, // - 0.276 [kgCO₂eq/kWh]
            {
                type: 'USA',
                emissions: 0.493,
                unit: 'Consumption',
                text: 'kWh',
                min: 1,
                max: 1000,
            }, // - 0.493 [kgCO₂eq/kWh]
            {
                type: 'China',
                emissions: 0.681,
                unit: 'Consumption',
                text: 'kWh',
                min: 1,
                max: 1000,
            }, // - 0.681 [kgCO₂eq/kWh]
            {
                type: 'World',
                emissions: 0.519,
                unit: 'Consumption',
                text: 'kWh',
                min: 1,
                max: 1000,
            }, // - 0.519 [kgCO₂eq/kWh]   
        ]
    },
    {
        category: 'Custom',
        types: [
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) */

            {
                type: 'Custom',
                emissions: 1,
                unit: 'Quantity',
                text: 'kgCO2eq',
                min: 1,
                max: 1000,
            },
        ]
    },
];

export default categories;
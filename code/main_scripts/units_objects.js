/*
    This a comprehensive array of all units that will be recognized by the chrome extension
    Each Unit will have 3 attributes : 
    1) unit : this the name of the unit that we plan to recongnize
    2) type : what type of attribute the unit represents : LENGTH, TIME, CURRENCY etc.
    3) aliases : what other representations the unit has 
*/
/**
 * @constant
 * @type {Array}
 */
const UNITS = [{
        unit: "kilograms",
        type: "mass",
        aliases: ["kilograms", "kilogram", "kgs", "kg"]
    },
    {
        unit: "celcius",
        type: "temperature",
        aliases: ["celcius", "c", "°c"]
    },
    {
        unit: "fahrenheit",
        type: "temperature",
        aliases: ["fahrenheit", "f", "°f"]
    },
    {
        unit: "kelvin",
        type: "temperature",
        aliases: ["kelvin", "k", "°k"]
    },
    {
        unit: "grams",
        type: "mass",
        aliases: ["grams", "gram", "gms", "gm","g"]
    },
    {
        unit: "pounds",
        type: "mass",
        aliases: ["pounds", "pound", "lbs", "lb"]
    },
    {
        unit: "tonne",
        type: "mass",
        aliases: ["metric tons", "metric ton", "tonnes", "tonne"]
    },
    {
        unit: "milligrams",
        type: "mass",
        aliases: ["milligrams", "milligram", "mgs", "mg"]
    },
    {
        unit: "micrograms",
        type: "mass",
        aliases: ["micrograms", "microgram"]
    },
    {
        unit: "ounces",
        type: "mass",
        aliases: ["ounces", "ounce", "ozs", "oz"]
    },
    {
        unit: "ton",
        type: "mass",
        aliases: ["tons", "ton"]
    },
    {
        unit: "USD",
        type: "currency",
        aliases: ["dollars", "dollar", "USD", "$"]
    },
    {
        unit: "EUR",
        type: "currency",
        aliases: ["euros", "euro", "EUR", "€"]
    },
    {
        unit: "GBP",
        type: "currency",
        aliases: ["pounds", "pound", "GBP", "£"]
    },
    {
        unit: "INR",
        type: "currency",
        aliases: ["rupees", "rupee", "INR", "₹"]
    },
    {
        unit: "CAD",
        type: "currency",
        aliases: ["Can$", "C$", "CA$", "CAD"]
    },
    {
        unit: "JPY",
        type: "currency",
        aliases: ["¥", "yen", "yuan"]
    },
    {
        unit: "AUD",
        type: "currency",
        aliases: ["AU$", "A$", "AUD"]
    },
    {
        unit: "CHF",
        type: "currency",
        aliases: ["franc", "francs", "CHF"]
    },
    {
        unit: "CNY",
        type: "currency",
        aliases: ["cny", "chinese yuan", "yuan", "¥"]
    },
    {
        unit: "meters",
        type: "length",
        aliases: ["meter", "meters", "m", "mts"]
    },
    {
        unit: "kilometers",
        type: "length",
        aliases: ["kilometer", "kilometers", "km", "kms"]
    },
    {
        unit: "miles",
        type: "length",
        aliases: ["miles", "mile", "mi"]
    },
    {
        unit: "centimeters",
        type: "length",
        aliases: ["centimeter", "centimeters", "cm", "cms"]
    },
    {
        unit: "millimeters",
        type: "length",
        aliases: ["millimeter", "millimeters", "mm", "mms"]
    },
    {
        unit: "yard",
        type: "length",
        aliases: ["yard", "yards", "yd", "yds"]
    },
    {
        unit: "feet",
        type: "length",
        aliases: ["foot", "feet", "ft", "fts"]
    },
    {
        unit: "inch",
        type: "length",
        aliases: ["inches", "inch", "\""]
    },
    {
        unit: "furlong",
        type: "length",
        aliases: ["furlong", "furlongs", "fur", "furss"]
    },
    {
        unit: "chain",
        type: "length",
        aliases: ["chain", "chains"]
    },
    {
        unit: "seconds",
        type: "time",
        aliases: ["sec", "s", "secs", "second", "seconds"]
    },
    {
        unit: "minutes",
        type: "time",
        aliases: ["mins", "min", "minute", "minutes"]
    },
    {
        unit: "hours",
        type: "time",
        aliases: ["hrs", "h", "hour", "hours"]
    },
    {
        unit: "days",
        type: "time",
        aliases: ["day", "days"]
    },
    {
        unit: "weeks",
        type: "time",
        aliases: ["week", "wks", "weeks"]
    },
    {
        unit: "m2",
        type: "area",
        aliases: ["m2", " m2", "m²", "sqm"]
    },
    {
        unit: "cm2",
        type: "area",
        aliases: ["cm2", " cm2", "cm²", "sqcm"]
    },
    {
        unit: "km2",
        type: "area",
        aliases: ["km2", " km2", "km²", "sqkm"]
    },
    {
        unit: "miles2",
        type: "area",
        aliases: ["miles2", " miles2", "miles²", "sqmiles"]
    },
    {
        unit: "ft2",
        type: "area",
        aliases: ["ft2", " ft2", "ft²", " sqft"]
    },
    {
        unit: "in2",
        type: "area",
        aliases: ["in2", " in2", "in²", "sqin"]
    },
    {
        unit: "ha2",
        type: "area",
        aliases: ["ha2", " ha2", "ha²", "sqha"]
    },
    {
        unit: "acre2",
        type: "area",
        aliases: ["acre2", " acre2", "acre²", "sqacre"]
    },
    {
        unit: "yd2",
        type: "area",
        aliases: ["yd2", " yd2", "yd²", "sqyd"]
    },
    {
        unit: "b/s",
        type: "dataTransfer",
        aliases: ["b/s", "bps"]
    },
    {
        unit: "Kb/s",
        type: "dataTransfer",
        aliases: ["Kb/s","Kbps"]
    },
    {
        unit: "Mb/s",
        type: "dataTransfer",
        aliases: ["Mb/s","Mbps"]
    },
    {
        unit: "Gb/s",
        type: "dataTransfer",
        aliases: ["Gb/s","Gbps"]
    },
    {
        unit: "Tb/s",
        type: "dataTransfer",
        aliases: ["Tb/s","Tbps"]
    },
    {
        unit: "m/s",
        type: "speed",
        aliases: ["meters/s",
            "m/s",
            "meters per sec",
            "meters per second"
        ]
    },
    {
        unit: "Km/h",
        type: "speed",
        aliases: ["kilometers/h",
            "Km/h",
            "Kilometers per hour",
            "Kilometers per hour"
        ]
    },
    {
        unit: "mph",
        type: "speed",
        aliases: ["mph",
            "Mph",
            "mile/h",
            "Mile/h",
            "Miles per hour",
            "miles per hour"
        ]
    },
    ,
    {
        unit: "litres",
        type: "volume",
        aliases: ["lt",
            "litre",
            "litres",
            "lt",
            "ltr",
            "ltrs",
            "L",
            "l"
        ]
    },
    {
        unit: "milliliter",
        type: "volume",
        aliases: ["ml",
            "mls",
            "millilitres",
            "millilitre"
        ]
    },
    {
        unit: "cubic meter",
        type: "volume",
        aliases: ["cubic metre",
            "cm3",
            "cm³"
        ]
    },
    {
        unit: "cubic inch",
        type: "volume",
        aliases: ["in3",
            "in³",
            "cubic inches",
        ]
    },
    {
        unit: "cubic foot",
        type: "volume",
        aliases: ["ft3",
            "foot³",
            "feet³"
        ]
    },
    {
        unit: "pint",
        type: "volume",
        aliases: ["pint",
            "pt",
            "p"
        ]   
    },
    {
        unit: "quart",
        type: "volume",
        aliases: ["qt",
            "Qt",
            "quarts"
        ]   
    },
    {
        unit: "quart",
        type: "volume",
        aliases: ["qt",
            "Qt",
            "quarts"
        ]   
    },
    {
        unit: "gallon",
        type: "volume",
        aliases: ["gl",
            "gals",
            "gall"
        ]   
    }
]

 new Vue({
    'el': '#app',
    'data': {
        'groups': [
            {'name': "A", 'One': "A1", 'Two': "A2", 'Three': "A3", 'Four': "A4"},
            {'name': "B", 'One': "B1", 'Two': "B2", 'Three': "B3", 'Four': "B4"},
            {'name': "C", 'One': "C1", 'Two': "C2", 'Three': "C3", 'Four': "C4"},
            {'name': "D", 'One': "D1", 'Two': "D2", 'Three': "D3", 'Four': "D4"},
            {'name': "E", 'One': "E1", 'Two': "E2", 'Three': "E3", 'Four': "E4"},
            {'name': "F", 'One': "F1", 'Two': "F2", 'Three': "F3", 'Four': "F4"},
            {'name': "G", 'One': "G1", 'Two': "G2", 'Three': "G3", 'Four': "G4"},
            {'name': "H", 'One': "H1", 'Two': "H2", 'Three': "H3", 'Four': "H4"},
        ],
        'Pot1': ["GER", "ARG", "BRA", "POR", "SUI", "POL", "CHI", "RUS"],
        'Pot2': ["DRC", "NGA", "CIV", "BUR", "EGP", "URU", "COL", "IRE"],
        'Pot3': ["MEX", "CRC", "USA", "AUS", "IRN", "KOR", "JPN", "KSA"],
        'Pot4': ["SWE", "SER", "ENG", "FRA", "ESP", "BEL", "CRO", "GRE"]
    }, 
    'methods': {
        'emptyPot': function(pot) {
            setTimeout(() => this.groups[0][pot] = this.popTeam(pot)[0], 200);
            setTimeout(() => this.groups[1][pot] = this.popTeam(pot)[0], 400);
            setTimeout(() => this.groups[2][pot] = this.popTeam(pot)[0], 600);
            setTimeout(() => this.groups[3][pot] = this.popTeam(pot)[0], 900);
            setTimeout(() => this.groups[4][pot] = this.popTeam(pot)[0], 1000);
            setTimeout(() => this.groups[5][pot] = this.popTeam(pot)[0], 1200);
            setTimeout(() => this.groups[6][pot] = this.popTeam(pot)[0], 1400);
            setTimeout(() => this.groups[7][pot] = this.popTeam(pot)[0], 1600);
        },
        'popTeam': function(pot) {
            switch (pot) {
                case "One":
                    return this.Pot1.splice(Math.floor(Math.random()*this.Pot1.length), 1);
                case "Two":
                    return this.Pot2.splice(Math.floor(Math.random()*this.Pot2.length), 1);
                case "Three":
                    return this.Pot3.splice(Math.floor(Math.random()*this.Pot3.length), 1);
                case "Four":
                    return this.Pot4.splice(Math.floor(Math.random()*this.Pot4.length), 1);
                default:
                    break;
            }
        },
        'buttonClick': function() {
            setTimeout(() => this.emptyPot("One"), 0);
            setTimeout(() => this.emptyPot("Two"), 1600);
            setTimeout(() => this.emptyPot("Three"), 3200);
            setTimeout(() => this.emptyPot("Four"), 4800);

            this.Pot1 = ["GER", "ARG", "BRA", "POR", "SUI", "POL", "CHI", "RUS"],
            this.Pot2 = ["DRC", "NGA", "CIV", "BUR", "EGP", "URU", "COL", "IRE"],
            this.Pot3 = ["MEX", "CRC", "USA", "AUS", "IRN", "KOR", "JPN", "KSA"],
            this.Pot4 = ["SWE", "SER", "ENG", "FRA", "ESP", "BEL", "CRO", "GRE"]
        }
    }
})
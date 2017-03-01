// weapon data
var weaponInfo =
{
	"Absorb" : {
		"color"   : "Colorless",
		"type"    : "Staff",
		"might"   : 4,
		"range"   : 2,
		"magical" : true,
		"heal_dmg" : 0.5
	},
	"Armads" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"riposte" : {
			"threshold" : 0.8
		}
	},
	"Armorslayer" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"move_effective" : "Armored"
	},
	"Armorslayer+" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 12,
		"range"   : 1,
		"magical" : false,
		"move_effective" : "Armored"
	},
	"Assassin's Bow" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 7,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Flying"
	},
	"Assassin's Bow+" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 11,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Flying"
	},
	"Assault" : {
		"color"   : "Colorless",
		"type"    : "Staff",
		"might"   : 10,
		"range"   : 2,
		"magical" : true
	},
	"Aura" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 14,
		"range"   : 2,
		"magical" : true
	},
	"Binding Blade" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"defend_mod" : {
			"def" : 2,
			"res" : 2
		}
	},
	"Blárblade" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 9,
		"range"   : 2,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"add_bonus": true
	},
	"Blárblade+" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 13,
		"range"   : 2,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"add_bonus" : true
	},
	"Blárraven" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 7,
		"range"   : 2,
		"magical" : true,
		"color_effective" : "Colorless"
	},
	"Blárraven+" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 11,
		"range"   : 2,
		"magical" : true,
		"color_effective" : "Colorless"
	},
	"Bolganone" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 9,
		"range"   : 2,
		"magical" : true
	},
	"Bolganone+" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 13,
		"range"   : 2,
		"magical" : true
	},
	"Brave Axe" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 5,
		"range"   : 1,
		"magical" : false,
		"brave"   : true,
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Brave Axe+" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"brave"   : true,
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Brave Bow" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 4,
		"range"   : 2,
		"magical" : false,
		"brave"   : true,
		"move_effective" : "Flying",
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Brave Bow+" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 7,
		"range"   : 2,
		"magical" : false,
		"brave"   : true,
		"move_effective" : "Flying",
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Brave Lance" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 5,
		"range"   : 1,
		"magical" : false,
		"brave"   : true,
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Brave Lance+" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"brave"   : true,
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Brave Sword" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 5,
		"range"   : 1,
		"magical" : false,
		"brave"   : true,
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Brave Sword+" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"brave"   : true,
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Brynhildr" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 14,
		"range"   : 2,
		"magical" : true
	},
	"Cymbeline" : {
		"color" : "Red",
		"type" : "Red Tome",
		"might" : 14,
		"range" : 2,
		"magical" : true
	},
	"Dark Breath" : {
		"color"   : "Blue",
		"type"    : "Blue Breath",
		"might"   : 9,
		"range"   : 1,
		"magical" : true
	},
	"Dark Breath+" : {
		"color"   : "Blue",
		"type"    : "Blue Breath",
		"might"   : 13,
		"range"   : 1,
		"magical" : true
	},
	"Dire Thunder" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 9,
		"range"   : 2,
		"magical" : true,
		"brave"   : true,
		"stat_mod" : {
			"spd" : -5
		}
	},
	"Durandal" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"initiate_mod" : {
			"atk" : 5
		}
	},
	"Elfire" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 6,
		"range"   : 2,
		"magical" : true
	},
	"Elthunder" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 6,
		"range"   : 2,
		"magical" : true
	},
	"Elwind" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 6,
		"range"   : 2,
		"magical" : true
	},
	"Emerald Axe" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"tri_advantage" : true
	},
	"Emerald Axe+" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 12,
		"range"   : 1,
		"magical" : false,
		"tri_advantage" : true
	},
	"Excalibur" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 14,
		"range"   : 2,
		"magical" : true,
		"move_effective": "Flying"
	},
	"Falchion" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"dragon_effective" : true
	},
	"Fear" : {
		"color"   : "Colorless",
		"type"    : "Staff",
		"might"   : 5,
		"range"   : 2,
		"magical" : true,
		"seal" : {
			"atk" : -6
		}
	},
	"Fenrir" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 9,
		"range"   : 2,
		"magical" : true,
		"threaten" : {
			"atk" : -4
		}
	},
	"Fenrir+" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 13,
		"range"   : 2,
		"magical" : true
	},
	"Fensalir" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 16,
		"range"   : 1,
		"magical" : false
	},
	"Fire" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 4,
		"range"   : 2,
		"magical" : true
	},
	"Fire Breath (Red)" : {
		"color"   : "Red",
		"type"    : "Red Breath",
		"might"   : 6,
		"range"   : 1,
		"magical" : true
	},
	"Fire Breath (Green)" : {
		"color"   : "Green",
		"type"    : "Green Breath",
		"might"   : 6,
		"range"   : 1,
		"magical" : true
	},
	"Fire Breath (Blue)" : {
		"color"   : "Blue",
		"type"    : "Blue Breath",
		"might"   : 6,
		"range"   : 1,
		"magical" : true
	},
	"Fire Breath+ (Red)" : {
		"color"   : "Red",
		"type"    : "Red Breath",
		"might"   : 8,
		"range"   : 1,
		"magical" : true
	},
	"Fire Breath+ (Green)" : {
		"color"   : "Green",
		"type"    : "Green Breath",
		"might"   : 8,
		"range"   : 1,
		"magical" : true
	},
	"Fire Breath+ (Blue)" : {
		"color"   : "Blue",
		"type"    : "Blue Breath",
		"might"   : 8,
		"range"   : 1,
		"magical" : true
	},
	"Flametongue" : {
		"color"   : "Red",
		"type"    : "Red Breath",
		"might"   : 11,
		"range"   : 1,
		"magical" : true
	},
	"Flametongue+" : {
		"color"   : "Red",
		"type"    : "Red Breath",
		"might"   : 15,
		"range"   : 1,
		"magical" : true
	},
	"Flux" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 4,
		"range"   : 2,
		"magical" : true
	},
	"Fujin Yumi" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 14,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Flying"
	},
	"Fólkvangr" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"defiant" : {
			"atk" : 5
		}
	},
	"Gravity" : {
		"color"   : "Colorless",
		"type"    : "Staff",
		"might"   : 6,
		"range"   : 2,
		"magical" : true
	},
	"Gronnblade" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 9,
		"range"   : 2,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"add_bonus" : true
	},
	"Gronnblade+" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 13,
		"range"   : 2,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"add_bonus" : true
	},
	"Gronnraven" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 7,
		"range"   : 2,
		"magical" : true,
		"color_effective" : "Colorless"
	},
	"Gronnraven+" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 11,
		"range"   : 2,
		"magical" : true,
		"color_effective" : "Colorless"
	},
	"Gronnwolf" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 6,
		"range"   : 2,
		"magical" : true,
		"move_effective" : "Cavalry"
	},
	"Gronnwolf+" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 10,
		"range"   : 2,
		"magical" : true,
		"move_effective" : "Cavalry"
	},
	"Hammer" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"move_effective" : "Armored"
	},
	"Hammer+" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 12,
		"range"   : 1,
		"magical" : false,
		"move_effective" : "Armored"
	},
	"Hauteclere" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"spec_cooldown_mod" : -1
	},
	"Heavy Spear" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"move_effective" : "Armored"
	},
	"Heavy Spear+" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 12,
		"range"   : 1,
		"magical" : false,
		"move_effective" : "Armored"
	},
	"Iron Axe" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 6,
		"range"   : 1,
		"magical" : false
	},
	"Iron Bow" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 4,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Flying"
	},
	"Iron Dagger" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 3,
		"range"   : 2,
		"magical" : false,
		"seal" : {
			"def" : -3,
			"res" : -3
		}
	},
	"Iron Lance" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 6,
		"range"   : 1,
		"magical" : false
	},
	"Iron Spear" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 6,
		"range"   : 1,
		"magical" : false
	},
	"Iron Sword" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 6,
		"range"   : 1,
		"magical" : false
	},
	"Killer Axe" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 7,
		"range"   : 1,
		"magical" : false,
		"spec_cooldown_mod" : -1
	},
	"Killer Axe+" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 11,
		"range"   : 1,
		"magical" : false,
		"spec_cooldown_mod" : -1
	},
	"Killer Bow" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 5,
		"range"   : 2,
		"magical" : false,
		"spec_cooldown_mod" : -1,
		"move_effective" : "Flying"
	},
	"Killer Bow+" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 9,
		"range"   : 2,
		"magical" : false,
		"spec_cooldown_mod" : -1,
		"move_effective" : "Flying"
	},
	"Killer Lance" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 7,
		"range"   : 1,
		"magical" : false,
		"spec_cooldown_mod" : -1
	},
	"Killer Lance+" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 11,
		"range"   : 1,
		"magical" : false,
		"spec_cooldown_mod" : -1
	},
	"Killing Edge" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 7,
		"range"   : 1,
		"magical" : false,
		"spec_cooldown_mod" : -1
	},
	"Killing Edge+" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 11,
		"range"   : 1,
		"magical" : false,
		"spec_cooldown_mod" : -1
	},
	"Light Breath" : {
		"color"   : "Green",
		"type"    : "Green Breath",
		"might"   : 9,
		"range"   : 1,
		"magical" : true
	},
	"Light Breath+" : {
		"color"   : "Green",
		"type"    : "Green Breath",
		"might"   : 13,
		"range"   : 1,
		"magical" : true
	},
	"Lightning Breath (Red)" : {
		"color"   : "Red",
		"type"    : "Red Breath",
		"might"   : 7,
		"range"   : 1,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"counter" : true
	},
	"Lightning Breath+ (Red)" : {
		"color"   : "Red",
		"type"    : "Red Breath",
		"might"   : 11,
		"range"   : 1,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"counter" : true
	},
	"Lightning Breath (Blue)" : {
		"color"   : "Blue",
		"type"    : "Blue Breath",
		"might"   : 7,
		"range"   : 1,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"counter" : true
	},
	"Lightning Breath+ (Blue)" : {
		"color"   : "Blue",
		"type"    : "Blue Breath",
		"might"   : 11,
		"range"   : 1,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"counter" : true
	},
	"Mystletainn" : {
		"color" : "Red",
		"type" : "Sword",
		"might" : 16,
		"range" : 1,
		"magical" : false,
		"spec_cooldown_mod" : -1
	},
	"Naga" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 14,
		"range"   : 2,
		"magical" : true,
		"dragon_effective" : true,
		"defend_mod" : {
			"def" : 2,
			"res" : 2
		}
	},
	"Nóatún" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 16,
		"range"   : 1,
		"magical" : false
	},
	"Pain" : {
		"color"   : "Colorless",
		"type"    : "Staff",
		"might"   : 3,
		"range"   : 2,
		"magical" : true,
		"poison" : 10
	},
	"Panic" : {
		"color"   : "Colorless",
		"type"    : "Staff",
		"might"   : 7,
		"range"   : 2,
		"magical" : true,
		"convert_penalties" : true
	},
	"Parthia" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 14,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Flying",
		"initiate_mod" : {
			"res" : 4
		}
	},
	"Poison Dagger" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 2,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Infantry",
		"target_seal" : {
			"target" : "Infantry",
			"def" : -4,
			"res" : -4
		}
	},
	"Poison Dagger+" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 5,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Infantry",
		"target_seal" : {
			"target" : "Infantry",
			"def" : -6,
			"res" : -6
		}
	},
	"Raijinto" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"counter" : true
	},
	"Rauðrblade" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 9,
		"range"   : 2,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"add_bonus" : true
	},
	"Rauðrblade+" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 13,
		"range"   : 2,
		"magical" : true,
		"spec_cooldown_mod" : 1,
		"add_bonus" : true
	},
	"Rauðrraven" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 7,
		"range"   : 2,
		"magical" : true,
		"color_effective" : "Colorless"
	},
	"Rauðrraven+" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 11,
		"range"   : 2,
		"magical" : true,
		"color_effective" : "Colorless"
	},
	"Rauðrwolf" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 6,
		"range"   : 2,
		"magical" : true,
		"move_effective" : "Cavalry"
	},
	"Rauðrwolf+" : {
		"color"   : "Red",
		"type"    : "Red Tome",
		"might"   : 10,
		"range"   : 2,
		"magical" : true,
		"move_effective" : "Cavalry"
	},
	"Rexcalibur" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 9,
		"range"   : 2,
		"magical" : true
	},
	"Rogue Dagger" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 4,
		"range"   : 2,
		"magical" : false,
		"seal" : {
			"def" : -3,
			"res" : -3
		},
		"after_mod" : {
			"def" : 3,
			"res" : 3
		}
	},
	"Rogue Dagger+" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 7,
		"range"   : 2,
		"magical" : false,
		"seal" : {
			"def" : -5,
			"res" : -5
		},
		"after_mod" : {
			"def" : 5,
			"res" : 5
		}
	},
	"Ruby Sword" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"tri_advantage" : true
	},
	"Ruby Sword+" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 12,
		"range"   : 1,
		"magical" : false,
		"tri_advantage" : true
	},
	"Ruin" : {
		"color"   : "Red",
		"type"    : "Tome",
		"might"   : 6,
		"range"   : 2,
		"magical" : true
	},
	"Sapphire Lance" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 8,
		"range"   : 1,
		"magical" : false,
		"tri_advantage" : true
	},
	"Sapphire Lance+" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 12,
		"range"   : 1,
		"magical" : false,
		"tri_advantage" : true
	},
	"Sieglinde" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false
	},
	"Siegmund" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 16,
		"range"   : 1,
		"magical" : false
	},
	"Silver Axe" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 11,
		"range"   : 1,
		"magical" : false
	},
	"Silver Axe+" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 15,
		"range"   : 1,
		"magical" : false
	},
	"Silver Bow" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 9,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Flying"
	},
	"Silver Bow+" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 13,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Flying"
	},
	"Silver Dagger" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 7,
		"range"   : 2,
		"magical" : false
	},
	"Silver Dagger+" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 10,
		"range"   : 2,
		"magical" : false
	},
	"Silver Lance" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 11,
		"range"   : 1,
		"magical" : false
	},
	"Silver Lance+" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 15,
		"range"   : 1,
		"magical" : false
	},
	"Silver Sword" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 11,
		"range"   : 1,
		"magical" : false
	},
	"Silver Sword+" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 15,
		"range"   : 1,
		"magical" : false
	},
	"Slow" : {
		"color"   : "Colorless",
		"type"    : "Staff",
		"might"   : 5,
		"range"   : 2,
		"magical" : true,
		"seal" : {
			"spd" : -6
		}
	},
	"Smoke Dagger" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 6,
		"range"   : 2,
		"magical" : false
	},
	"Smoke Dagger+" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 9,
		"range"   : 2,
		"magical" : false
	},
	"Sol Katti" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"desperation" : {
			"threshold" : 0.5
		}
	},
	"Steel Axe" : {
		"color"   : "Green",
		"type"    : "Axe",
		"might"   : 8,
		"range"   : 1,
		"magical" : false
	},
	"Steel Bow" : {
		"color"   : "Colorless",
		"type"    : "Bow",
		"might"   : 6,
		"range"   : 2,
		"magical" : false,
		"move_effective" : "Flying"
	},
	"Steel Dagger" : {
		"color"   : "Colorless",
		"type"    : "Dagger",
		"might"   : 5,
		"range"   : 2,
		"magical" : false,
		"seal" : {
			"def" : -3,
			"res" : -3
		}
	},
	"Steel Lance" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 8,
		"range"   : 1,
		"magical" : false
	},
	"Steel Spear" : {
		"color"   : "Blue",
		"type"    : "Lance",
		"might"   : 8,
		"range"   : 1,
		"magical" : false
	},
	"Steel Sword" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 8,
		"range"   : 1,
		"magical" : false
	},
	"Thoron" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 9,
		"range"   : 2,
		"magical" : true
	},
	"Thunder" : {
		"color"   : "Blue",
		"type"    : "Blue Tome",
		"might"   : 4,
		"range"   : 2,
		"magical" : true
	},
	"Tyrfing" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"defiant" : {
			"def" : 4
		}
	},
	"Wind" : {
		"color"   : "Green",
		"type"    : "Green Tome",
		"might"   : 4,
		"range"   : 2,
		"magical" : false
	},
	"Yato" : {
		"color"   : "Red",
		"type"    : "Sword",
		"might"   : 16,
		"range"   : 1,
		"magical" : false,
		"initiate_mod" : {
			"spd" : 4
		}
	}
};
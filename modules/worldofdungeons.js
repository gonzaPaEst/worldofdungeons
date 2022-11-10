Hooks.once("ready", async function () {

  let newSheet = { rollFormula: "2d6", rollResults: { failure: { start: null, end: 6, label: "Miss" }, partial: { start: 7, end: 9, label: "Partial Success" }, success: { start: 10, end: 11, label: "Full Success!" }, critical: { start: 12, end: null, label: "Critical Success!" } }, actorTypes: { character: { stats: { str: { label: "STR", value: 0 }, int: { label: "INT", value: 0 }, con: { label: "CON", value: 0 }, dex: { label: "DEX", value: 0 }, wis: { label: "WIS", value: 0 }, cha: { label: "CHA", value: 0 } }, attrTop: { armor: { label: "Total Armor", description: null, customLabel: false, userLabel: false, type: "Number", value: 0 }, hp: { label: "Hit Points", description: null, customLabel: false, userLabel: false, type: "Resource", value: 0, max: 0 }, hitdice: { label: "Hit Dice", description: null, customLabel: false, userLabel: false, type: "Roll", value: "d6" }, coin: { label: "Coin", description: null, customLabel: false, userLabel: false, type: "Number", value: 0 } }, attrLeft: { armorspeed: { label: "Armor / Speed", description: null, customLabel: false, userLabel: false, type: "ListMany", condition: false, options: { 0: { label: "None / Fast (0 armor)", value: false }, 1: { label: "Light / Normal (1 armor)", value: false }, 2: { label: "Full / Slow (2 armor)", value: false }, 3: { label: "Shield (+1 armor)", value: false } } }, level: { label: "Level", description: null, customLabel: false, userLabel: false, type: "Number", value: 0 }, xp: { label: "XP", description: null, customLabel: false, userLabel: false, type: "Number", value: 0 }, nextlevel: { label: "Next Level", description: null, customLabel: false, userLabel: false, type: "Number", value: 0 } }, moveTypes: { skills: { label: "Skills", moves: [] }, special: { label: "Special Abilities", moves: [] } }, equipmentTypes: { weapons: { label: "Weapons", moves: [] }, equipment: { label: "Equipment", moves: [] } } }, npc: { attrTop: { hp: { label: "HP", description: null, customLabel: false, userLabel: false, type: "Resource", value: 0, max: 0 }, armor: { label: "Armor", description: null, customLabel: false, userLabel: false, type: "Number", value: 0 }, damage: { label: "Damage", description: null, customLabel: false, userLabel: false, type: "Roll", value: "d6" } }, attrLeft: { instinct: { label: "Intinct", description: null, customLabel: false, userLabel: false, type: "LongText", value: "" } }, moveTypes: { gm: { label: "GM Moves", moves: [] } } } } }

  let data = await game.settings.get("pbta", "sheetConfig");
  if(data == '') {
    await game.settings.set('pbta', 'advForward', true);
    await game.settings.set('pbta', 'hideRollFormula', true);
    await game.settings.set('pbta', 'hideForward', true);
    await game.settings.set('pbta', 'hideOngoing', true);
    await game.settings.set('pbta', 'hideRollMode', true);
    await game.settings.set('pbta', 'hideUses', true);
    await game.settings.set("pbta", "sheetConfig", newSheet);
    setTimeout(() => {
      location.reload();
    }, 1000)
  }

});

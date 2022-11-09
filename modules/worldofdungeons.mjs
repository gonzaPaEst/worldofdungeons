Hooks.once("ready", async function () {

  setTimeout(() => {
    $("div#pbta-sheet-config button[type='submit']").click();
  }, 2000)

  setTimeout(() => {
    $("div#pbta-sheet-config a.header-button.close").click();
  }, 2500)

  let newSheet = `
# Configure Rolls
rollFormula = "2d6"
  
# Define roll result ranges.
[rollResults]
  [rollResults.failure]
    range = "6-"
    label = "Miss"
  [rollResults.partial]
    range = "7-9"
    label = "Partial Success"
  [rollResults.success]
    range = "10-11"
    label = "Full Success!"
  [rollResults.critical]
    range = "12+"
    label = "Critical Success!"

########################################
## CHARACTERS ##########################
########################################
# Define the character group.
[character]

  # Define stats.
  [character.stats]
    str = "STR"
    int = "INT"
    con = "CON"
    dex = "DEX"
    wis = "WIS"
    cha = "CHA"

  # Define attributes.
  [character.attributesTop]
    [character.attributesTop.armor]
      type = "Number"
      label = "Total Armor"
    [character.attributesTop.hp]
      type = "Resource"
      label = "Hit Points"
    [character.attributesTop.hitdice]
      type = "Roll"
      label = "Hit Dice"
      default = "d6"
    [character.attributesTop.coin]
      type = "Number"
      label = "Coin"

  # Define sidebar details.
  [character.attributesLeft]
    [character.attributesLeft.armorspeed]
      type = "ListMany"
      label = "Armor & Speed"
      condition = false
      options = [
        "None & Fast (0 armor)",
        "Light & Normal (1 armor)",
        "Full & Slow (2 armor)",
        "Shield (+1 armor)"
      ]
      
    [character.attributesLeft.level]
      type = "Number"
      label = "Level"
      
    [character.attributesLeft.xp]
      type = "Number"
      label = "XP"
      
    [character.attributesLeft.nextlevel]
      type = "Number"
      label = "Needed for Next Level"

  # Define groups for moves.
  [character.moveTypes]
    skills = "Skills"
    special = "Special Abilities"

  # Define groups for equipment.
  [character.equipmentTypes]
    weapons = "Weapons"
    equipment = "Equipment"

########################################
## NPCS ################################
########################################
# Define stats.
[npc]
  # Define attributes.
  [npc.attributesTop]
    [npc.attributesTop.hp]
      type = "Resource"
      label = "HP"
    [npc.attributesTop.armor]
      type = "Number"
      label = "Armor"
    [npc.attributesTop.damage]
      type = "Roll"
      label = "Damage"
      default = "d6"
      
  [npc.attributesLeft]
    [npc.attributesLeft.traits]
      type = "LongText"
      label = "Traits"
    [npc.attributesLeft.instinct]
      type = "LongText"
      label = "Intinct"
      
    [npc.attributesLeft.knacks]
      type = "LongText"
      label = "Knacks"

  # Define logical groups for moves.
  [npc.moveTypes]
    gm = "GM Moves"
`;

  await game.settings.set('pbta', 'advForward', true);
  await game.settings.set('pbta', 'hideRollFormula', true);
  await game.settings.set('pbta', 'hideForward', true);
  await game.settings.set('pbta', 'hideOngoing', true);
  await game.settings.set('pbta', 'hideRollMode', true);
  await game.settings.set('pbta', 'hideUses', true);

  const data = await game.settings.get("pbta", "sheetConfig");
  if (!data.tomlString) {
    data.tomlString = newSheet;
    await game.settings.set("pbta", "sheetConfig", data);
  };

});

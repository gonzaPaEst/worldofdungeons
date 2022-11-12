import { configSheet } from "./helpers/config-sheet.mjs"


Hooks.once('pbtaSheetConfig', () => {
  // Disable the sheet config form.
  game.settings.set('pbta', 'sheetConfigOverride', true);
  // Replace the game.pbta.sheetConfig with your own version.

  configSheet();

});


Hooks.on("renderActorSheet", async (app, html, options) => {

  $('.cell--attr-armorspeed').click(function(e) {
    const armor = $(e.currentTarget);
    const none = armor.find('input[name="system.attrLeft.armorspeed.options.0.value"]');
    const light = armor.find('input[name="system.attrLeft.armorspeed.options.1.value"]');
    const full = armor.find('input[name="system.attrLeft.armorspeed.options.2.value"]');

    none.change(
      function(){
          if ($(this).is(':checked')) {
            light.prop('checked', false);
            full.prop('checked', false);
          }
      });
  
    light.change(
      function(){
          if ($(this).is(':checked')) {
            none.prop('checked', false);
            full.prop('checked', false);
          }
      });
  
    full.change(
      function(){
          if ($(this).is(':checked')) {
            none.prop('checked', false);
            light.prop('checked', false);
          }
      });
  });
  
})
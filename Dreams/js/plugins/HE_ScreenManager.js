//=============================================================================
// Helladen Engine - Screen Manager
// HE_ScreenManager.js
// Version: 1.0.1
//=============================================================================

var Imported = Imported || {};
var Helladen = Helladen || {};

Helladen.ScreenManager = Helladen.ScreenManager || {};
Helladen.ScrRes = Helladen.ScrRes || {};

//=============================================================================
 /*:
 * @plugindesc v1.0.0 change your screen's ratio to your liking!
 * @author Helladen, special thanks to Yanfly and Moghunter.
 *
 * @param Ratio
 * @desc Force the game to run in a specific mode. Use 16-9 or default.
 * Default: 16-9
 * @default 16-9
 *
 * @param Rescale
 * @desc Draw more tiles or stretch screen? (0 or 1)
 * Default: 0
 * @default 0
 *
 * @help
 * Adjust the parameters to change the size of how you want your game's
 * screen ratio to appear. Place above Yanfly Core Engine and disable
 * Resolution plugin if it is enabled. This is based on that plugin.
 */
//=============================================================================

Helladen.Parameters = PluginManager.parameters('HE_ScreenManager');
Helladen.Param = Helladen.Param || {};

Helladen.Param.Ratio = eval(String(Helladen.Parameters['Ratio'] || "16-9"));
Helladen.Param.Rescale = eval(String(Helladen.Parameters['Rescale'] || "0"));

//=============================================================================
// Scene_Manager
//=============================================================================
function Helladen_ScreenManager()
{
	Imported.ScreenManager = true;

	// Get the size of the actual monitor.
	var screenWidth = screen.width;
  var screenHeight = screen.height;

	// Cause 6 is afraid of 7. (16-9 = 7)
	if (Helladen.Param.Ratio == "7")
	{
		// Get the best size based on their display size.
		if (screenHeight >= 768)
		{
			Helladen.screenHeight = 768;
		}
		else if (screenHeight >= 720)
		{
			Helladen.screenHeight = 720;
		}
		else if (screenHeight >= 648)
		{
			Helladen.screenHeight = 648;
		}
		else if (screenHeight >= 576)
		{
			Helladen.screenHeight = 576;
		}

		if (screenWidth >= 1366)
		{
			Helladen.screenWidth = 1366;
		}
		else if (screenWidth >= 1280)
		{
			Helladen.screenWidth = 1280;
		}
		else if (screenWidth >= 1152)
		{
			Helladen.screenWidth = 1152;
		}
		else if (screenWidth >= 1024)
		{
			Helladen.screenWidth = 1024;
		}
	}

	if (Helladen.Param.Rescale == "0")
	{
		SceneManager._screenWidth  = Helladen.screenWidth;
		SceneManager._screenHeight = Helladen.screenHeight;
		SceneManager._boxWidth     =  Helladen.screenWidth;
		SceneManager._boxHeight    = Helladen.screenHeight;
	}
};

Helladen.ScrRes.SceneManager_run = SceneManager.run;
SceneManager.run = function(sceneClass) {
		Helladen_ScreenManager();

		Helladen.ScrRes.SceneManager_run.call(this, sceneClass);

		if (!Imported.ScreenResolution) {
			// Compatability with Yanfly Resolution in Core Engine.
			Imported.ScreenResolution = true;

			if (Utils.isMobileDevice()) return;
			if (Utils.isMobileSafari()) return;
			if (Utils.isAndroidChrome()) return;

			var resizeWidth = 0;
			var resizeHeight = 0;

			if (Helladen.Param.Rescale == "0")
			{
				resizeWidth = Graphics.boxWidth - window.innerWidth;
				resizeHeight = Graphics.boxHeight - window.innerHeight;
			}
			else if (Helladen.Param.Rescale == "1")
			{
				resizeWidth = Helladen.screenWidth - window.innerWidth;
				resizeHeight = Helladen.screenHeight - window.innerHeight;
			}

			window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight  / 2);
			window.resizeBy(resizeWidth, resizeHeight );
		}
};

//=============================================================================
// End of File
//=============================================================================

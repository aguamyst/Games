// -------------------------------------------------------------------
// SOUL_MV Animated Title Belldandy.js
// -------------------------------------------------------------------
/*:
* @plugindesc v1.0 Installs the Animated Title Belldandy to your game project.
* @author Soulpour777 - soulxregalia.wordpress.com
* 
* @help

SOUL_MV - Animated Title Belldandy
Author: Soulpour777

This plugin does not have any plugin commands.

Each parameter is explained properly in its window.

Place all images under the img / titles folder.

Credits:
Title Commands Art - Soulpour777
Magic Circle - Enterbrain and Soulpour777
Belldandy - Ah My Goddess Anime
Blue Sky - Animeflow

Terms of Use:

https://soulxregalia.wordpress.com/terms-of-use/

* @param Descend Speed
* @desc The movement speed of the portrait to descend down.
* @default 1
* 
* @param Descend Distance
* @desc The distance y axis of the portrait to stop ascending.
* @default -300
*
* @param Background Layer
* @desc This is the first image drawn into your title screen. (Static)
* @default blue sky
* 
* @param Overlay Layer
* @desc This is the layer added as an overlay image drawn after the background. (Moving)
* @default cloud_overlay
* 
* @param Overlay Opacity
* @desc Opacity of the overlay image.
* @default 70
* 
* @param Overlay Horz Movement
* @desc The horizontal movement of the overlay.
* @default 0.50
* 
* @param Overlay Vert Movement
* @desc The vertical movement of the overlay.
* @default 0
* 
* @param Foreground Layer
* @desc This is the portrait image drawn into your title screen. (Ascending)
* @default portrait
* 
* @param Foreground X Axis
* @desc This is the x axis of the portrait image.
* @default 0
* 
* @param Foreground Y Axis
* @desc This is the y axis of the portrait image.
* @default -720
* 
* @param Magic Circle Layer
* @desc This is the magic circle image drawn into your title screen. (Rotating)
* @default blue circle
* 
* @param Magic Circle Opacity Speed
* @desc The opacity speed of the magic circle to appear.
* @default 2
*
* @param Magic Circle X Axis
* @desc This is the magic circle's x axis.
* @default 307
* 
* @param Magic Circle Y Axis
* @desc This is the magic circle's y axis.
* @default 10
* 
* @param Magic Circle Anchor X
* @desc This is the magic circle's x anchor. (For Centering)
* @default 0.5
* 
* @param Magic Circle Anchor Y
* @desc This is the magic circle's y anchor. (For Centering)
* @default 0.5
* 
* @param Magic Circle Rotation
* @desc This is the magic circle's rotation value. (Whole Numbers = Faster)
* @default 0.003
* 
* @param Magic Circle Starting Opacity
* @desc This is the magic circle's starting opacity value. (Opacity before appearing)
* @default 0
* 
* @param Logo Layer
* @desc This is the logo image drawn into your title screen. (Fading)
* @default Logo
* 
* @param Logo X Axis
* @desc This is the logo's x axis.
* @default 0
* 
* @param Logo Y Axis
* @desc This is the logo's y axis.
* @default 0
*  
* @param Logo Starting Opacity
* @desc This is the logo's starting opacity value. (Opacity before appearing)
* @default 0
*  
* @param Logo Opacity Speed
* @desc This is the logo's opacity speed in appearing.
* @default 2
* 
* @param Command Image X Axis
* @desc X axis of the command image.
* @default 270
*
* @param Command Image Y Axis
* @desc X axis of the command image.
* @default 540
*
* @param New Game Image
* @desc This is the image drawn for your New Game Command.
* @default command_1
*
* @param Continue Image
* @desc This is the image drawn for your Continue Command.
* @default command_2
* 
* @param Option Image
* @desc This is the image drawn for your Options Command.
* @default command_3
* 
* @param Quit Image
* @desc This is the image drawn for your Quit Command.
* @default command_4
* 
* @param Feather Image
* @desc This is the feater image drawn on your title screen. (Moving)
* @default Feather
* 
* @param New Game Help Image
* @desc This is the help image drawn for your New Game Command.
* @default note_1
*
* @param Help Image X Axis
* @desc This is the help image's x axis.
* @default 0
*
* @param Help Image Y Axis
* @desc This is the help image's x axis.
* @default 370
* 
* @param Help Image Opacity Speed
* @desc The opacity increase speed for the command image before appearing.
* @default 2
* 
* @param Help Image Starting Opacity
* @desc This is the help image's starting opacity before appearing.
* @default 0
*
* @param Continue Help Image
* @desc This is the help image drawn for your Continue Command.
* @default note_2
* 
* @param Option Help Image
* @desc This is the help image drawn for your Options Command.
* @default note_3
* 
* @param Quit Help Image
* @desc This is the help image drawn for your Quit Command.
* @default note_4
* 
*/

var SOUL_MV = SOUL_MV || {};

SOUL_MV.Belldandy = {};

// IMAGES
SOUL_MV.Belldandy.BackgroundImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Background Layer'] || 'blue sky';
SOUL_MV.Belldandy.OverlayImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Overlay Layer'] || 'cloud_overlay';
SOUL_MV.Belldandy.PortraitImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Foreground Layer'] || 'portrait';
SOUL_MV.Belldandy.MagicCircleImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Magic Circle Layer'] || 'blue circle';
SOUL_MV.Belldandy.LogoImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Logo Layer'] || 'Logo';
SOUL_MV.Belldandy.NewGameImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['New Game Image'] || 'command_1';
SOUL_MV.Belldandy.ContinueImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Continue Image'] || 'command_2';
SOUL_MV.Belldandy.OptionsImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Option Image'] || 'command_3';
SOUL_MV.Belldandy.QuitImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Quit Image'] || 'command_4';
SOUL_MV.Belldandy.FeatherTile = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Feather Image'] || 'Feather';
SOUL_MV.Belldandy.NewGameHelpImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['New Game Help Image'] || 'note_1';
SOUL_MV.Belldandy.ContinueHelpImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Continue Help Image'] || 'note_2';
SOUL_MV.Belldandy.OptionsHelpImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Option Help Image'] || 'note_3';
SOUL_MV.Belldandy.QuitHelpImage = PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Quit Help Image'] || 'note_4';

//OVERLAY
SOUL_MV.Belldandy.OverlayOpacity = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Overlay Opacity'] || 70);
SOUL_MV.Belldandy.OverlayX = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Overlay Horz Movement'] || 0.50);
SOUL_MV.Belldandy.OverlayY = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Overlay Vert Movement'] || 0);

//FOREGROUND / PORTRAIT
SOUL_MV.Belldandy.PortraitX = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Foreground X Axis'] || 0);
SOUL_MV.Belldandy.PortraitY = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Foreground Y Axis'] || -720);

// MAGIC CIRCLE
SOUL_MV.Belldandy.MagicCircleX = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Magic Circle X Axis'] || 307);
SOUL_MV.Belldandy.MagicCircleY = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Magic Circle Y Axis'] || 10);
SOUL_MV.Belldandy.MagicCircleAX = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Magic Circle Anchor X'] || 0.5);
SOUL_MV.Belldandy.MagicCircleAY = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Magic Circle Anchor Y'] || 0.5);
SOUL_MV.Belldandy.MagicCircleRotation = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Magic Circle Rotation'] || 0.003);
SOUL_MV.Belldandy.MagicCircleOpacity = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Magic Circle Starting Opacity'] || 0);
SOUL_MV.Belldandy.MagicCircleSpeed = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Magic Circle Opacity Speed'] || 2);

//LOGO
SOUL_MV.Belldandy.LogoOpacity = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Logo Starting Opacity'] || 0);
SOUL_MV.Belldandy.LogoOpacitySpeed = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Logo Opacity Speed'] || 2);
SOUL_MV.Belldandy.LogoX = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Logo X Axis'] || 0);
SOUL_MV.Belldandy.LogoY = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Logo Y Axis'] || 0);

// HELP IMAGE
SOUL_MV.Belldandy.HelpImageSpeed = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Help Image Opacity Speed'] || 2);
SOUL_MV.Belldandy.HelpOpacity = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Help Image Starting Opacity'] || 0);
SOUL_MV.Belldandy.HelpX = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Help Image X Axis'] || 0);
SOUL_MV.Belldandy.HelpY = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Help Image Y Axis'] || 370);

// COMMAND IMAGE

SOUL_MV.Belldandy.CommandX = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Command Image X Axis'] || 270);
SOUL_MV.Belldandy.CommandY = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Command Image Y Axis'] || 540);

// DESCEND
SOUL_MV.Belldandy.Descend = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Descend Speed'] || 1);
SOUL_MV.Belldandy.DescendLock = Number(PluginManager.parameters('SOUL_MV Animated Title Belldandy')['Descend Distance'] || -300);

ImageManager.loadTitle3 = function(filename, hue) {
    return this.loadBitmap('img/titles/', filename, hue, true);
};


Scene_Title.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.createBackgroundOverlay();
    this.createFeathers();
    this.createForeground();
    this.createMagicCircle();
    this.createGameLogo();
    this.createWindowLayer();
    this.createCommandWindow();
    this.createCommandHelp();

};

Scene_Title.prototype.createFeathers = function() {
    this._backSprite4 = new TilingSprite(ImageManager.loadTitle3(SOUL_MV.Belldandy.FeatherTile));
    this._backSprite4.move(0, 0, Graphics.width * 10, Graphics.height * 10);
    this.addChildAt(this._backSprite4, 1);
};

Scene_Title.prototype.createMagicCircle = function() {
    this._magicCircle = new Sprite();
    this._magicCircle.x = SOUL_MV.Belldandy.MagicCircleX;
    this._magicCircle.anchor.x = SOUL_MV.Belldandy.MagicCircleAX;
    this._magicCircle.anchor.y = SOUL_MV.Belldandy.MagicCircleAY;
    this._magicCircle.opacity = SOUL_MV.Belldandy.MagicCircleOpacity;
    this._magicCircle.y = SOUL_MV.Belldandy.MagicCircleY;
    this._magicCircle.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.MagicCircleImage);
    
};

Scene_Title.prototype.createBackgroundOverlay = function() {
    this._backSprite3 = new TilingSprite(ImageManager.loadTitle3(SOUL_MV.Belldandy.OverlayImage));
    this._backSprite3.move(0, 0, Graphics.width, Graphics.height);
    this._backSprite3.opacity = SOUL_MV.Belldandy.OverlayOpacity;
    this.addChildAt(this._backSprite3, 1);
};

Scene_Title.prototype.createBackground = function() {
    this._backSprite1 = new Sprite(ImageManager.loadTitle3(SOUL_MV.Belldandy.BackgroundImage));
    this._backSprite2 = new Sprite(ImageManager.loadTitle3(SOUL_MV.Belldandy.PortraitImage));
    this._backSprite2.x = SOUL_MV.Belldandy.PortraitX;
    this._backSprite2.y = SOUL_MV.Belldandy.PortraitY;
    this.addChild(this._backSprite1);
    this.addChild(this._backSprite2);
};

Scene_Title.prototype.createGameLogo = function() {
	this._logoSprite = new Sprite();
	this._logoSprite.opacity = SOUL_MV.Belldandy.LogoOpacity;
	this._logoSprite.x = SOUL_MV.Belldandy.LogoX;
	this._logoSprite.y = SOUL_MV.Belldandy.LogoY;
	this.addChildAt(this._logoSprite, 4);
}

Scene_Title.prototype.createCommandHelp = function() {
	this._commandHelp = new Sprite();
	this._commandHelp.opacity = SOUL_MV.Belldandy.HelpOpacity;
	this._commandHelp.x = SOUL_MV.Belldandy.HelpX;
	this._commandHelp.y = SOUL_MV.Belldandy.HelpY;
	this.addChildAt(this._commandHelp, 5);
}

Scene_Title.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    this.playTitleMusic();
    this.startFadeIn(this.fadeSpeed(), false);
    this.button_phase = false;
};

Scene_Title.prototype.createForeground = function() {
    this._gameTitleSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
    this.addChild(this._gameTitleSprite);
    if ($dataSystem.optDrawTitle) {
        this.drawGameTitle();
    }
};

Scene_Title.prototype.update = function() {
	if (this._backSprite2.y != SOUL_MV.Belldandy.DescendLock) {
		this._backSprite2.y += SOUL_MV.Belldandy.Descend;
	} else {
		this._backSprite2.y = SOUL_MV.Belldandy.DescendLock;
		this.addChildAt(this._magicCircle, 1);
		this.refreshCircle();
		this.refreshLogo();
		this.refreshHelpCommands();
		this._commandWindow.open();
		if(!this.button_phase) {
			this.createButtonCommands();
			this.button_phase = true;
			this._logoSprite.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.LogoImage);
			
		}
		if (this.button_phase)this.refreshCommandButton(); 
	}
	this._magicCircle.rotation += SOUL_MV.Belldandy.MagicCircleRotation;

	this._backSprite3.origin.x += SOUL_MV.Belldandy.OverlayX;
	this._backSprite3.origin.y += SOUL_MV.Belldandy.OverlayY;

	this._backSprite4.origin.x += Math.sin(new Date().getTime() / 400);
	this._backSprite4.origin.y += 2;
    Scene_Base.prototype.update.call(this);
};

Scene_Title.prototype.refreshCircle = function()
 {
 	if (this._magicCircle.opacity != 255) {
 		this._magicCircle.opacity += SOUL_MV.Belldandy.MagicCircleSpeed;
 	} else {
 		this._magicCircle.opacity = 255;
 	}
 }

Scene_Title.prototype.refreshLogo = function()
 {
 	if (this._logoSprite.opacity != 255) {
 		this._logoSprite.opacity += SOUL_MV.Belldandy.LogoOpacitySpeed;
 	} else {
 		this._logoSprite.opacity = 255;
 	}
 }

 Scene_Title.prototype.refreshHelpCommands = function()
 {
 	if (this._commandHelp.opacity != 255) {
 		this._commandHelp.opacity += SOUL_MV.Belldandy.HelpImageSpeed;
 	} else {
 		this._commandHelp.opacity = 255;
 	}
 }

Scene_Title.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_TitleCommand(); this._commandWindow.visible = false;
    this._commandWindow.x = Graphics.boxWidth; this._commandWindow.y = Graphics.boxHeight;
    this._commandWindow.setHandler('newGame',  this.commandNewGame.bind(this));
    this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    this._commandWindow.setHandler('options',  this.commandOptions.bind(this));
    this._commandWindow.setHandler('quit',  this.commandQuit.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Title.prototype.commandQuit = function() {
	this._commandWindow.close();
	SceneManager.exit();
}

Scene_Title.prototype.commandNewGame = function() {
    DataManager.setupNewGame();
    this.removeChild(this._commandSprite);
    this._commandWindow.close();
    this.fadeOutAll();
    SceneManager.goto(Scene_Map);
};

Scene_Title.prototype.commandNewGameX = function() {
	SoundManager.playOk();
    DataManager.setupNewGame();
    this.removeChild(this._commandSprite);
    this._commandWindow.close();
    this.fadeOutAll();
    SceneManager.goto(Scene_Map);
};

Scene_Title.prototype.commandContinueX = function() {
	SoundManager.playOk();
    this._commandWindow.close();
    SceneManager.push(Scene_Load);
};

Scene_Title.prototype.commandOptionsX = function() {
	SoundManager.playOk();
    this._commandWindow.close();
    SceneManager.push(Scene_Options);
};

 Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    this.addCommand(TextManager.options,   'options');
    this.addCommand('Quit',   'quit');
};

Scene_Title.prototype.createButtonCommands = function() {
	this._commandSprite = new Sprite_Button();
	this._commandSprite.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.NewGameImage);
	this._commandSprite.x = SOUL_MV.Belldandy.CommandX;
	this._commandSprite.y = SOUL_MV.Belldandy.CommandY;
	this.addChild(this._commandSprite);
}

Scene_Title.prototype.refreshCommandButton = function() {
	if (this._commandWindow._index === 0) {
		this._commandHelp.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.NewGameHelpImage);
		if (!DataManager.isAnySavefileExists()) {
			this._commandSprite.setColorTone([0, 0, 0], 1);
		}			

		this._commandSprite.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.NewGameImage);
		this._commandSprite.setClickHandler(this.commandNewGameX.bind(this));
	}
	if (this._commandWindow._index === 1) {
		this._commandHelp.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.ContinueHelpImage);
		if (DataManager.isAnySavefileExists()) {
			this._commandSprite.setColorTone([0, 0, 0], 1);
		} else {
			this._commandSprite.setColorTone([120, 100, 100], 1);
		}
		this._commandSprite.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.ContinueImage);
		this._commandSprite.setClickHandler(this.commandContinueX.bind(this));
	}
	if (this._commandWindow._index === 2) {
		this._commandHelp.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.OptionsHelpImage);
		if (!DataManager.isAnySavefileExists()) {
			this._commandSprite.setColorTone([0, 0, 0], 1);
		}			
		this._commandSprite.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.OptionsImage);
		this._commandSprite.setClickHandler(this.commandOptionsX.bind(this));
	}
	if (this._commandWindow._index === 3) {
		this._commandHelp.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.QuitHelpImage);
		if (!DataManager.isAnySavefileExists()) {
			this._commandSprite.setColorTone([0, 0, 0], 1);
		}	
		this._commandSprite.bitmap = ImageManager.loadTitle3(SOUL_MV.Belldandy.QuitImage);
		this._commandSprite.setClickHandler(this.commandQuit.bind(this));
	}			
}

Scene_Title.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    this.removeChild(this._commandSprite);
    SceneManager.snapForBackground();
};

Window_TitleCommand.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isTriggered('down'));
        }
        if (Input.isRepeated('up')) {
            this.cursorUp(Input.isTriggered('up'));
        }
        if (Input.isRepeated('right')) {
            this.cursorDown(Input.isTriggered('down'));
        }
        if (Input.isRepeated('left')) {
             this.cursorUp(Input.isTriggered('up'));
        }
        if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.cursorPagedown();
        }
        if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.cursorPageup();
        }
        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        }
    }
};
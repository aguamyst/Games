//=============================================================================
// Animated Menu Wallpaper.js
//=============================================================================

/*:
* @plugindesc v1.2 Creates an animated Menu Wallpaper with a new Particle System.
* @author Soulpour777
*
* @param Spiral Particles Number
* @desc How many coil particles do you want to be shown on the screen?
* @default 13
*
* @param Spiral Max Speed
* @desc Maximum speed of the spiral coil particle movement. (Movement)
* @default 13
*
* @param Spiral Min Speed
* @desc Minimum speed of the spiral coil particle movement. (Movement)
* @default 5
*
* @param Spiral Max Amplifier
* @desc Maximum amplifier for the spiral coil particle movement. (Swirl Range and Speed)
* @default 100
*
* @param Spiral Min Amplifier
* @desc Minimum amplifier for the spiral coil particle movement. (Swirl Range and Speed)
* @default 20
*
* @param Wallpapers
* @desc The list contains the names of the wallpapers you use (image name) (without "" marks).
* (Default - 25)
* @default WallpaperA, WallpaperB, WallpaperC, WallpaperD
*
* @param Particles 
* @desc The list contains the names of the particles you use (image name) (without "" marks).
* (Default - 25)
* @default ParticleA, ParticleB, ParticleC, ParticleD
*
* @param GoldWindowOpacity
* @desc Opacity of the gold window.
* 0 to 255
* @default 0
*
* @param CommandWindowOpacity
* @desc Opacity of the gold window.
* 0 to 255
* @default 0
* 
* @param StatusWindowOpacity
* @desc Opacity of the status window.
* 0 to 255
* @default 0
* 
* @help  
* Animated Menu Wallpaper
* SOUL_MV
* Instructions: Place the js script under the plugins folder and the images on the img/menu_wallpaper folder.
* Image Credits: http://animeflow.net/
* Terms of Use:
* You are free to use my scripts in your game projects as long as you give credit. 
* For commercial or IGMC purposes, please contact me.
* Each script (without the label being free to use commercially) are 
* protected under Attribution-NonCommercial-ShareAlike 3.0 Philippines (CC BY-NC-SA 3.0 PH).
*/

(function(){
    var SOUL_MV = SOUL_MV || {}; 
    SOUL_MV.ParticleSystem = {};
    SOUL_MV.ParticleSystem.spiralCoils = Number(PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['Spiral Particles Number'] || 13);
    SOUL_MV.ParticleSystem.spiralMaxSpeed = Number(PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['Spiral Max Speed'] || 13);
    SOUL_MV.ParticleSystem.spiralMinSpeed = Number(PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['Spiral Min Speed'] || 5);
    SOUL_MV.ParticleSystem.spiralMaxAmplifier = Number(PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['Spiral Max Amplifier'] || 100);
    SOUL_MV.ParticleSystem.spiralMinAmplifier = Number(PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['Spiral Min Amplifier'] || 20);
    
    SOUL_MV.AnimatedMenuWallpaper = SOUL_MV.AnimatedMenuWallpaper || {};
    SOUL_MV.AnimatedMenuWallpaper.wallpaper_list = PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['Wallpapers'].split(/\s*,\s*/).filter(function(value) { return !!value; });
    SOUL_MV.AnimatedMenuWallpaper.particles_list = PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['Particles'].split(/\s*,\s*/).filter(function(value) { return !!value; });    
    SOUL_MV.AnimatedMenuWallpaper.goldOpacity = Number(PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['GoldWindowOpacity'] || 0);
    SOUL_MV.AnimatedMenuWallpaper.commandOpacity = Number(PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['CommandWindowOpacity'] || 0);
    SOUL_MV.AnimatedMenuWallpaper.statusOpacity = Number(PluginManager.parameters('SOUL_MV Animated Menu Wallpaper')['StatusWindowOpacity'] || 0);
    
    ImageManager.loadMenuWallpaper = function(filename, hue) {
        return this.loadBitmap('img/menu_wallpaper/', filename, hue, true);
    };



    // COIL PARTICLES
    function Spiral_Coil() {
        this.initialize.apply(this, arguments);
    }

    Spiral_Coil.prototype = Object.create(Sprite_Base.prototype);
    Spiral_Coil.prototype.constructor = Spiral_Coil;


    Spiral_Coil.prototype.initialize = function() {
        this._maximumSpeed = SOUL_MV.ParticleSystem.spiralMaxSpeed;
        this._minimumSpeed = SOUL_MV.ParticleSystem.spiralMinSpeed;

        this._maxAmplifier = SOUL_MV.ParticleSystem.spiralMaxAmplifier;
        this._minimumAmplifier = SOUL_MV.ParticleSystem.spiralMinAmplifier;


        Sprite_Base.prototype.initialize.call(this);

        this.bitmap = ImageManager.loadMenuWallpaper(SOUL_MV.AnimatedMenuWallpaper.particles_list[Math.randomInt(SOUL_MV.AnimatedMenuWallpaper.particles_list.length)]);

        this.x = this.width / 2;
        this.amplitude = 1;
        this.speed = 1;
        this.radian = 0.0;
        this.reborn();


    }

    function soulpour_god_shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    Spiral_Coil.prototype.reborn = function() {
        this.opacity = 255;
        this.amplitude = this._minimumAmplifier + Math.randomInt(this._maxAmplifier - this._minimumAmplifier);
        this.speed = Math.randomInt(3) + 1 + Math.randomInt(1);
        this.swingingSpeed = Math.random() * 0.1;
        this.radian = Math.random() * Math.random();
        this.xposition = Math.random() * Graphics.width;
        this.yposition = parseFloat(Graphics.height);
        this.bitmapMethod = soulpour_god_shuffle(Math['sin'], Math['cos']);
        this.y = this.yposition;
        this.x = this.xposition;
        this.scale.x = this.scale.y = 1.0;
    }

    Spiral_Coil.prototype.update = function() {
        Sprite_Base.prototype.update.call(this);
        this.updateMovement();
        if(this.opacity <= 1) {
            this.reborn();
        } 
        var method = [Math.sin(this.radian), Math.cos(this.radian)];
        method = method[Math.floor(Math.random())];
        this.x = method * this.amplitude + this.xposition;  
    }

    Spiral_Coil.prototype.updateMovement = function() {
        this.radian += this.swingingSpeed;
        this.yposition -= this.speed;
        this.x = this.radian * this.amplitude + this.xposition;
        this.y = this.yposition;
        this.opacity -= 1;
    }    
    
    SOUL_MV.ParticleSystem._menuBaseCreate = Scene_MenuBase.prototype.create;
    Scene_MenuBase.prototype.create = function() {
        SOUL_MV.ParticleSystem._menuBaseCreate.call(this);
        this._createParticles();
    };

    Scene_MenuBase.prototype._createParticles = function() {
        this._particles = [];
        for (var i = 0; i < SOUL_MV.ParticleSystem.spiralCoils; i++) {
            var x = new Spiral_Coil();
            this._particles.push(x);
            this.addChildAt(this._particles[i], 1);
        }
    }

    Scene_MenuBase.prototype.actor = function() {
        return this._actor;
    };

    Scene_MenuBase.prototype.updateActor = function() {
        this._actor = $gameParty.menuActor();
    };

    Scene_MenuBase.prototype.createBackground = function() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = ImageManager.loadMenuWallpaper(SOUL_MV.AnimatedMenuWallpaper.wallpaper_list[Math.randomInt(SOUL_MV.AnimatedMenuWallpaper.wallpaper_list.length)]);
        this.addChild(this._backgroundSprite);
    };

Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this._commandWindow.opacity = SOUL_MV.AnimatedMenuWallpaper.commandOpacity;
    this._commandWindow.setHandler('item',      this.commandItem.bind(this));
    this._commandWindow.setHandler('skill',     this.commandPersonal.bind(this));
    this._commandWindow.setHandler('equip',     this.commandPersonal.bind(this));
    this._commandWindow.setHandler('status',    this.commandPersonal.bind(this));
    this._commandWindow.setHandler('formation', this.commandFormation.bind(this));
    this._commandWindow.setHandler('options',   this.commandOptions.bind(this));
    this._commandWindow.setHandler('save',      this.commandSave.bind(this));
    this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Menu.prototype.createGoldWindow = function() {
    this._goldWindow = new Window_Gold(0, 0);
    this._goldWindow.opacity = SOUL_MV.AnimatedMenuWallpaper.goldOpacity;
    this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height;
    this.addWindow(this._goldWindow);
};

Scene_Menu.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_MenuStatus(this._commandWindow.width, 0);
    this._statusWindow.opacity = SOUL_MV.AnimatedMenuWallpaper.statusOpacity;
    this.addWindow(this._statusWindow);
};

})();


System.register("chunks:///_virtual/ConfirmPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIPanel.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Button, Label, UIPanel;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
    }, function (module) {
      UIPanel = module.UIPanel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "0e2437ACFZKjq7bLVdPr1Ro", "ConfirmPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ConfirmPanel = exports('ConfirmPanel', (_dec = ccclass('ConfirmPanel'), _dec2 = property({
        type: Button
      }), _dec3 = property({
        type: Button
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UIPanel) {
        _inheritsLoose(ConfirmPanel, _UIPanel);

        function ConfirmPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UIPanel.call.apply(_UIPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "confirmBtn", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "cancelBtn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "titleLab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "desLab", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_conFunc", void 0);

          _defineProperty(_assertThisInitialized(_this), "_canFunc", void 0);

          return _this;
        }

        var _proto = ConfirmPanel.prototype;

        _proto.onShow = function onShow(des, conFunc, title, canFunc) {
          if (title === void 0) {
            title = "警告";
          }

          this._conFunc = conFunc;
          this._canFunc = canFunc;
          this.titleLab.string = title;
          this.desLab.string = des;
        };

        _proto.onConfirmClicked = function onConfirmClicked() {
          if (this._conFunc) {
            this._conFunc();
          }

          this.close();
        };

        _proto.onCancelClicked = function onCancelClicked() {
          if (this._canFunc) {
            this._canFunc();
          }

          this.close();
        };

        return ConfirmPanel;
      }(UIPanel), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "confirmBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cancelBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "desLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LifeTrackItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, UITransform, Size, Sprite, Component, GradeColor;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      UITransform = module.UITransform;
      Size = module.Size;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      GradeColor = module.GradeColor;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "13c8150xT9OHoVDT5Oz5bA9", "LifeTrackItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LifeTrackItem = exports('LifeTrackItem', (_dec = ccclass('LifeTrackItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LifeTrackItem, _Component);

        function LifeTrackItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "agaLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "descriptionText", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "descriptionBG", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lineNode", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LifeTrackItem.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.setData = function setData(age, description, finalGrade) {
          this.agaLabel.string = age;
          this.descriptionText.string = description;
          this.descriptionText.updateRenderData(true);
          var height = this.getHeight();
          var descriptionBGTrans = this.descriptionBG.getComponent(UITransform);
          var size = descriptionBGTrans.contentSize;
          descriptionBGTrans.contentSize = new Size(size.width, height);
          var bgSprite = this.descriptionBG.getComponent(Sprite);
          bgSprite.color = GradeColor[finalGrade];
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.getHeight = function getHeight() {
          var size = this.descriptionText.getComponent(UITransform).contentSize;
          return size.height;
        };

        _proto.setLineLength = function setLineLength(length) {
          var lineNodeTrans = this.lineNode.getComponent(UITransform);
          var size = lineNodeTrans.contentSize;
          lineNodeTrans.contentSize = new Size(size.width, length);
        };

        return LifeTrackItem;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "agaLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "descriptionText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "descriptionBG", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lineNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/property.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './util.ts'], function (exports) {
  'use strict';

  var _classPrivateFieldSet, _classPrivateFieldGet, _createForOfIteratorHelperLoose, _defineProperty, cclegacy, sys, sum, max, min, clone, listRandom;

  return {
    setters: [function (module) {
      _classPrivateFieldSet = module.classPrivateFieldSet;
      _classPrivateFieldGet = module.classPrivateFieldGet;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      sum = module.sum;
      max = module.max;
      min = module.min;
      clone = module.clone;
      listRandom = module.listRandom;
    }],
    execute: function () {
      cclegacy._RF.push({}, "146017WEUlI/LkSWRI1dalX", "property", undefined);

      var _ageData = new WeakMap();

      var _data = new WeakMap();

      var Property = function (v) {
        return exports({
          Property: v,
          default: v
        }), v;
      }( /*#__PURE__*/function () {
        function Property() {
          _defineProperty(this, "TYPES", {
            // 本局
            AGE: "AGE",
            // 年龄 age AGE
            CHR: "CHR",
            // 颜值 charm CHR
            INT: "INT",
            // 智力 intelligence INT
            STR: "STR",
            // 体质 strength STR
            MNY: "MNY",
            // 家境 money MNY
            SPR: "SPR",
            // 快乐 spirit SPR
            ESC: "ESC",
            // 事件分 event score ESC
            LIF: "LIF",
            // 生命 life LIFE
            TLT: "TLT",
            // 天赋 talent TLT
            EVT: "EVT",
            // 事件 event EVT
            TMS: "TMS",
            // 次数 times TMS
            // Auto calc
            LAGE: "LAGE",
            // 最低年龄 Low Age
            HAGE: "HAGE",
            // 最高年龄 High Age
            LCHR: "LCHR",
            // 最低颜值 Low Charm
            HCHR: "HCHR",
            // 最高颜值 High Charm
            LINT: "LINT",
            // 最低智力 Low Intelligence
            HINT: "HINT",
            // 最高智力 High Intelligence
            LSTR: "LSTR",
            // 最低体质 Low Strength
            HSTR: "HSTR",
            // 最高体质 High Strength
            LMNY: "LMNY",
            // 最低家境 Low Money
            HMNY: "HMNY",
            // 最高家境 High Money
            LSPR: "LSPR",
            // 最低快乐 Low Spirit
            HSPR: "HSPR",
            // 最高快乐 High Spirit
            SUM: "SUM",
            // 总评 summary SUM
            EXT: "EXT",
            // 继承天赋
            // 总计
            // Achievement Total
            ATLT: "ATLT",
            // 拥有过的天赋 Achieve Talent
            AEVT: "AEVT",
            // 触发过的事件 Achieve Event
            ACHV: "ACHV",
            // 达成的成就 Achievement
            CTLT: "RTLT",
            // 天赋选择数 Count Talent
            CEVT: "REVT",
            // 事件收集数 Count Event
            CACHV: "CACHV",
            // 成就达成数 Count Achievement
            // SPECIAL
            RDM: 'RDM' // 随机属性 random RDM

          });

          _defineProperty(this, "SPECIAL", {
            RDM: [// 随机属性 random RDM
            this.TYPES.CHR, this.TYPES.INT, this.TYPES.STR, this.TYPES.MNY, this.TYPES.SPR]
          });

          _ageData.set(this, {
            writable: true,
            value: void 0
          });

          _data.set(this, {
            writable: true,
            value: {}
          });
        }

        var _proto = Property.prototype;

        _proto.initial = function initial(_ref) {
          var age = _ref.age;

          _classPrivateFieldSet(this, _ageData, new Map());

          for (var key in age) {
            var _event, _talent;

            var a = age[key].age;
            var _age$key = age[key],
                event = _age$key.event,
                talent = _age$key.talent;
            if (!Array.isArray(event)) event = ((_event = event) === null || _event === void 0 ? void 0 : _event.split(',')) || [];
            event = event.map(function (v) {
              var value = ("" + v).split('*').map(function (n) {
                return Number(n);
              });
              if (value.length == 1) value.push(1);
              return value;
            });
            if (!Array.isArray(talent)) talent = ((_talent = talent) === null || _talent === void 0 ? void 0 : _talent.split(',')) || [];
            talent = talent.map(function (v) {
              return Number(v);
            }); //不知道他保留干嘛，后期可能会用？他想改#ageData，直接赋值给age，无语

            _classPrivateFieldGet(this, _ageData)[a] = {
              event: event,
              talent: talent
            };
          } //部分需要init但是不能restart的数据在此重置
          // this.#data = {
          //     [this.TYPES.EXT]: 0
          // };

        };

        _proto.restart = function restart(data) {
          var _classPrivateFieldSet2;

          _classPrivateFieldSet(this, _data, (_classPrivateFieldSet2 = {}, _classPrivateFieldSet2[this.TYPES.AGE] = -1, _classPrivateFieldSet2[this.TYPES.CHR] = 0, _classPrivateFieldSet2[this.TYPES.INT] = 0, _classPrivateFieldSet2[this.TYPES.STR] = 0, _classPrivateFieldSet2[this.TYPES.MNY] = 0, _classPrivateFieldSet2[this.TYPES.SPR] = 0, _classPrivateFieldSet2[this.TYPES.ESC] = 0, _classPrivateFieldSet2[this.TYPES.LIF] = 1, _classPrivateFieldSet2[this.TYPES.TLT] = [], _classPrivateFieldSet2[this.TYPES.EVT] = [], _classPrivateFieldSet2[this.TYPES.LAGE] = Infinity, _classPrivateFieldSet2[this.TYPES.LCHR] = Infinity, _classPrivateFieldSet2[this.TYPES.LINT] = Infinity, _classPrivateFieldSet2[this.TYPES.LSTR] = Infinity, _classPrivateFieldSet2[this.TYPES.LSPR] = Infinity, _classPrivateFieldSet2[this.TYPES.LMNY] = Infinity, _classPrivateFieldSet2[this.TYPES.HAGE] = -Infinity, _classPrivateFieldSet2[this.TYPES.HCHR] = -Infinity, _classPrivateFieldSet2[this.TYPES.HINT] = -Infinity, _classPrivateFieldSet2[this.TYPES.HSTR] = -Infinity, _classPrivateFieldSet2[this.TYPES.HMNY] = -Infinity, _classPrivateFieldSet2[this.TYPES.HSPR] = -Infinity, _classPrivateFieldSet2));

          for (var key in data) {
            this.change(key, data[key]);
          }
        };

        _proto.restartLastStep = function restartLastStep() {
          _classPrivateFieldGet(this, _data)[this.TYPES.LAGE] = this.get(this.TYPES.AGE);
          _classPrivateFieldGet(this, _data)[this.TYPES.LCHR] = this.get(this.TYPES.CHR);
          _classPrivateFieldGet(this, _data)[this.TYPES.LINT] = this.get(this.TYPES.INT);
          _classPrivateFieldGet(this, _data)[this.TYPES.LSTR] = this.get(this.TYPES.STR);
          _classPrivateFieldGet(this, _data)[this.TYPES.LSPR] = this.get(this.TYPES.SPR);
          _classPrivateFieldGet(this, _data)[this.TYPES.LMNY] = this.get(this.TYPES.MNY);
          _classPrivateFieldGet(this, _data)[this.TYPES.HAGE] = this.get(this.TYPES.AGE);
          _classPrivateFieldGet(this, _data)[this.TYPES.HCHR] = this.get(this.TYPES.CHR);
          _classPrivateFieldGet(this, _data)[this.TYPES.HINT] = this.get(this.TYPES.INT);
          _classPrivateFieldGet(this, _data)[this.TYPES.HSTR] = this.get(this.TYPES.STR);
          _classPrivateFieldGet(this, _data)[this.TYPES.HMNY] = this.get(this.TYPES.MNY);
          _classPrivateFieldGet(this, _data)[this.TYPES.HSPR] = this.get(this.TYPES.SPR);
        };

        _proto.get = function get(prop) {
          switch (prop) {
            case this.TYPES.AGE:
            case this.TYPES.CHR:
            case this.TYPES.INT:
            case this.TYPES.STR:
            case this.TYPES.MNY:
            case this.TYPES.SPR:
            case this.TYPES.ESC:
            case this.TYPES.LIF:
            case this.TYPES.TLT:
            case this.TYPES.EVT:
              var data = _classPrivateFieldGet(this, _data)[prop];

              return clone(data);

            case this.TYPES.LAGE:
            case this.TYPES.LCHR:
            case this.TYPES.LINT:
            case this.TYPES.LSTR:
            case this.TYPES.LMNY:
            case this.TYPES.LSPR:
              return min(_classPrivateFieldGet(this, _data)[prop], this.get(this.fallback(prop)));

            case this.TYPES.HAGE:
            case this.TYPES.HCHR:
            case this.TYPES.HINT:
            case this.TYPES.HSTR:
            case this.TYPES.HMNY:
            case this.TYPES.HSPR:
              return max(_classPrivateFieldGet(this, _data)[prop], this.get(this.fallback(prop)));

            case this.TYPES.SUM:
              var HAGE = this.get(this.TYPES.HAGE);
              var HCHR = this.get(this.TYPES.HCHR);
              var HINT = this.get(this.TYPES.HINT);
              var HSTR = this.get(this.TYPES.HSTR);
              var HMNY = this.get(this.TYPES.HMNY);
              var HSPR = this.get(this.TYPES.HSPR);
              return Math.floor(sum(HCHR, HINT, HSTR, HMNY, HSPR) * 2 + HAGE / 2);

            case this.TYPES.TMS:
              return this.lsget('restartTimes') || 0;

            case this.TYPES.EXT:
              return this.lsget('inheritTalent') || 0;

            case this.TYPES.ATLT:
            case this.TYPES.AEVT:
            case this.TYPES.ACHV:
              return this.lsget(prop) || [];

            case this.TYPES.CTLT:
            case this.TYPES.CEVT:
            case this.TYPES.CACHV:
              return this.get(this.fallback(prop)).length;

            default:
              return 0;
          }
        };

        _proto.fallback = function fallback(prop) {
          switch (prop) {
            case this.TYPES.LAGE:
            case this.TYPES.HAGE:
              return this.TYPES.AGE;

            case this.TYPES.LCHR:
            case this.TYPES.HCHR:
              return this.TYPES.CHR;

            case this.TYPES.LINT:
            case this.TYPES.HINT:
              return this.TYPES.INT;

            case this.TYPES.LSTR:
            case this.TYPES.HSTR:
              return this.TYPES.STR;

            case this.TYPES.LMNY:
            case this.TYPES.HMNY:
              return this.TYPES.MNY;

            case this.TYPES.LSPR:
            case this.TYPES.HSPR:
              return this.TYPES.SPR;

            case this.TYPES.CTLT:
              return this.TYPES.ATLT;

            case this.TYPES.CEVT:
              return this.TYPES.AEVT;

            case this.TYPES.CACHV:
              return this.TYPES.ACHV;

            default:
              return;
          }
        };

        _proto.set = function set(prop, value) {
          switch (prop) {
            case this.TYPES.AGE:
            case this.TYPES.CHR:
            case this.TYPES.INT:
            case this.TYPES.STR:
            case this.TYPES.MNY:
            case this.TYPES.SPR:
            case this.TYPES.ESC:
            case this.TYPES.LIF:
            case this.TYPES.TLT:
            case this.TYPES.EVT:
              // case this.TYPES.EXT:
              this.hl(prop, _classPrivateFieldGet(this, _data)[prop] = clone(value));
              this.achieve(prop, value);
              return;

            case this.TYPES.TMS:
              this.lsset('restartTimes', parseInt(value) || 0);
              return;

            case this.TYPES.EXT:
              this.lsset('inheritTalent', parseInt(value));
              return;

            default:
              return;
          }
        };

        _proto.getLastRecord = function getLastRecord() {
          var _clone;

          return clone((_clone = {}, _clone[this.TYPES.AGE] = this.get(this.TYPES.AGE), _clone[this.TYPES.CHR] = this.get(this.TYPES.CHR), _clone[this.TYPES.INT] = this.get(this.TYPES.INT), _clone[this.TYPES.STR] = this.get(this.TYPES.STR), _clone[this.TYPES.MNY] = this.get(this.TYPES.MNY), _clone[this.TYPES.SPR] = this.get(this.TYPES.SPR), _clone));
        };

        _proto.change = function change(prop, value) {
          if (Array.isArray(value)) {
            for (var _iterator = _createForOfIteratorHelperLoose(value), _step; !(_step = _iterator()).done;) {
              var v = _step.value;
              this.change(prop, Number(v));
            }

            return;
          }

          switch (prop) {
            case this.TYPES.AGE:
            case this.TYPES.CHR:
            case this.TYPES.INT:
            case this.TYPES.STR:
            case this.TYPES.MNY:
            case this.TYPES.SPR:
            case this.TYPES.ESC:
            case this.TYPES.LIF:
              this.hl(prop, _classPrivateFieldGet(this, _data)[prop] += Number(value));
              return;

            case this.TYPES.TLT:
            case this.TYPES.EVT:
              var _v = _classPrivateFieldGet(this, _data)[prop];

              if (value < 0) {
                var index = _v.indexOf(value);

                if (index != -1) _v.splice(index, 1);
              }

              if (!_v.includes(value)) _v.push(value);
              this.achieve(prop, value);
              return;

            case this.TYPES.TMS:
              this.set(prop, this.get(prop) + parseInt(value));
              return;

            default:
              return;
          }
        };

        _proto.hookSpecial = function hookSpecial(prop) {
          switch (prop) {
            case this.TYPES.RDM:
              return listRandom(this.SPECIAL.RDM);

            default:
              return prop;
          }
        };

        _proto.effect = function effect(effects) {
          for (var prop in effects) {
            this.change(this.hookSpecial(prop), Number(effects[prop]));
          }
        };

        _proto.isEnd = function isEnd() {
          return this.get(this.TYPES.LIF) < 1;
        };

        _proto.ageNext = function ageNext() {
          this.change(this.TYPES.AGE, 1);
          var age = this.get(this.TYPES.AGE);

          var _this$getAgeData = this.getAgeData(age),
              event = _this$getAgeData.event,
              talent = _this$getAgeData.talent;

          return {
            age: age,
            event: event,
            talent: talent
          };
        };

        _proto.getAgeData = function getAgeData(age) {
          return clone(_classPrivateFieldGet(this, _ageData)[age]);
        } //high low
        ;

        _proto.hl = function hl(prop, value) {
          var keys;

          switch (prop) {
            case this.TYPES.AGE:
              keys = [this.TYPES.LAGE, this.TYPES.HAGE];
              break;

            case this.TYPES.CHR:
              keys = [this.TYPES.LCHR, this.TYPES.HCHR];
              break;

            case this.TYPES.INT:
              keys = [this.TYPES.LINT, this.TYPES.HINT];
              break;

            case this.TYPES.STR:
              keys = [this.TYPES.LSTR, this.TYPES.HSTR];
              break;

            case this.TYPES.MNY:
              keys = [this.TYPES.LMNY, this.TYPES.HMNY];
              break;

            case this.TYPES.SPR:
              keys = [this.TYPES.LSPR, this.TYPES.HSPR];
              break;

            default:
              return;
          }

          var _keys = keys,
              l = _keys[0],
              h = _keys[1];
          _classPrivateFieldGet(this, _data)[l] = min(_classPrivateFieldGet(this, _data)[l], value);
          _classPrivateFieldGet(this, _data)[h] = max(_classPrivateFieldGet(this, _data)[h], value);
        };

        _proto.achieve = function achieve(prop, newData) {
          var key;

          switch (prop) {
            //[[id,time],[id,time]]
            case this.TYPES.ACHV:
              var _lastData = this.lsget(prop);

              this.lsset(prop, (_lastData || []).concat([[newData, Date.now()]]));
              return;

            case this.TYPES.TLT:
              key = this.TYPES.ATLT;
              break;

            case this.TYPES.EVT:
              key = this.TYPES.AEVT;
              break;

            default:
              return;
          }

          var lastData = this.lsget(key) || [];
          this.lsset(key, Array.from(new Set(lastData.concat(newData || []).flat())));
        };

        _proto.lsget = function lsget(key) {
          // return;
          var data = sys.localStorage.getItem(key);
          if (data == null || data == "") return;
          return JSON.parse(data);
        };

        _proto.lsset = function lsset(key, value) {
          sys.localStorage.setItem(key, JSON.stringify(value));
        };

        return Property;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SummaryPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIPanel.ts', './Defines.ts', './Talent.ts', './EventMessage.ts', './Life.ts', './TalentItem.ts', './PropItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Prefab, Button, Label, instantiate, UITransform, Vec3, UIPanel, CalStage, GradeColor, Message, talentMgr, eventMsg, lifeMgr, TalentItem, PropItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Button = module.Button;
      Label = module.Label;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
    }, function (module) {
      UIPanel = module.UIPanel;
    }, function (module) {
      CalStage = module.CalStage;
      GradeColor = module.GradeColor;
      Message = module.Message;
    }, function (module) {
      talentMgr = module.talentMgr;
    }, function (module) {
      eventMsg = module.eventMsg;
    }, function (module) {
      lifeMgr = module.lifeMgr;
    }, function (module) {
      TalentItem = module.TalentItem;
    }, function (module) {
      PropItem = module.PropItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

      cclegacy._RF.push({}, "1f26bOWTsVLxaooa+ZdgSIB", "SummaryPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var showPropKeys = ['CHR', 'INT', 'STR', 'MNY', 'SPR'];
      var SCORE_DES_LIST = [{
        value: 10,
        des: "啊。这。。。"
      }, {
        value: 20,
        des: "平平凡凡"
      }, {
        value: 40,
        des: "平平安安"
      }, {
        value: 80,
        des: "在世仙人"
      }, {
        value: 160,
        des: "超神"
      }];
      var SummaryPanel = exports('SummaryPanel', (_dec = ccclass('SummaryPanel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Button
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: Label
      }), _dec10 = property({
        type: Label
      }), _dec11 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UIPanel) {
        _inheritsLoose(SummaryPanel, _UIPanel);

        function SummaryPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UIPanel.call.apply(_UIPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "talentItemGroup", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "talentItemPrfb", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "propGroup", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "propItemPrfb", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "RestartButton", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ageLabel", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "resetTimesLabel", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scoreLabel", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scoreDesLabel", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tipsLabel", _descriptor10, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "talentItems", []);

          _defineProperty(_assertThisInitialized(_this), "selectedTalentIndices", []);

          _defineProperty(_assertThisInitialized(_this), "_talentList", void 0);

          _defineProperty(_assertThisInitialized(_this), "_limitSelectedTalentNum", 1);

          _defineProperty(_assertThisInitialized(_this), "_curMaxHeight", void 0);

          _defineProperty(_assertThisInitialized(_this), "_propItemsMap", new Map());

          return _this;
        }

        var _proto = SummaryPanel.prototype;

        _proto.start = function start() {};

        _proto.init = function init() {
          var _this2 = this;

          var talentIdList = lifeMgr._property.get(lifeMgr._property.TYPES.TLT);

          this._talentList = new Array(talentIdList.length);

          for (var i = 0; i < talentIdList.length; i++) {
            var talentId = talentIdList[i];
            this._talentList[i] = talentMgr.get(talentId);
          }

          this.talentItemGroup.removeAllChildren();
          this.selectedTalentIndices = [];
          this.talentItems = [];
          this.tipsLabel.string = "\u9009" + this._limitSelectedTalentNum + "\u9879\u5929\u8D4B\uFF0C\u53EF\u4EE5\u4FDD\u7559\u5230\u4E0B\u4E00\u4E16";

          var score = lifeMgr._property.get(lifeMgr._property.TYPES.ESC);

          this.scoreLabel.string = score;
          this.ageLabel.string = "\u4EAB\u5E74" + lifeMgr._property.get(lifeMgr._property.TYPES.AGE) + "\u5C81";
          this.resetTimesLabel.string = "\u7B2C" + lifeMgr._property.get(lifeMgr._property.TYPES.TMS) + "\u4E16\u4EE3";
          var stage = CalStage(SCORE_DES_LIST, score);
          this.scoreDesLabel.string = SCORE_DES_LIST[stage].des;
          this.scoreDesLabel.color = GradeColor[stage];
          this._contentUITrans = this.talentItemGroup._uiProps.uiTransformComp;
          this._curMaxHeight = 0;

          this._talentList.forEach(function (talentInfo, index) {
            var itemNode = instantiate(_this2.talentItemPrfb);
            itemNode.setParent(_this2.talentItemGroup);
            var item = itemNode.getComponent(TalentItem);
            item.index = index;
            item.setData(talentInfo);

            _this2.talentItems.push(item);

            item.onItemClick = _this2.onTalentItemClicked.bind(_this2);
            var itemHeight = itemNode.getComponent(UITransform).contentSize.height;
            itemNode.setPosition(new Vec3(0, _this2._curMaxHeight - itemHeight / 2, 0));
            _this2._curMaxHeight -= itemHeight;
            _this2._contentUITrans.height = -_this2._curMaxHeight; //重置talentList

            _this2.talentItems.forEach(function (item, index) {
              if (_this2.selectedTalentIndices.indexOf(index) >= 0) {
                item.setSelected(true);
              } else {
                item.setSelected(false);
              }
            });
          });

          this.initProp();
        };

        _proto.createPropItem = function createPropItem(propName, value) {
          var itemNode = instantiate(this.propItemPrfb);
          itemNode.setParent(this.propGroup);
          var item = itemNode.getComponent(PropItem);
          item.setData(propName, value);
          return item;
        };

        _proto.initProp = function initProp() {
          var _this3 = this;

          this.propGroup.removeAllChildren();

          this._propItemsMap.clear();

          var property = lifeMgr.getLastRecord();
          showPropKeys.forEach(function (key) {
            _this3._propItemsMap.set(key, _this3.createPropItem(key, property[key]));
          });
        };

        _proto.updatePropData = function updatePropData() {
          var _this4 = this;

          var property = lifeMgr.getLastRecord();
          showPropKeys.forEach(function (key) {
            var item = _this4._propItemsMap.get(key);

            item === null || item === void 0 ? void 0 : item.updateValue(property[key]);
          });
          this.scoreLabel.string = lifeMgr._property.get(lifeMgr._property.TYPES.ESC).toString();
        };

        _proto.onTalentItemClicked = function onTalentItemClicked(itemIndex) {
          var _this5 = this;

          var idx = this.selectedTalentIndices.indexOf(itemIndex);

          if (idx >= 0) {
            this.selectedTalentIndices.splice(idx, 1);
          } else {
            // 超过数量则替换掉上个选择的对象
            if (this.selectedTalentIndices.length === this._limitSelectedTalentNum) {
              this.selectedTalentIndices.splice(this._limitSelectedTalentNum - 1, 1);
            }

            this.selectedTalentIndices.push(itemIndex);
          }

          this.talentItems.forEach(function (item, index) {
            if (_this5.selectedTalentIndices.indexOf(index) >= 0) {
              item.setSelected(true);
            } else {
              item.setSelected(false);
            }
          });
        };

        _proto.onRestartButtonClicked = function onRestartButtonClicked() {
          if (this.selectedTalentIndices.length > 0) {
            lifeMgr._property.set(lifeMgr._property.TYPES.EXT, this._talentList[this.selectedTalentIndices[0]].id);
          } else {
            lifeMgr._property.set(lifeMgr._property.TYPES.EXT, 0);
          }

          eventMsg.emit(Message.Replay);
        };

        _proto.onShow = function onShow() {
          this.init();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return SummaryPanel;
      }(UIPanel), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "talentItemGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "talentItemPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "propGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "propItemPrfb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "RestartButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ageLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "resetTimesLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scoreDesLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tipsLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Life.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './util.ts', './property.ts', './event.ts', './Talent.ts', './achievement.ts', './ConfigManager.ts'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, _createClass, _defineProperty, _asyncToGenerator, cclegacy, weightRandom, Property, Event, talentMgr, Achievement, ConfigManager;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      weightRandom = module.weightRandom;
    }, function (module) {
      Property = module.Property;
    }, function (module) {
      Event = module.default;
    }, function (module) {
      talentMgr = module.talentMgr;
    }, function (module) {
      Achievement = module.Achievement;
    }, function (module) {
      ConfigManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "26af1qQIDFA4rL7IzI7FUF7", "Life", undefined);

      var LifeManager = /*#__PURE__*/function () {
        function LifeManager() {
          _defineProperty(this, "_property", void 0);

          _defineProperty(this, "_event", void 0);

          _defineProperty(this, "_talent", void 0);

          _defineProperty(this, "_achievement", void 0);

          _defineProperty(this, "_triggerTalents", void 0);

          this._property = new Property();
          this._event = new Event();
          this._talent = talentMgr;
          this._achievement = new Achievement();
        } //非属性的全局变量


        var _proto = LifeManager.prototype;

        _proto.initial = /*#__PURE__*/function () {
          var _initial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _yield$Promise$all, age, talents, events, achievements;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Promise.all([ConfigManager.readJson('age'), ConfigManager.readJson('talents'), ConfigManager.readJson('events'), ConfigManager.readJson('achievement')]);

                  case 2:
                    _yield$Promise$all = _context.sent;
                    age = _yield$Promise$all[0];
                    talents = _yield$Promise$all[1];
                    events = _yield$Promise$all[2];
                    achievements = _yield$Promise$all[3];

                    this._property.initial({
                      age: age
                    });

                    this._talent.initial({
                      talents: talents
                    });

                    this._event.initial({
                      events: events
                    });

                    this._achievement.initial({
                      achievements: achievements
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function initial() {
            return _initial.apply(this, arguments);
          }

          return initial;
        }();

        _proto.restart = function restart(allocation) {
          this._triggerTalents = {};
          var contents = this.talentReplace(allocation.TLT);

          this._property.restart(allocation);

          this.doTalent();

          this._property.restartLastStep();

          this._achievement.achieve(this._achievement.Opportunity.START, this._property);

          return contents;
        };

        _proto.getTalentAllocationAddition = function getTalentAllocationAddition(talents) {
          return this._talent.allocationAddition(talents);
        };

        _proto.getTalentCurrentTriggerCount = function getTalentCurrentTriggerCount(talentId) {
          return this._triggerTalents[talentId] || 0;
        };

        _proto.next = function next() {
          var _this$_property$ageNe = this._property.ageNext(),
              age = _this$_property$ageNe.age,
              event = _this$_property$ageNe.event,
              talent = _this$_property$ageNe.talent;

          var talentContent = this.doTalent(talent);
          var eventContent = this.doEvent(this.random(event));

          var isEnd = this._property.isEnd();

          var content = [].concat(talentContent, eventContent);

          this._achievement.achieve(this._achievement.Opportunity.TRAJECTORY, this._property);

          return {
            age: age,
            content: content,
            isEnd: isEnd
          };
        };

        _proto.talentReplace = function talentReplace(talents) {
          var result = this._talent.replace(talents);

          var contents = [];

          for (var id in result) {
            talents.push(result[id]);

            var source = this._talent.get(id);

            var target = this._talent.get(result[id]);

            contents.push({
              type: 'talentReplace',
              source: source,
              target: target
            });
          }

          return contents;
        };

        _proto.doTalent = function doTalent(talents) {
          var _this = this;

          if (talents) this._property.change(this._property.TYPES.TLT, talents);
          talents = this._property.get(this._property.TYPES.TLT).filter(function (talentId) {
            return _this.getTalentCurrentTriggerCount(talentId) < _this._talent.get(talentId).max_triggers;
          });
          var contents = [];

          for (var _iterator = _createForOfIteratorHelperLoose(talents), _step; !(_step = _iterator()).done;) {
            var talentId = _step.value;

            var result = this._talent["do"](talentId, this._property);

            if (!result) continue;
            this._triggerTalents[talentId] = this.getTalentCurrentTriggerCount(talentId) + 1;
            var effect = result.effect,
                name = result.name,
                description = result.description,
                grade = result.grade;
            contents.push({
              type: this._property.TYPES.TLT,
              name: name,
              grade: grade,
              description: description
            });
            if (!effect) continue;

            this._property.effect(effect);
          }

          return contents;
        };

        _proto.doEvent = function doEvent(eventId) {
          var _this$_event$do = this._event["do"](eventId, this._property),
              effect = _this$_event$do.effect,
              next = _this$_event$do.next,
              description = _this$_event$do.description,
              postEvent = _this$_event$do.postEvent,
              grade = _this$_event$do.grade,
              score = _this$_event$do.score;

          this._property.change(this._property.TYPES.EVT, eventId);

          this._property.effect({
            ESC: score
          });

          this._property.effect(effect);

          var content = {
            type: this._property.TYPES.EVT,
            description: description,
            postEvent: postEvent,
            grade: grade
          };
          if (next) return [content].concat(this.doEvent(next));
          return [content];
        };

        _proto.random = function random(events) {
          var _this2 = this;

          return weightRandom(events.filter(function (_ref) {
            var eventId = _ref[0];
            return _this2._event.check(eventId, _this2._property);
          }));
        };

        _proto.talentRandom = function talentRandom(num, protect) {
          if (num === void 0) {
            num = 10;
          }

          if (protect === void 0) {
            protect = false;
          }

          var times = this._property.get(this._property.TYPES.TMS);

          var achievement = this._property.get(this._property.TYPES.CACHV);

          return this._talent.talentRandom(num, protect, this.getLastExtendTalent(), {
            times: times,
            achievement: achievement
          });
        };

        _proto.talentExtend = function talentExtend(talentId) {
          this._property.set(this._property.TYPES.EXT, talentId);
        };

        _proto.getLastExtendTalent = function getLastExtendTalent() {
          return this._property.get(this._property.TYPES.EXT);
        };

        _proto.getSummary = function getSummary() {
          this._achievement.achieve(this._achievement.Opportunity.SUMMARY, this._property);

          return {
            AGE: this._property.get(this._property.TYPES.HAGE),
            CHR: this._property.get(this._property.TYPES.HCHR),
            INT: this._property.get(this._property.TYPES.HINT),
            STR: this._property.get(this._property.TYPES.HSTR),
            MNY: this._property.get(this._property.TYPES.HMNY),
            SPR: this._property.get(this._property.TYPES.HSPR),
            SUM: this._property.get(this._property.TYPES.SUM)
          };
        };

        _proto.getLastRecord = function getLastRecord() {
          return this._property.getLastRecord();
        };

        _proto.exclusive = function exclusive(talents, _exclusive) {
          return this._talent.exclusive(talents, _exclusive);
        };

        _proto.getAchievements = function getAchievements() {
          // const ticks = {};
          // this._property
          //     .get(this._property.TYPES.ACHV)
          //     .forEach(([id, tick]) => ticks[id] = tick);
          return this._achievement.list(this._property).sort(function (_ref2, _ref3) {
            var a = _ref2.isAchieved,
                ag = _ref2.grade,
                ah = _ref2.hide;
            var b = _ref3.isAchieved,
                bg = _ref3.grade,
                bh = _ref3.hide;
            if (a && b) return b - a;

            if (!a && !b) {
              if (ah && bh) return bg - ag;
              if (ah) return 1;
              if (bh) return -1;
              return bg - ag;
            }

            if (!a) return 1;
            if (!b) return -1;
          });
        };

        _proto.getTotal = function getTotal() {
          var TMS = this._property.get(this._property.TYPES.TMS);

          var CACHV = this._property.get(this._property.TYPES.CACHV);

          var CTLT = this._property.get(this._property.TYPES.CTLT);

          var CEVT = this._property.get(this._property.TYPES.CEVT);

          var totalTalent = this._talent.count();

          var totalEvent = this._event.count();

          return {
            times: TMS,
            achievement: CACHV,
            talentRate: CTLT / totalTalent,
            eventRate: CEVT / totalEvent
          };
        };

        _createClass(LifeManager, [{
          key: "times",
          get: function get() {
            var _this$_property;

            return ((_this$_property = this._property) === null || _this$_property === void 0 ? void 0 : _this$_property.get(this._property.TYPES.TMS)) || 0;
          },
          set: function set(v) {
            var _this$_property2;

            ((_this$_property2 = this._property) === null || _this$_property2 === void 0 ? void 0 : _this$_property2.set(this._property.TYPES.TMS, v)) || 0;

            this._achievement.achieve(this._achievement.Opportunity.END, this._property);
          }
        }]);

        return LifeManager;
      }();

      var lifeMgr = exports('lifeMgr', new LifeManager());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AchievementItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Component, GradeColor;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      GradeColor = module.GradeColor;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "28655SvBVlOs7BuLbbcdG1I", "AchievementItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AchievementItem = exports('AchievementItem', (_dec = ccclass('AchievementItem'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Sprite
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AchievementItem, _Component);

        function AchievementItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "BG", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "titleLbl", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "descLbl", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "flowerTag", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = AchievementItem.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.setData = function setData(data) {
          if (data.hide && !data.isAchieved) {
            this.titleLbl.string = "???";
            this.descLbl.string = "???";
          } else {
            this.titleLbl.string = data.name;
            this.descLbl.string = data.description;
          }

          this.BG.color = GradeColor[data.grade];

          if (data.isAchieved) {
            this.flowerTag.node.active = true;
          } else {
            this.flowerTag.node.active = false;
          }
        };

        return AchievementItem;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BG", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "descLbl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "flowerTag", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/achievement.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts', './util.ts', './condition.ts', './EventMessage.ts'], function (exports) {
  'use strict';

  var _classPrivateFieldSet, _classPrivateFieldGet, _createForOfIteratorHelperLoose, _defineProperty, cclegacy, Message, clone, checkCondition, eventMsg;

  return {
    setters: [function (module) {
      _classPrivateFieldSet = module.classPrivateFieldSet;
      _classPrivateFieldGet = module.classPrivateFieldGet;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      clone = module.clone;
    }, function (module) {
      checkCondition = module.checkCondition;
    }, function (module) {
      eventMsg = module.eventMsg;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2ebf1c3o/JMO46jyizTZPPt", "achievement", undefined);

      var _achievements = new WeakMap();

      var Achievement = exports('Achievement', /*#__PURE__*/function () {
        function Achievement() {
          _defineProperty(this, "Opportunity", {
            START: "START",
            // 分配完成点数，点击开始新人生后
            TRAJECTORY: "TRAJECTORY",
            // 每一年的人生经历中
            SUMMARY: "SUMMARY",
            // 人生结束，点击人生总结后
            END: "END" // 游戏完成，点击重开 重开次数在这之后才会+1

          });

          _achievements.set(this, {
            writable: true,
            value: void 0
          });
        } // 时机


        var _proto = Achievement.prototype;

        _proto.initial = function initial(_ref) {
          var achievements = _ref.achievements;

          _classPrivateFieldSet(this, _achievements, new Map());

          for (var key in achievements) {
            var achievement = achievements[key];
            _classPrivateFieldGet(this, _achievements)[achievement.id] = achievement;
          }
        };

        _proto.count = function count() {
          return Object.keys(_classPrivateFieldGet(this, _achievements)).length;
        };

        _proto.list = function list(property) {
          var _this = this;

          return Object.values(_classPrivateFieldGet(this, _achievements)).map(function (_ref2) {
            var id = _ref2.id,
                name = _ref2.name,
                opportunity = _ref2.opportunity,
                description = _ref2.description,
                hide = _ref2.hide,
                grade = _ref2.grade;
            return {
              id: id,
              name: name,
              opportunity: opportunity,
              description: description,
              hide: hide,
              grade: grade,
              isAchieved: _this.isAchieved(id, property)
            };
          });
        };

        _proto.get = function get(achievementId) {
          var achievement = _classPrivateFieldGet(this, _achievements)[achievementId];

          if (!achievement) throw new Error("[ERROR] No Achievement[" + achievementId + "]");
          return clone(achievement);
        };

        _proto.check = function check(achievementId, property) {
          var _this$get = this.get(achievementId),
              condition = _this$get.condition;

          return checkCondition(property, condition);
        };

        _proto.isAchieved = function isAchieved(achievementId, property) {
          for (var _iterator = _createForOfIteratorHelperLoose(property.get(property.TYPES.ACHV) || []), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
                achieved = _step$value[0];
            if (achieved == achievementId) return true;
          }

          return false;
        };

        _proto.achieve = function achieve(opportunity, property) {
          var _this2 = this;

          this.list(property).filter(function (_ref3) {
            var isAchieved = _ref3.isAchieved;
            return !isAchieved;
          }).filter(function (_ref4) {
            var o = _ref4.opportunity;
            return o == opportunity;
          }).filter(function (_ref5) {
            var id = _ref5.id;
            return _this2.check(id, property);
          }).forEach(function (_ref6) {
            var id = _ref6.id;
            property.achieve(property.TYPES.ACHV, id);
            eventMsg.emit(Message.Achievement, _this2.get(id));
          });
        };

        return Achievement;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TagItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, UIOpacity, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "30215PPV8RECbcWcSvYkUZZ", "TagItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TagItem = exports('TagItem', (_dec = ccclass('TagItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: UIOpacity
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TagItem, _Component);

        function TagItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "tagName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "uiOpacity", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TagItem.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.setFontSize = function setFontSize(size) {
          this.tagName.fontSize = size;
        };

        _proto.setOpacity = function setOpacity(op) {
          this.uiOpacity.opacity = op;
        };

        _proto.setTagName = function setTagName(name) {
          this.tagName.string = name;
        };

        _proto.refresh = function refresh(fallLength, radius) {
          var pos = this.node.position;
          var scale = fallLength / (fallLength - pos.z);
          var alpha = (pos.z + radius) / (radius * 2);
          this.tagName.fontSize = 15 * scale;
          this.uiOpacity.opacity = (alpha + 0.5) * 255;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return TagItem;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tagName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiOpacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TalentItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Sprite, Button, Component, GradeColor;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      GradeColor = module.GradeColor;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "3512a8fVOxJgIUDJCjLwZRo", "TalentItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TalentItem = exports('TalentItem', (_dec = ccclass('TalentItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Sprite
      }), _dec5 = property({
        type: Sprite
      }), _dec6 = property({
        type: Button
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TalentItem, _Component);

        function TalentItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "nameLbl", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "desLbl", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gradeNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "frame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ItemButton", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "index", 0);

          _defineProperty(_assertThisInitialized(_this), "onItemClick", null);

          return _this;
        }

        var _proto = TalentItem.prototype;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.setData = function setData(data) {
          this.nameLbl.string = data.name;
          this.desLbl.string = data.description;
          this.gradeNode.color = GradeColor[data.grade];
        };

        _proto.onButtonClick = function onButtonClick() {
          var _this$onItemClick;

          (_this$onItemClick = this.onItemClick) === null || _this$onItemClick === void 0 ? void 0 : _this$onItemClick.call(this, this.index);
        };

        _proto.setSelected = function setSelected(selected) {
          if (selected) {
            this.frame.enabled = true;
          } else {
            this.frame.enabled = false;
          }
        };

        return TalentItem;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "desLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gradeNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "frame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ItemButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/condition.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, cclegacy;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        checkCondition: checkCondition,
        extractMaxTriggers: extractMaxTriggers
      });

      cclegacy._RF.push({}, "4613dzQqvlAubehIlfH/Drl", "condition", undefined);

      function parseCondition(condition) {
        var conditions = [];
        var length = condition.length;
        var stack = [];
        stack.unshift(conditions);
        var cursor = 0;

        var catchString = function catchString(i) {
          var str = condition.substring(cursor, i).trim();
          cursor = i;
          if (str) stack[0].push(str);
        };

        for (var i = 0; i < length; i++) {
          switch (condition[i]) {
            case ' ':
              continue;

            case '(':
              catchString(i);
              cursor++;
              var sub = [];
              stack[0].push(sub);
              stack.unshift(sub);
              break;

            case ')':
              catchString(i);
              cursor++;
              stack.shift();
              break;

            case '|':
            case '&':
              catchString(i);
              catchString(i + 1);
              break;

            default:
              continue;
          }
        }

        catchString(length);
        return conditions;
      }

      function checkCondition(property, condition) {
        var conditions = parseCondition(condition);
        return checkParsedConditions(property, conditions);
      }

      function checkParsedConditions(property, conditions) {
        if (!Array.isArray(conditions)) return checkProp(property, conditions);
        if (conditions.length == 0) return true;
        if (conditions.length == 1) return checkParsedConditions(property, conditions[0]);
        var ret = checkParsedConditions(property, conditions[0]);

        for (var i = 1; i < conditions.length; i += 2) {
          switch (conditions[i]) {
            case '&':
              if (ret) ret = checkParsedConditions(property, conditions[i + 1]);
              break;

            case '|':
              if (ret) return true;
              ret = checkParsedConditions(property, conditions[i + 1]);
              break;

            default:
              return false;
          }
        }

        return ret;
      }

      function checkProp(property, condition) {
        var length = condition.length;
        var i = condition.search(/[><\!\?=]/);
        var prop = condition.substring(0, i);
        var symbol = condition.substring(i, i += condition[i + 1] == '=' ? 2 : 1);
        var d = condition.substring(i, length);
        var propData = property.get(prop);
        var conditionData = d[0] == '[' ? JSON.parse(d) : Number(d);

        switch (symbol) {
          case '>':
            return propData > conditionData;

          case '<':
            return propData < conditionData;

          case '>=':
            return propData >= conditionData;

          case '<=':
            return propData <= conditionData;

          case '=':
            if (Array.isArray(propData)) return propData.includes(conditionData);
            return propData == conditionData;

          case '!=':
            if (Array.isArray(propData)) return !propData.includes(conditionData);
            return propData == conditionData;

          case '?':
            if (Array.isArray(propData)) {
              for (var _iterator = _createForOfIteratorHelperLoose(propData), _step; !(_step = _iterator()).done;) {
                var p = _step.value;
                if (conditionData.includes(p)) return true;
              }

              return false;
            }

            return conditionData.includes(propData);

          case '!':
            if (Array.isArray(propData)) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(propData), _step2; !(_step2 = _iterator2()).done;) {
                var _p = _step2.value;
                if (conditionData.includes(_p)) return false;
              }

              return true;
            }

            return !conditionData.includes(propData);

          default:
            return false;
        }
      }

      function extractMaxTriggers(condition) {
        // Assuming only age related talents can be triggered multiple times.
        var RE_AGE_CONDITION = /AGE\?\[([0-9\,]+)\]/;
        var match_object = RE_AGE_CONDITION.exec(condition);

        if (match_object == null) {
          // Not age related, single trigger.
          return 1;
        }

        var age_list = match_object[1].split(",");
        return age_list.length;
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventMessage.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4e324KiHd1Mj78n/Hffy+JF", "EventMessage", undefined);

      var EventEmitter = exports('EventEmitter', /*#__PURE__*/function () {
        function EventEmitter() {
          _defineProperty(this, "_listenerMap", new Map());
        }

        var _proto = EventEmitter.prototype;

        _proto.emit = function emit(name) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var funcList = this._listenerMap.get(name);

          if (funcList) {
            funcList.forEach(function (func) {
              func.apply(void 0, args);
            });
          }
        };

        _proto.on = function on(name, func) {
          var funcList = this._listenerMap.get(name);

          if (!funcList) {
            funcList = [];

            this._listenerMap.set(name, funcList);
          }

          funcList.push(func);
        };

        _proto.off = function off(name, func) {
          var funcList = this._listenerMap.get(name);

          if (funcList) {
            var idx = funcList.indexOf(func);

            if (idx >= 0) {
              funcList.splice(idx, 1);
            }
          }
        };

        return EventEmitter;
      }());
      var eventMsg = exports('eventMsg', new EventEmitter());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LifeTrackPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIPanel.ts', './Defines.ts', './LifeTrackItem.ts', './EventMessage.ts', './Life.ts', './PropItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Color, ScrollView, Node, Prefab, Button, Label, instantiate, Vec3, Animation, UIPanel, Message, LifeTrackItem, eventMsg, lifeMgr, PropItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      ScrollView = module.ScrollView;
      Node = module.Node;
      Prefab = module.Prefab;
      Button = module.Button;
      Label = module.Label;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Animation = module.Animation;
    }, function (module) {
      UIPanel = module.UIPanel;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      LifeTrackItem = module.LifeTrackItem;
    }, function (module) {
      eventMsg = module.eventMsg;
    }, function (module) {
      lifeMgr = module.lifeMgr;
    }, function (module) {
      PropItem = module.PropItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp;

      cclegacy._RF.push({}, "5aab2jXtf9OHJM7FC+9+iKf", "LifeTrackPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var showPropKeys = ['CHR', 'INT', 'STR', 'MNY', 'SPR'];
      var autoPlayColor = new Color(53, 194, 115);
      var COMBO_LEVEL = 1;
      var LifeTrackPanel = exports('LifeTrackPanel', (_dec = ccclass('LifeTrackPanel'), _dec2 = property(ScrollView), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Button
      }), _dec11 = property({
        type: Label
      }), _dec12 = property({
        type: Label
      }), _dec13 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UIPanel) {
        _inheritsLoose(LifeTrackPanel, _UIPanel);

        function LifeTrackPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UIPanel.call.apply(_UIPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lifeTrackGroup", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lifeTrackItemPrfb", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "propGroup", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "propItemPrfb", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "nextYearButtonNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "autoPlayButtonNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "restartButtonNode", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "changeSpeedButton", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scoreLabel", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lianJiLabel", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lianJiNode", _descriptor12, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_autoPlayButtonLbl", void 0);

          _defineProperty(_assertThisInitialized(_this), "_autoPlayButton", void 0);

          _defineProperty(_assertThisInitialized(_this), "_changeSpeedButtonLbl", void 0);

          _defineProperty(_assertThisInitialized(_this), "_isEnd", false);

          _defineProperty(_assertThisInitialized(_this), "_isAutoPlay", false);

          _defineProperty(_assertThisInitialized(_this), "_triggerTime", 1000);

          _defineProperty(_assertThisInitialized(_this), "_timeScale", 1);

          _defineProperty(_assertThisInitialized(_this), "_timeScaleArray", [1, 2, 4, 8, 20]);

          _defineProperty(_assertThisInitialized(_this), "_curTimeScaleIndex", 0);

          _defineProperty(_assertThisInitialized(_this), "_spacing", 5);

          _defineProperty(_assertThisInitialized(_this), "_curMaxHeight", 0);

          _defineProperty(_assertThisInitialized(_this), "_propItemsMap", new Map());

          _defineProperty(_assertThisInitialized(_this), "_combo", 0);

          return _this;
        }

        var _proto = LifeTrackPanel.prototype;

        _proto.onLoad = function onLoad() {// this._contentUITrans = this.lifeTrackGroup._uiProps.uiTransformComp;
        };

        _proto.start = function start() {};

        _proto.initPanel = function initPanel() {
          this._contentUITrans = this.lifeTrackGroup._uiProps.uiTransformComp;
          this._autoPlayButtonLbl = this.autoPlayButtonNode.getComponentInChildren(Label);
          this._autoPlayButton = this.autoPlayButtonNode.getComponent(Button);
          this._changeSpeedButtonLbl = this.changeSpeedButton.getComponentInChildren(Label);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.createLifeTrack = function createLifeTrack(age, description, finalGrade) {
          var itemNode = instantiate(this.lifeTrackItemPrfb);
          itemNode.setParent(this.lifeTrackGroup);
          var item = itemNode.getComponent(LifeTrackItem);
          item.setData(age, description, finalGrade);
          var itemHeight = item.getHeight();
          itemNode.setPosition(new Vec3(0, this._curMaxHeight, 0));
          item.setLineLength(itemHeight + this._spacing);
          this._curMaxHeight -= itemHeight + this._spacing;
          this._contentUITrans.height = -this._curMaxHeight;
        };

        _proto.createPropItem = function createPropItem(propName, value) {
          var itemNode = instantiate(this.propItemPrfb);
          itemNode.setParent(this.propGroup);
          var item = itemNode.getComponent(PropItem);
          item.setData(propName, value);
          return item;
        };

        _proto.onReplayButtonClicked = function onReplayButtonClicked() {
          eventMsg.emit(Message.LifeTrackEnd);
        };

        _proto.initProp = function initProp() {
          var _this2 = this;

          this.propGroup.removeAllChildren();

          this._propItemsMap.clear();

          var property = lifeMgr.getLastRecord();
          showPropKeys.forEach(function (key) {
            _this2._propItemsMap.set(key, _this2.createPropItem(key, property[key]));
          });
        };

        _proto.updatePropData = function updatePropData() {
          var _this3 = this;

          var property = lifeMgr.getLastRecord();
          showPropKeys.forEach(function (key) {
            var item = _this3._propItemsMap.get(key);

            item === null || item === void 0 ? void 0 : item.updateValue(property[key]);
          });
          this.scoreLabel.string = lifeMgr._property.get(lifeMgr._property.TYPES.ESC).toString();
        };

        _proto.playAnimation = function playAnimation() {
          var labelAni = this.scoreLabel.getComponent(Animation);
          labelAni.play("scorePop");
          var scoreAni = this.lianJiNode.getComponent(Animation);
          var scoreAniState = scoreAni.getState("lianJiPop");

          if (this._combo > 2) {
            this.lianJiLabel.string = "X".concat(this._combo.toString());
            scoreAni.play("lianJiPop");
          } // scoreAniState.setTime(0.0);

        };

        _proto.onShow = function onShow(selectedTalentList, propData) {
          this._isEnd = false;
          this._isAutoPlay = false;
          this._curMaxHeight = 0;
          this._combo = 0; // bug:start不执行，先放这里

          this.initPanel();
          this.nextYearButtonNode.active = true;
          this.autoPlayButtonNode.active = true;
          this.restartButtonNode.active = false;
          this.setAutoPlayButtonState(false);
          this.lifeTrackGroup.removeAllChildren();
          var initData = {};
          Object.assign(initData, propData);
          var selectedTalentIds = selectedTalentList.map(function (talentInfo) {
            return talentInfo.id;
          });
          initData.TLT = selectedTalentIds;
          var contents = lifeMgr.restart(initData);
          this.initProp();
          this.scoreLabel.string = lifeMgr._property.get(lifeMgr._property.TYPES.ESC).toString(); // this.triggerOneLifeTrack();
        };

        _proto.onNextYearButtonClicked = function onNextYearButtonClicked() {
          this.triggerOneLifeTrack();
        };

        _proto.onAutoPlayButtonClicked = function onAutoPlayButtonClicked() {
          if (this._isAutoPlay) {
            this._isAutoPlay = false;
          } else {
            this._isAutoPlay = true;
            this.triggerOneLifeTrack();
          }

          this.setAutoPlayButtonState(this._isAutoPlay);
        };

        _proto.setAutoPlayButtonState = function setAutoPlayButtonState(isPlaying) {
          if (isPlaying) {
            this._autoPlayButton.normalColor = autoPlayColor;
            this.changeSpeedButton.node.active = true;
            this._changeSpeedButtonLbl.string = "X" + this._timeScale;
          } else {
            this._autoPlayButton.normalColor = Color.WHITE;
            this.changeSpeedButton.node.active = false;
          }
        };

        _proto.triggerOneLifeTrack = function triggerOneLifeTrack() {
          var _this4 = this;

          if (!this._isEnd) {
            var track = lifeMgr.next();
            this.showOneTrackItem(track);
            this.updatePropData();
            this.playAnimation();
            this.scrollView.scrollToBottom(0.5);
            this._isEnd = track.isEnd;

            if (this._isEnd) {
              this.onLifeEnd();
            } else {
              if (this._isAutoPlay) {
                setTimeout(function () {
                  _this4.triggerOneLifeTrack();
                }, this.realTriggerTime);
              }
            }
          }
        };

        _proto.setCombo = function setCombo(combo) {
          if (combo > 10) {
            this._combo = 10;
          } else if (combo < 0) {
            this._combo = 0;
          } else {
            this._combo = combo;
          }
        };

        _proto.showOneTrackItem = function showOneTrackItem(track) {
          var _this5 = this;

          var finalGrade;
          var contentText = track.content.map(function (_ref) {
            var type = _ref.type,
                description = _ref.description,
                grade = _ref.grade,
                name = _ref.name,
                postEvent = _ref.postEvent;

            switch (type) {
              case 'TLT':
                return "\u5929\u8D4B\u3010" + name + "\u3011\u53D1\u52A8\uFF1A" + description;

              case 'EVT':
                finalGrade = grade;

                if (grade >= COMBO_LEVEL) {
                  _this5.setCombo(_this5._combo + 1);
                } else {
                  _this5.setCombo(_this5._combo - 1);
                }

                return description + (postEvent ? "\n" + postEvent : '');
            }
          }).join('\n');
          this.createLifeTrack(track.age + "\u5C81 ", contentText, finalGrade);
        };

        _proto.onLifeEnd = function onLifeEnd() {
          this.nextYearButtonNode.active = false;
          this.autoPlayButtonNode.active = false;
          this.restartButtonNode.active = true;
        };

        _proto.onChangeSpeedButtonClicked = function onChangeSpeedButtonClicked() {
          this._curTimeScaleIndex = ++this._curTimeScaleIndex % this._timeScaleArray.length;
          this._timeScale = this._timeScaleArray[this._curTimeScaleIndex];
          this._changeSpeedButtonLbl.string = "X" + this._timeScale;
        };

        _createClass(LifeTrackPanel, [{
          key: "realTriggerTime",
          get: function get() {
            return this._triggerTime / this._timeScale;
          }
        }]);

        return LifeTrackPanel;
      }(UIPanel), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lifeTrackGroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lifeTrackItemPrfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "propGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "propItemPrfb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nextYearButtonNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "autoPlayButtonNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "restartButtonNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "changeSpeedButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lianJiLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lianJiNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Talent.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts', './util.ts', './condition.ts'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, _defineProperty, cclegacy, clone, weightRandom, extractMaxTriggers, checkCondition;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      clone = module.clone;
      weightRandom = module.weightRandom;
    }, function (module) {
      extractMaxTriggers = module.extractMaxTriggers;
      checkCondition = module.checkCondition;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6f0e92mPVdNDZxh7eJwr3t+", "Talent", undefined);

      var TalentManager = exports('TalentManager', /*#__PURE__*/function () {
        function TalentManager() {
          _defineProperty(this, "_talents", void 0);

          _defineProperty(this, "_talentGradeStruct", void 0);
        }

        TalentManager.SortTalent = function SortTalent(_ref, _ref2) {
          var aId = _ref.id,
              aG = _ref.grade;
          var bId = _ref2.id,
              bG = _ref2.grade;
          var gradeDiff = bG - aG;
          if (gradeDiff != 0) return gradeDiff;
          return aId - bId;
        };

        var _proto = TalentManager.prototype;

        _proto.initial = function initial(_ref3) {
          var talents = _ref3.talents;
          this._talents = new Map();

          for (var key in talents) {
            var id = talents[key].id;
            var talent = talents[key];
            this._talents[id] = talent;
            talent.id = Number(id);
            talent.grade = Number(talent.grade);
            talent.max_triggers = extractMaxTriggers(talent.condition);

            if (talent.replacement) {
              for (var _key in talent.replacement) {
                var obj = {};

                for (var _iterator = _createForOfIteratorHelperLoose(talent.replacement[_key]), _step; !(_step = _iterator()).done;) {
                  var value = _step.value;
                  value = ("" + value).split('*');
                  obj[value[0] || 0] = Number(value[1]) || 1;
                }

                talent.replacement[_key] = obj;
              }
            }
          }

          var talentGradeStruct = {};

          for (var i = 0; i < 7; i++) {
            talentGradeStruct[i] = [];
          }

          for (var talentId in this._talents) {
            var _this$_talents$talent = this._talents[talentId],
                _id = _this$_talents$talent.id,
                grade = _this$_talents$talent.grade,
                name = _this$_talents$talent.name,
                description = _this$_talents$talent.description;
            talentGradeStruct[grade].push({
              grade: grade,
              name: name,
              description: description,
              id: _id
            });
          }

          this._talentGradeStruct = talentGradeStruct;
        };

        _proto.count = function count() {
          return Object.keys(this._talents).length;
        };

        _proto.check = function check(talentId, property) {
          var _this$get = this.get(talentId),
              condition = _this$get.condition;

          return checkCondition(property, condition);
        };

        _proto.get = function get(talentId) {
          var talent = this._talents[talentId];
          if (!talent) throw new Error("[ERROR] No Talent[" + talentId + "]");
          return clone(talent);
        };

        _proto.information = function information(talentId) {
          var _this$get2 = this.get(talentId),
              grade = _this$get2.grade,
              name = _this$get2.name,
              description = _this$get2.description;

          return {
            grade: grade,
            name: name,
            description: description
          };
        };

        _proto.exclusive = function exclusive(talents, exclusiveId) {
          var _this$get3 = this.get(exclusiveId),
              exclusive = _this$get3.exclusive;

          if (!exclusive) return null;

          for (var _iterator2 = _createForOfIteratorHelperLoose(talents), _step2; !(_step2 = _iterator2()).done;) {
            var talent = _step2.value;

            for (var _iterator3 = _createForOfIteratorHelperLoose(exclusive), _step3; !(_step3 = _iterator3()).done;) {
              var e = _step3.value;
              if (talent == e) return talent;
            }
          }

          return null;
        };

        _proto.talentRandom = function talentRandom(num, protect, includeId, _temp) {
          var _ref4 = _temp === void 0 ? {} : _temp,
              _ref4$times = _ref4.times,
              _ref4$achievement = _ref4.achievement; //基本概率


          var rate = {
            1: 650,
            2: 350,
            3: 150,
            4: 50
          }; //加强概率
          // for(const grade in timesRate)
          //     rateAddition[grade] += timesRate[grade] ;
          // for(const grade in achievementRate)
          //     rateAddition[grade] += achievementRate[grade] ;
          // for(const grade in rateAddition)
          //     rate[grade] *= (1+rateAddition[grade]);

          var randomGrade = function randomGrade() {
            var randomNumber = Math.floor(Math.random() * 1000);
            if ((randomNumber -= rate[4]) <= 0) return 4;
            if ((randomNumber -= rate[3]) <= 0) return 3;
            if ((randomNumber -= rate[2]) <= 0) return 2;
            if ((randomNumber -= rate[1]) <= 0) return 1;
            return 0;
          };

          var tLen = 0; // 1000, 100, 10, 1

          if (includeId) {
            tLen = num - 1;
          } else {
            tLen = num;
          }

          var talentArr = new Array(tLen);
          var startId;

          if (protect) {
            var randomNumber = Math.floor(Math.random() * 100);
            var quality;

            if (randomNumber <= 33) {
              quality = 5;
            } else {
              quality = 4;
            }

            talentArr[0] = quality;
            startId = 1;
          } else {
            startId = 0;
          }

          for (var i = startId; i < talentArr.length; i++) {
            talentArr[i] = randomGrade();
          }

          var talentGradeStruct = clone(this._talentGradeStruct);
          includeId = 1011;

          if (includeId) {
            for (var key in talentGradeStruct) {
              var idList = talentGradeStruct[key];

              for (var j = 0; j < idList.length; j++) {
                var hh = idList[j].id;

                if (includeId == idList[j].id) {
                  idList.splice(j, 1);
                  break;
                }
              }
            }
          } // talentArr.map(
          //     (grade, i)=>{
          //         while(talentGradeStruct[grade].length == 0) grade--;
          //         const length = talentGradeStruct[grade].length;
          //         const random = Math.floor(Math.random()*length) % length;
          //         var data = talentGradeStruct[grade].splice(random,1);
          //         return 10;
          //         // return data[0];
          //     }
          // );


          for (var _i = 0; _i < talentArr.length; _i++) {
            var grade = talentArr[_i];

            while (talentGradeStruct[grade].length == 0) {
              grade--;
            }

            var length = talentGradeStruct[grade].length;
            var random = Math.floor(Math.random() * length) % length;
            var data = talentGradeStruct[grade].splice(random, 1);
            talentArr[_i] = data[0];
          }

          if (includeId) {
            talentArr.splice(0, 0, this._talents[includeId]);
          }

          return talentArr;
        };

        _proto.allocationAddition = function allocationAddition(talents) {
          if (Array.isArray(talents)) {
            var addition = 0;

            for (var _iterator4 = _createForOfIteratorHelperLoose(talents), _step4; !(_step4 = _iterator4()).done;) {
              var talent = _step4.value;
              addition += this.allocationAddition(talent);
            }

            return addition;
          }

          return Number(this.get(talents).status) || 0;
        };

        _proto["do"] = function _do(talentId, property) {
          var _this$get4 = this.get(talentId),
              effect = _this$get4.effect,
              condition = _this$get4.condition,
              grade = _this$get4.grade,
              name = _this$get4.name,
              description = _this$get4.description;

          if (condition && !checkCondition(property, condition)) return null;
          return {
            effect: effect,
            grade: grade,
            name: name,
            description: description
          };
        };

        _proto.replace = function replace(talents) {
          var _this = this;

          var getReplaceList = function getReplaceList(talent, talents) {
            var _this$get5 = _this.get(talent),
                replacement = _this$get5.replacement;

            if (!replacement) return null;
            var list = [];

            if (replacement.grade) {
              _this.forEach(function (_ref5) {
                var id = _ref5.id,
                    grade = _ref5.grade;
                if (!replacement.grade[grade]) return;
                if (_this.exclusive(talents, id)) return;
                list.push([id, replacement.grade[grade]]);
              });
            }

            if (replacement.talent) {
              for (var talentId in replacement.talent) {
                var id = Number(talentId);
                if (_this.exclusive(talents, id)) continue;
                list.push([id, replacement.talent[id]]);
              }
            }

            return list;
          };

          var replace = function replace(talent, talents) {
            var replaceList = getReplaceList(talent, talents);
            if (!replaceList) return talent;
            var rand = weightRandom(replaceList);
            return replace(rand, talents.concat(rand));
          };

          var newTalents = clone(talents);
          var result = {};

          for (var _iterator5 = _createForOfIteratorHelperLoose(talents), _step5; !(_step5 = _iterator5()).done;) {
            var talent = _step5.value;
            var replaceId = replace(talent, newTalents);

            if (replaceId != talent) {
              result[talent] = replaceId;
              newTalents.push(replaceId);
            }
          }

          return result;
        };

        _proto.forEach = function forEach(callback) {
          if (typeof callback != 'function') return;

          for (var id in this._talents) {
            callback(clone(this._talents[id]), id);
          }
        };

        return TalentManager;
      }());
      var talentMgr = exports('talentMgr', new TalentManager());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigManager.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, resources;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
    }],
    execute: function () {
      cclegacy._RF.push({}, "75637qSsT9DBJznyRJRalfo", "ConfigManager", undefined);

      var ConfigManager = exports('default', /*#__PURE__*/function () {
        function ConfigManager() {}

        ConfigManager.readJson = function readJson(path) {
          return new Promise(function (resolve, reject) {
            resources.load("Json/" + path, function (err, jsonObj) {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                resolve(jsonObj.json);
              }
            });
          });
        };

        return ConfigManager;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StatisticsItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "79c45lYN21I3Jzf9KxHQghc", "StatisticsItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var StatisticsItem = exports('StatisticsItem', (_dec = ccclass('StatisticsItem'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StatisticsItem, _Component);

        function StatisticsItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "BG", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "titleLbl", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "descLbl", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = StatisticsItem.prototype;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.setData = function setData(title, desc, grade) {
          this.titleLbl.string = title;
          this.descLbl.string = desc; // 不在修改统计格子的color
          // this.BG.color = GradeColor[grade];
        };

        return StatisticsItem;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BG", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "descLbl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AchievementPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIPanel.ts', './Defines.ts', './Life.ts', './AchievementItem.ts', './StatisticsItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Prefab, Button, instantiate, Sprite, UIPanel, GradeColor, getGrade, getRate, lifeMgr, AchievementItem, StatisticsItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Button = module.Button;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
    }, function (module) {
      UIPanel = module.UIPanel;
    }, function (module) {
      GradeColor = module.GradeColor;
      getGrade = module.getGrade;
      getRate = module.getRate;
    }, function (module) {
      lifeMgr = module.lifeMgr;
    }, function (module) {
      AchievementItem = module.AchievementItem;
    }, function (module) {
      StatisticsItem = module.StatisticsItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _temp;

      cclegacy._RF.push({}, "7baefjqdLRKUrgY5285bpeS", "AchievementPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AchievementPanel = exports('AchievementPanel', (_dec = ccclass('AchievementPanel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Button
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: Button
      }), _dec9 = property({
        type: Button
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UIPanel) {
        _inheritsLoose(AchievementPanel, _UIPanel);

        function AchievementPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UIPanel.call.apply(_UIPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "achievementItemsGroup", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "achievementItemPrfb", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "statisticsItemsGroup", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "statisticsItemPrfb", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tabButton0", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tabButton1", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tabButton2", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tabButton3", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chooseSprite0", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chooseSprite1", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chooseSprite2", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chooseSprite3", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chooseFrame0", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chooseFrame1", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chooseFrame2", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "chooseFrame3", _descriptor16, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_tabButtonList", void 0);

          _defineProperty(_assertThisInitialized(_this), "_tabButtonFrameList", void 0);

          _defineProperty(_assertThisInitialized(_this), "_tabButtonSpriteList", void 0);

          _defineProperty(_assertThisInitialized(_this), "_itemHeight", 100);

          _defineProperty(_assertThisInitialized(_this), "_spacingY", 0);

          _defineProperty(_assertThisInitialized(_this), "_achievementList", void 0);

          return _this;
        }

        var _proto = AchievementPanel.prototype;

        _proto.start = function start() {
          // [3]
          this._contentUITrans = this.achievementItemsGroup._uiProps.uiTransformComp;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.createAchievementItem = function createAchievementItem(data) {
          var itemNode = instantiate(this.achievementItemPrfb);
          itemNode.setParent(this.achievementItemsGroup);
          var item = itemNode.getComponent(AchievementItem);
          item.setData(data);
          var itemNum = this.achievementItemsGroup.children.length;
          this._contentUITrans.height = itemNum * this._itemHeight + this._spacingY * (itemNum - 1);
        };

        _proto.createStatisticsItem = function createStatisticsItem(title, desc, grade) {
          var itemNode = instantiate(this.statisticsItemPrfb);
          itemNode.setParent(this.statisticsItemsGroup);
          var item = itemNode.getComponent(StatisticsItem);
          item.setData(title, desc, grade);
        };

        _proto.initAchievementData = function initAchievementData() {
          this._achievementList = lifeMgr.getAchievements();
        };

        _proto.onTabButtonClicked = function onTabButtonClicked(touchEvent, data) {
          var _this2 = this;

          data = Number(data);

          for (var i = 0; i < this._tabButtonList.length; i++) {
            var element = this._tabButtonList[i];
            var chooseSprite = this._tabButtonSpriteList[i];
            var chooseFrame = this._tabButtonFrameList[i];

            if (data == i) {
              element.interactable = false;
              chooseSprite.active = true;
              chooseFrame.active = true;
              continue;
            }

            element.interactable = true;
            chooseSprite.active = false;
            chooseFrame.active = false;
          }

          this.achievementItemsGroup.removeAllChildren();

          this._achievementList.filter(function (_ref) {
            var grade = _ref.grade;
            return grade == data;
          }).forEach(function (_ref2) {
            var name = _ref2.name,
                description = _ref2.description,
                hide = _ref2.hide,
                grade = _ref2.grade,
                isAchieved = _ref2.isAchieved;

            _this2.createAchievementItem({
              name: name,
              description: description,
              hide: hide,
              grade: grade,
              isAchieved: isAchieved
            });
          });
        };

        _proto.onShow = function onShow() {
          this._tabButtonList = [this.tabButton0, this.tabButton1, this.tabButton2, this.tabButton3];
          this._tabButtonFrameList = [this.chooseSprite0, this.chooseSprite1, this.chooseSprite2, this.chooseSprite3];
          this._tabButtonSpriteList = [this.chooseFrame0, this.chooseFrame1, this.chooseFrame2, this.chooseFrame3];

          for (var i = 0; i < this._tabButtonList.length; i++) {
            var element = this._tabButtonList[i];
            var tSprite = element.getComponent(Sprite);
            tSprite.color = GradeColor[i + 3];
          }

          this._contentUITrans = this.achievementItemsGroup._uiProps.uiTransformComp;
          this.generateStatisticsData();
          this.initAchievementData();
          this.onTabButtonClicked(null, 3);
        };

        _proto.generateStatisticsData = function generateStatisticsData() {
          this.statisticsItemsGroup.removeAllChildren();

          var _lifeMgr$getTotal = lifeMgr.getTotal(),
              times = _lifeMgr$getTotal.times,
              achievement = _lifeMgr$getTotal.achievement,
              talentRate = _lifeMgr$getTotal.talentRate,
              eventRate = _lifeMgr$getTotal.eventRate;

          this.createStatisticsItem("\u5DF2\u91CD\u5F00" + times + "\u6B21", "" + this.formatRate('times', times), getGrade('times', times));
          this.createStatisticsItem("\u6210\u5C31\u8FBE\u6210" + achievement + "\u4E2A", "" + this.formatRate('achievement', achievement), getGrade('achievement', achievement));
          this.createStatisticsItem("\u4E8B\u4EF6\u6536\u96C6\u7387", Math.floor(eventRate * 100) + "%", getGrade('eventRate', eventRate));
          this.createStatisticsItem("\u5929\u8D4B\u6536\u96C6\u7387", Math.floor(talentRate * 100) + "%", getGrade('talentRate', talentRate));
        };

        _proto.formatRate = function formatRate(type, value) {
          var rate = getRate(type, value);
          var color = Object.keys(rate)[0];

          switch (parseInt(color)) {
            case 0:
              color = '白色';
              break;

            case 1:
              color = '蓝色';
              break;

            case 2:
              color = '紫色';
              break;

            case 3:
              color = '橙色';
              break;
          }

          var r = Object.values(rate)[0]; // switch(parseInt(r)) {
          //     case 1: r = '不变'; break;
          //     case 2: r = '翻倍'; break;
          //     case 3: r = '三倍'; break;
          //     case 4: r = '四倍'; break;
          //     case 5: r = '五倍'; break;
          //     case 6: r = '六倍'; break;
          //     default: break;
          // }

          if (r == 0) {
            return "\u62BD\u5230" + color + "\u6982\u7387\u65E0\u53D8\u5316";
          }

          return "\u62BD\u5230" + color + "\u6982\u7387\u63D0\u5347" + r * 100 + "%";
        };

        return AchievementPanel;
      }(UIPanel), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementItemsGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "achievementItemPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "statisticsItemsGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "statisticsItemPrfb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tabButton0", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tabButton1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tabButton2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tabButton3", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "chooseSprite0", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "chooseSprite1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "chooseSprite2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "chooseSprite3", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "chooseFrame0", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "chooseFrame1", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "chooseFrame2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "chooseFrame3", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Defines.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, Color;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
    }],
    execute: function () {
      exports({
        CalStage: CalStage,
        ConfigProp: void 0,
        getGrade: getGrade,
        getRate: getRate
      });

      cclegacy._RF.push({}, "85642Y205BHnpSvNRHQB1ax", "Defines", undefined);

      var Message = exports('Message', {
        TalentSelectEnd: 'TalentSelectEnd',
        DistributePropEnd: 'DistributePropEnd',
        LifeTrackEnd: 'LifeTrackEnd',
        Replay: 'Replay',
        StartGame: 'StartGame',
        Achievement: 'Achievement',
        StartMenu: 'StartMenu'
      });
      var ConfigProp;

      (function (ConfigProp) {
        ConfigProp[ConfigProp["CHR"] = 0] = "CHR";
        ConfigProp[ConfigProp["INT"] = 1] = "INT";
        ConfigProp[ConfigProp["STR"] = 2] = "STR";
        ConfigProp[ConfigProp["MNY"] = 3] = "MNY";
        ConfigProp[ConfigProp["SPR"] = 4] = "SPR";
      })(ConfigProp || (ConfigProp = exports('ConfigProp', {})));

      var PropColorMap = exports('PropColorMap', {
        CHR: new Color().fromHEX('#a0a9ed'),
        INT: new Color().fromHEX('#deb3ba'),
        STR: new Color().fromHEX('#cea6e5'),
        MNY: new Color().fromHEX('#9fddca'),
        SPR: new Color().fromHEX('#e9d8aa')
      });
      var PropNameMap = exports('PropNameMap', {
        CHR: '颜值',
        INT: '智力',
        STR: '体质',
        MNY: '家境',
        SPR: '快乐'
      });
      var GradeColor = exports('GradeColor', [new Color().fromHEX('#ffffff'), new Color().fromHEX('#179425'), new Color().fromHEX('#2588d4'), new Color().fromHEX('#834eda'), new Color().fromHEX('#f77323'), new Color().fromHEX('#be2525'), new Color().fromHEX('#ffc600')]);

      function CalStage(list, value) {
        for (var i = 0; i < list.length; i++) {
          var element = list[i];

          if (value < element.value) {
            return i;
          }
        }

        return list.length - 1;
      }

      function getRate(type, value) {
        switch (type) {
          case 'times':
            if (value >= 100) return {
              2: 2.5
            };
            if (value >= 70) return {
              2: 2
            };
            if (value >= 50) return {
              2: 1.5
            };
            if (value >= 30) return {
              2: 1
            };
            if (value >= 10) return {
              2: 0.5
            };
            return {
              2: 0
            };

          case 'achievement':
            if (value >= 100) return {
              3: 2.5
            };
            if (value >= 70) return {
              3: 2
            };
            if (value >= 50) return {
              3: 1.5
            };
            if (value >= 30) return {
              3: 1
            };
            if (value >= 10) return {
              3: 0.5
            };
            return {
              3: 0
            };

          default:
            return {};
        }
      }

      function getGrade(type, value) {
        switch (type) {
          case 'times':
          case 'achievement':
            if (value >= 100) return 3;
            if (value >= 50) return 2;
            if (value >= 10) return 1;
            return 0;

          case 'talentRate':
            if (value >= 0.9) return 3;
            if (value >= 0.6) return 2;
            if (value >= 0.3) return 1;
            return 0;

          case 'eventRate':
            if (value >= 0.6) return 3;
            if (value >= 0.4) return 2;
            if (value >= 0.2) return 1;
            return 0;

          default:
            return 0;
        }
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/summary.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('summary', summary);

      cclegacy._RF.push({}, "8ea86yHpORGZ7iSw1xGvH8J", "summary", undefined);

      var data = {
        "CHR": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 9,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 11,
          "judge": "逆天",
          "grade": 3
        }],
        "MNY": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 9,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 11,
          "judge": "逆天",
          "grade": 3
        }],
        "SPR": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不幸",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "幸福",
          "grade": 1
        }, {
          "min": 9,
          "judge": "极乐",
          "grade": 2
        }, {
          "min": 11,
          "judge": "天命",
          "grade": 3
        }],
        "INT": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 9,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 11,
          "judge": "逆天",
          "grade": 3
        }, {
          "min": 21,
          "judge": "识海",
          "grade": 3
        }, {
          "min": 131,
          "judge": "元神",
          "grade": 3
        }, {
          "min": 501,
          "judge": "仙魂",
          "grade": 3
        }],
        "STR": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 9,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 11,
          "judge": "逆天",
          "grade": 3
        }, {
          "min": 21,
          "judge": "凝气",
          "grade": 3
        }, {
          "min": 101,
          "judge": "筑基",
          "grade": 3
        }, {
          "min": 401,
          "judge": "金丹",
          "grade": 3
        }, {
          "min": 1001,
          "judge": "元婴",
          "grade": 3
        }, {
          "min": 2001,
          "judge": "仙体",
          "grade": 3
        }],
        "AGE": [{
          "judge": "胎死腹中",
          "grade": 0
        }, {
          "min": 1,
          "judge": "早夭",
          "grade": 0
        }, {
          "min": 10,
          "judge": "少年",
          "grade": 0
        }, {
          "min": 18,
          "judge": "盛年",
          "grade": 0
        }, {
          "min": 40,
          "judge": "中年",
          "grade": 0
        }, {
          "min": 60,
          "judge": "花甲",
          "grade": 1
        }, {
          "min": 70,
          "judge": "古稀",
          "grade": 1
        }, {
          "min": 80,
          "judge": "杖朝",
          "grade": 2
        }, {
          "min": 90,
          "judge": "南山",
          "grade": 2
        }, {
          "min": 95,
          "judge": "不老",
          "grade": 3
        }, {
          "min": 100,
          "judge": "修仙",
          "grade": 3
        }, {
          "min": 500,
          "judge": "仙寿",
          "grade": 3
        }],
        "SUM": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 41,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 50,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 60,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 80,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 100,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 110,
          "judge": "逆天",
          "grade": 3
        }, {
          "min": 120,
          "judge": "传说",
          "grade": 3
        }]
      };

      function summary(type, value) {
        var length = data[type].length;

        while (length--) {
          var _data$type$length = data[type][length],
              min = _data$type$length.min,
              judge = _data$type$length.judge,
              grade = _data$type$length.grade;
          if (min == void 0 || value >= min) return {
            judge: judge,
            grade: grade
          };
        }
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PropItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, resources, SpriteFrame, Component, PropNameMap, PropColorMap;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      PropNameMap = module.PropNameMap;
      PropColorMap = module.PropColorMap;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "928255UO/ZP+ZHuVTFkrvgo", "PropItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PropItem = exports('PropItem', (_dec = ccclass('PropItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Sprite
      }), _dec5 = property({
        type: Sprite
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PropItem, _Component);

        function PropItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "nameLbl", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "valueLbl", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "icon", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "propBg", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PropItem.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.setData = function setData(propName, value) {
          var _this2 = this;

          this.nameLbl.string = PropNameMap[propName];
          this.propBg.color = PropColorMap[propName];
          var path = 'Images/game/decoration/icon_';
          resources.load(path + propName, SpriteFrame, function (err, tSpriteFrame) {
            _this2.icon.spriteFrame = tSpriteFrame;
          });
          this.updateValue(value);
        };

        _proto.updateValue = function updateValue(value) {
          this.valueLbl.string = value.toString();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return PropItem;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "valueLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "propBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DistributePropItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "97386ft0aBMH5dxsVX1kPDt", "DistributePropItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DistributePropItem = exports('DistributePropItem', (_dec = ccclass('DistributePropItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DistributePropItem, _Component);

        function DistributePropItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "titleLbl", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "numLbl", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "onAddButtonClick", void 0);

          _defineProperty(_assertThisInitialized(_this), "onReduceButtonClick", void 0);

          _defineProperty(_assertThisInitialized(_this), "key", void 0);

          _defineProperty(_assertThisInitialized(_this), "_point", 0);

          return _this;
        }

        var _proto = DistributePropItem.prototype;

        _proto.setTitle = function setTitle(title) {
          this.titleLbl.string = title;
        };

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.onAddButtonClicked = function onAddButtonClicked() {
          var _this$onAddButtonClic;

          (_this$onAddButtonClic = this.onAddButtonClick) === null || _this$onAddButtonClic === void 0 ? void 0 : _this$onAddButtonClic.call(this, this);
        };

        _proto.onReduceButtonClicked = function onReduceButtonClicked() {
          var _this$onReduceButtonC;

          (_this$onReduceButtonC = this.onReduceButtonClick) === null || _this$onReduceButtonC === void 0 ? void 0 : _this$onReduceButtonC.call(this, this);
        };

        _createClass(DistributePropItem, [{
          key: "point",
          get: function get() {
            return this._point;
          },
          set: function set(value) {
            this._point = value;
            this.numLbl.string = this._point.toString();
          }
        }]);

        return DistributePropItem;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AchievementHint.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Sprite, Animation, Component, GradeColor;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      GradeColor = module.GradeColor;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "a7684CddlxIA6F0uCsqK1Kh", "AchievementHint", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AchievementHint = exports('AchievementHint', (_dec = ccclass('AchievementHint'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AchievementHint, _Component);

        function AchievementHint() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "contentLbl", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_isShowing", false);

          _defineProperty(_assertThisInitialized(_this), "_timer", null);

          return _this;
        }

        var _proto = AchievementHint.prototype;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.show = function show(achievementData, time) {
          this.contentLbl.string = achievementData.name;
          var bg = this.getComponent(Sprite);
          bg.color = GradeColor[achievementData.grade];
          var scoreAni = this.getComponent(Animation);
          var scoreAniState = scoreAni.getState("lianJiPop");
          scoreAni.play("lianJiPop");
        };

        return AchievementHint;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/event.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './util.ts', './condition.ts'], function (exports) {
  'use strict';

  var _classPrivateFieldSet, _classPrivateFieldGet, _createForOfIteratorHelperLoose, cclegacy, clone, checkCondition;

  return {
    setters: [function (module) {
      _classPrivateFieldSet = module.classPrivateFieldSet;
      _classPrivateFieldGet = module.classPrivateFieldGet;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      clone = module.clone;
    }, function (module) {
      checkCondition = module.checkCondition;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b1ad8S5yrpNyLB2b+dSbwqq", "event", undefined);

      var _events = new WeakMap();

      var Event = exports('default', /*#__PURE__*/function () {
        function Event() {
          _events.set(this, {
            writable: true,
            value: void 0
          });
        }

        var _proto = Event.prototype;

        _proto.initial = function initial(_ref) {
          var events = _ref.events;

          _classPrivateFieldSet(this, _events, new Map());

          for (var key in events) {
            var id = events[key].id;
            var event = events[key];
            _classPrivateFieldGet(this, _events)[id] = event;
            if (!event.branch) continue;
            event.branch = event.branch.map(function (b) {
              b = b.split(':');
              b[1] = Number(b[1]);
              return b;
            });
          }
        };

        _proto.count = function count() {
          return Object.keys(_classPrivateFieldGet(this, _events)).length;
        };

        _proto.check = function check(eventId, property) {
          var _this$get = this.get(eventId),
              include = _this$get.include,
              exclude = _this$get.exclude,
              NoRandom = _this$get.NoRandom;

          if (NoRandom) return false;
          if (exclude && checkCondition(property, exclude)) return false;
          if (include) return checkCondition(property, include);
          return true;
        };

        _proto.get = function get(eventId) {
          var event = _classPrivateFieldGet(this, _events)[eventId];

          if (!event) throw new Error("[ERROR] No Event[" + eventId + "]");
          return clone(event);
        };

        _proto.information = function information(eventId) {
          var _this$get2 = this.get(eventId),
              description = _this$get2.event;

          return {
            description: description
          };
        };

        _proto["do"] = function _do(eventId, property) {
          var _this$get3 = this.get(eventId),
              effect = _this$get3.effect,
              branch = _this$get3.branch,
              description = _this$get3.event,
              postEvent = _this$get3.postEvent,
              grade = _this$get3.grade,
              score = _this$get3.score;

          if (!score) {
            score = 0;
          }

          if (!grade) {
            grade = 0;
          }

          if (branch) {
            for (var _iterator = _createForOfIteratorHelperLoose(branch), _step; !(_step = _iterator()).done;) {
              var _step$value = _step.value,
                  cond = _step$value[0],
                  next = _step$value[1];
              if (checkCondition(property, cond)) return {
                effect: effect,
                next: next,
                description: description,
                grade: grade,
                score: score
              };
            }
          }

          return {
            effect: effect,
            postEvent: postEvent,
            description: description,
            grade: grade,
            score: score
          };
        };

        return Event;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DistributePropPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIPanel.ts', './Defines.ts', './EventMessage.ts', './Life.ts', './TalentItem.ts', './DistributePropItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Prefab, Label, Button, instantiate, UITransform, Vec3, UIPanel, PropNameMap, Message, eventMsg, lifeMgr, TalentItem, DistributePropItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Label = module.Label;
      Button = module.Button;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
    }, function (module) {
      UIPanel = module.UIPanel;
    }, function (module) {
      PropNameMap = module.PropNameMap;
      Message = module.Message;
    }, function (module) {
      eventMsg = module.eventMsg;
    }, function (module) {
      lifeMgr = module.lifeMgr;
    }, function (module) {
      TalentItem = module.TalentItem;
    }, function (module) {
      DistributePropItem = module.DistributePropItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

      cclegacy._RF.push({}, "b4a3eoREDRPQZL9VkpDb8rf", "DistributePropPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var distributePropKeys = ['CHR', 'INT', 'STR', 'MNY'];
      var DistributePropPanel = exports('DistributePropPanel', (_dec = ccclass('DistributePropPanel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Button
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UIPanel) {
        _inheritsLoose(DistributePropPanel, _UIPanel);

        function DistributePropPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UIPanel.call.apply(_UIPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "talentItemGroup", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "talentItemPrfb", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "propGroup", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "distributePropItemPrfb", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "totalPointsLbl", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "AddPropButton", _descriptor6, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "talentItems", []);

          _defineProperty(_assertThisInitialized(_this), "selectedTalentIndices", []);

          _defineProperty(_assertThisInitialized(_this), "_talentList", void 0);

          _defineProperty(_assertThisInitialized(_this), "_limitSelectedTalentNum", 1);

          _defineProperty(_assertThisInitialized(_this), "_curMaxHeight", void 0);

          _defineProperty(_assertThisInitialized(_this), "_contentUITrans", void 0);

          _defineProperty(_assertThisInitialized(_this), "totalPoints", 20);

          _defineProperty(_assertThisInitialized(_this), "distributePropItemsMap", new Map());

          return _this;
        }

        var _proto = DistributePropPanel.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.init = function init(selectedTalentList) {
          var _this2 = this;

          this._talentList = selectedTalentList;
          this.talentItemGroup.removeAllChildren();
          this.selectedTalentIndices = [];
          this.talentItems = [];
          this.AddPropButton.interactable = true;
          this.propGroup.removeAllChildren();
          this.distributePropItemsMap.clear();
          distributePropKeys.forEach(function (key) {
            _this2.distributePropItemsMap.set(key, _this2.createPropItem(key, PropNameMap[key]));
          }); // calculate total points

          this.totalPoints += lifeMgr.getTalentAllocationAddition(selectedTalentList.map(function (_ref) {
            var id = _ref.id;
            return id;
          }));
          this._contentUITrans = this.talentItemGroup._uiProps.uiTransformComp;
          this._curMaxHeight = 0;

          this._talentList.forEach(function (talentInfo, index) {
            var itemNode = instantiate(_this2.talentItemPrfb);
            itemNode.setParent(_this2.talentItemGroup);
            var item = itemNode.getComponent(TalentItem);
            item.index = index;
            item.setData(talentInfo);

            _this2.talentItems.push(item);

            var itemHeight = itemNode.getComponent(UITransform).contentSize.height;
            itemNode.setPosition(new Vec3(0, _this2._curMaxHeight - itemHeight / 2, 0));
            _this2._curMaxHeight -= itemHeight;
            _this2._contentUITrans.height = -_this2._curMaxHeight;
          });

          this.updateLeftPoints();
        };

        _proto.createPropItem = function createPropItem(key, name) {
          var itemNode = instantiate(this.distributePropItemPrfb);
          itemNode.setParent(this.propGroup);
          var item = itemNode.getComponent(DistributePropItem);
          item.setTitle(name);
          item.key = key;
          item.point = 0;
          item.onAddButtonClick = this.onItemAddButtonClick.bind(this);
          item.onReduceButtonClick = this.onItemReduceButtonClick.bind(this);
          return item;
        };

        _proto.getLeftPoints = function getLeftPoints() {
          var usedPoints = Array.from(this.distributePropItemsMap.values()).reduce(function (pre, cur) {
            return pre + cur.point;
          }, 0);
          return this.totalPoints - usedPoints;
        };

        _proto.onItemAddButtonClick = function onItemAddButtonClick(item) {
          if (this.getLeftPoints() > 0) {
            item.point += 1;
            this.updateLeftPoints();
          }
        };

        _proto.onItemReduceButtonClick = function onItemReduceButtonClick(item) {
          if (item.point > 0) {
            item.point -= 1;
            this.updateLeftPoints();
          }
        };

        _proto.updateLeftPoints = function updateLeftPoints() {
          this.totalPointsLbl.string = this.getLeftPoints().toString();
        };

        _proto.onCheckButtonClicked = function onCheckButtonClicked() {
          var _this3 = this;

          var propData = {
            SPR: 5
          };
          distributePropKeys.forEach(function (key) {
            propData[key] = _this3.distributePropItemsMap.get(key).point;
          });
          eventMsg.emit(Message.DistributePropEnd, propData);
        };

        _proto.onRandomDistributeButtonClicked = function onRandomDistributeButtonClicked() {
          var _this4 = this;

          var t = this.totalPoints;
          var arr = [10, 10, 10, 10];

          while (t > 0) {
            var sub = Math.round(Math.random() * (Math.min(t, 10) - 1)) + 1;

            while (true) {
              var select = Math.floor(Math.random() * 4) % 4;
              if (arr[select] - sub < 0) continue;
              arr[select] -= sub;
              t -= sub;
              break;
            }
          }

          Array.from(this.distributePropItemsMap.keys()).forEach(function (key, index) {
            var item = _this4.distributePropItemsMap.get(key);

            item.point = 10 - arr[index];
          });
          this.updateLeftPoints();
        };

        _proto.onAddPropButtonClicked = function onAddPropButtonClicked() {
          this.totalPoints += 4;
          this.AddPropButton.interactable = false;
          this.updateLeftPoints();
        };

        _proto.onShow = function onShow(selectedTalentList) {
          this.init(selectedTalentList);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return DistributePropPanel;
      }(UIPanel), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "talentItemGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "talentItemPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "propGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "distributePropItemPrfb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "totalPointsLbl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "AddPropButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SelectTalentPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIPanel.ts', './Defines.ts', './Talent.ts', './EventMessage.ts', './Life.ts', './TalentItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Prefab, Button, Label, instantiate, UITransform, Vec3, UIPanel, Message, TalentManager, eventMsg, lifeMgr, TalentItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Button = module.Button;
      Label = module.Label;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
    }, function (module) {
      UIPanel = module.UIPanel;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      TalentManager = module.TalentManager;
    }, function (module) {
      eventMsg = module.eventMsg;
    }, function (module) {
      lifeMgr = module.lifeMgr;
    }, function (module) {
      TalentItem = module.TalentItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp;

      cclegacy._RF.push({}, "c4d7b4gRL9Ga7bKz0sZBuMA", "SelectTalentPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SelectTalentPanel = exports('SelectTalentPanel', (_dec = ccclass('SelectTalentPanel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Button
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: Button
      }), _dec9 = property({
        type: Button
      }), _dec10 = property({
        type: Button
      }), _dec11 = property({
        type: Label
      }), _dec12 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UIPanel) {
        _inheritsLoose(SelectTalentPanel, _UIPanel);

        function SelectTalentPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UIPanel.call.apply(_UIPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "talentItemGroup", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "step1Node", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "step2Node", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "talentItemPrfb", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "checkButton", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "DrawButton", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "AdvDrawButton", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "AddChoiceButton", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "RefreshButton", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "checkButtonLbl", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tips", _descriptor11, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "talentItems", []);

          _defineProperty(_assertThisInitialized(_this), "selectedTalentIndices", []);

          _defineProperty(_assertThisInitialized(_this), "_talentList", void 0);

          _defineProperty(_assertThisInitialized(_this), "_limitSelectedTalentNum", void 0);

          _defineProperty(_assertThisInitialized(_this), "_curMaxHeight", void 0);

          return _this;
        }

        var _proto = SelectTalentPanel.prototype;

        _proto.start = function start() {};

        _proto.init = function init() {
          this._limitSelectedTalentNum = 3;
          this.AddChoiceButton.interactable = true;
          this.RefreshButton.interactable = true;
          this.checkButton.interactable = true;
          this._contentUITrans = this.talentItemGroup._uiProps.uiTransformComp;
          this._talentList = [];
          this.refreshPanel();
        };

        _proto.refreshPanel = function refreshPanel() {
          var _this2 = this;

          if (this._talentList.length <= 0) {
            this.step1Node.active = true;
            this.step2Node.active = false;
          } else {
            this.step1Node.active = false;
            this.step2Node.active = true;
            this.talentItems = [];
            this.selectedTalentIndices = [];
            this.talentItemGroup.removeAllChildren();
            this._curMaxHeight = 0;

            this._talentList.forEach(function (talentInfo, index) {
              var itemNode = instantiate(_this2.talentItemPrfb);
              itemNode.setParent(_this2.talentItemGroup);
              var item = itemNode.getComponent(TalentItem);
              item.index = index;
              item.setData(talentInfo);

              _this2.talentItems.push(item);

              item.onItemClick = _this2.onTalentItemClicked.bind(_this2);
              var itemHeight = itemNode.getComponent(UITransform).contentSize.height;
              itemNode.setPosition(new Vec3(0, _this2._curMaxHeight - itemHeight / 2, 0));
              _this2._curMaxHeight -= itemHeight;
              _this2._contentUITrans.height = -_this2._curMaxHeight;
            });

            this.updateTalentCheckState();
          }
        };

        _proto.updateTalentCheckState = function updateTalentCheckState() {
          var _this3 = this;

          this.talentItems.forEach(function (item, index) {
            if (_this3.selectedTalentIndices.indexOf(index) >= 0) {
              item.setSelected(true);
            } else {
              item.setSelected(false);
            }
          });
          this.tips.string = "\u6700\u591A\u9009\u62E9" + this._limitSelectedTalentNum + "\u4E2A\u5929\u8D4B";

          if (this.selectedTalentIndices.length === this._limitSelectedTalentNum) {
            this.checkButtonLbl.string = "完成";
            this.checkButton.interactable = true;
          } else {
            var left = this._limitSelectedTalentNum - this.selectedTalentIndices.length;
            this.checkButtonLbl.string = "\u8FD8\u5DEE" + left + "\u4E2A\u5929\u8D4B";
            this.checkButton.interactable = false;
          }
        };

        _proto.onTalentItemClicked = function onTalentItemClicked(itemIndex) {
          var idx = this.selectedTalentIndices.indexOf(itemIndex);

          if (idx >= 0) {
            this.selectedTalentIndices.splice(idx, 1);
          } else {
            // 超过数量则替换掉上个选择的对象
            if (this.selectedTalentIndices.length === this._limitSelectedTalentNum) {
              this.selectedTalentIndices.splice(this._limitSelectedTalentNum - 1, 1);
            }

            this.selectedTalentIndices.push(itemIndex);
          }

          this.updateTalentCheckState();
        };

        _proto.onCheckButtonClicked = function onCheckButtonClicked() {
          var _this4 = this;

          var selectedTalentList = [];
          this.selectedTalentIndices.forEach(function (idx) {
            selectedTalentList.push(_this4._talentList[idx]);
          });
          eventMsg.emit(Message.TalentSelectEnd, selectedTalentList);
        };

        _proto.onDrawButtonClicked = function onDrawButtonClicked() {
          this._talentList = lifeMgr.talentRandom().sort(TalentManager.SortTalent);
          this.refreshPanel();
        };

        _proto.onAdvDrawButtonClicked = function onAdvDrawButtonClicked() {
          this._talentList = lifeMgr.talentRandom(20, false).sort(TalentManager.SortTalent);
          this.refreshPanel();
        };

        _proto.onAddChoiceButtonClicked = function onAddChoiceButtonClicked() {
          this._limitSelectedTalentNum += 2;
          this.AddChoiceButton.interactable = false;
          this.updateTalentCheckState();
        };

        _proto.onRefreshButtonClicked = function onRefreshButtonClicked() {
          this._talentList = lifeMgr.talentRandom(this._talentList.length, true).sort(TalentManager.SortTalent);
          this.refreshPanel();
        };

        _proto.onShow = function onShow() {
          this.init();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return SelectTalentPanel;
      }(UIPanel), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "talentItemGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "step1Node", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "step2Node", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "talentItemPrfb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "checkButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "DrawButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "AdvDrawButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "AddChoiceButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "RefreshButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "checkButtonLbl", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c9c1cQBZM5F5aJxMuvmN6/C", "GameManager", undefined);

      var GameManager = function GameManager() {
        _defineProperty(this, "uiManager", void 0);
      };

      var gameMgr = exports('gameMgr', new GameManager());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/util.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, cclegacy;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        average: average,
        clone: clone,
        listRandom: listRandom,
        max: max,
        min: min,
        sum: sum,
        weightRandom: weightRandom
      });

      cclegacy._RF.push({}, "cbaaf06ZhFAdKhR7JtE1ykV", "util", undefined);

      function clone(value) {
        switch (typeof value) {
          case 'object':
            if (Array.isArray(value)) return value.map(function (v) {
              return clone(v);
            });
            var newObj = {};

            for (var key in value) {
              newObj[key] = clone(value[key]);
            }

            return newObj;

          default:
            return value;
        }
      }

      function max() {
        for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
          arr[_key] = arguments[_key];
        }

        return Math.max.apply(Math, arr.flat());
      }

      function min() {
        for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          arr[_key2] = arguments[_key2];
        }

        return Math.min.apply(Math, arr.flat());
      }

      function sum() {
        var s = 0;

        for (var _len3 = arguments.length, arr = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          arr[_key3] = arguments[_key3];
        }

        arr.flat().forEach(function (v) {
          return s += v;
        });
        return s;
      }

      function average() {
        for (var _len4 = arguments.length, arr = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          arr[_key4] = arguments[_key4];
        }

        var s = sum.apply(void 0, arr);
        return s / arr.flat().length;
      }

      function weightRandom(list) {
        var totalWeights = 0;

        for (var _iterator = _createForOfIteratorHelperLoose(list), _step; !(_step = _iterator()).done;) {
          var _step$value = _step.value,
              weight = _step$value[1];
          totalWeights += weight;
        }

        var random = Math.random() * totalWeights;

        for (var _iterator2 = _createForOfIteratorHelperLoose(list), _step2; !(_step2 = _iterator2()).done;) {
          var _step2$value = _step2.value,
              id = _step2$value[0],
              _weight = _step2$value[1];
          if ((random -= _weight) < 0) return id;
        }

        return list[list.length - 1];
      }

      function listRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DialogPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIPanel.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Node, UIPanel;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
    }, function (module) {
      UIPanel = module.UIPanel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "ceff3i+dtNAtJb/2auU/eDo", "DialogPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DialogPanel = exports('DialogPanel', (_dec = ccclass('DialogPanel'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UIPanel) {
        _inheritsLoose(DialogPanel, _UIPanel);

        function DialogPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UIPanel.call.apply(_UIPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "desLab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Sprite1", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "grayMask1", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Sprite2", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "grayMask2", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_current_dialog", void 0);

          _defineProperty(_assertThisInitialized(_this), "_current_count", void 0);

          _defineProperty(_assertThisInitialized(_this), "_speed", void 0);

          _defineProperty(_assertThisInitialized(_this), "_state", void 0);

          return _this;
        }

        var _proto = DialogPanel.prototype;

        _proto.onShow = function onShow(dialogId, speed) {
          if (speed === void 0) {
            speed = 1;
          }

          this._speed = speed;
          this._state = 1;
          this.play(dialogId);
        };

        _proto.play = function play(dialogId) {
          this._current_count = 0;
          this.desLab.string = "";
          this._current_dialog = {
            text: "你好啊哈哈哈哈哈哈哈嗝，你好啊哈fasdfs哈哈哈哈哈哈嗝"
          };
          this.schedule(this.typeWriterCB, 0.2);
        };

        _proto.typeWriterCB = function typeWriterCB() {
          this._current_count++;
          var totalLen = this._current_count * this._speed;

          if (totalLen > this._current_dialog.text.length) {
            totalLen = this._current_dialog.text.length;
            this.unschedule(this.typeWriterCB);
            this._state = 0;
          }

          this.desLab.string = this._current_dialog.text.substring(0, totalLen);
        };

        _proto.onPanelTouchEnd = function onPanelTouchEnd(event) {
          if (this._state == 0) {
            this.close();
          } else {
            var totalLen = this._current_dialog.text.length;
            this.unschedule(this.typeWriterCB);
            this._state = 0;
            this.desLab.string = this._current_dialog.text;
          }
        };

        return DialogPanel;
      }(UIPanel), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "desLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Sprite1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "grayMask1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "grayMask2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "d4254NMR3hCDYP9uPC5N4jf", "UIPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIPanel = exports('UIPanel', (_dec = ccclass('UIPanel'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIPanel, _Component);

        function UIPanel() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = UIPanel.prototype; // update (deltaTime: number) {
        //     // [4]
        // }

        _proto.show = function show() {
          this.node.active = true;
          this.onShow.apply(this, arguments);
        };

        _proto.onShow = function onShow() {};

        _proto.dispose = function dispose() {};

        _proto.close = function close() {
          this.dispose();
          this.node.active = false;
        };

        return UIPanel;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ConfirmPanel.ts', './Defines.ts', './EventMessage.ts', './ConfigManager.ts', './Life.ts', './SummaryPanel.ts', './LifeTrackPanel.ts', './AchievementPanel.ts', './AchievementHint.ts', './DistributePropPanel.ts', './SelectTalentPanel.ts', './GameManager.ts', './DialogPanel.ts', './StartMenuPanel.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Component, setDisplayStats, ConfirmPanel, Message, eventMsg, ConfigManager, lifeMgr, SummaryPanel, LifeTrackPanel, AchievementPanel, AchievementHint, DistributePropPanel, SelectTalentPanel, gameMgr, DialogPanel, StartMenuPanel;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      setDisplayStats = module.setDisplayStats;
    }, function (module) {
      ConfirmPanel = module.ConfirmPanel;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      eventMsg = module.eventMsg;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      lifeMgr = module.lifeMgr;
    }, function (module) {
      SummaryPanel = module.SummaryPanel;
    }, function (module) {
      LifeTrackPanel = module.LifeTrackPanel;
    }, function (module) {
      AchievementPanel = module.AchievementPanel;
    }, function (module) {
      AchievementHint = module.AchievementHint;
    }, function (module) {
      DistributePropPanel = module.DistributePropPanel;
    }, function (module) {
      SelectTalentPanel = module.SelectTalentPanel;
    }, function (module) {
      gameMgr = module.gameMgr;
    }, function (module) {
      DialogPanel = module.DialogPanel;
    }, function (module) {
      StartMenuPanel = module.StartMenuPanel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp;

      cclegacy._RF.push({}, "fc700khn4ZHQJgQWee02qwd", "UIManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIManager = exports('UIManager', (_dec = ccclass('UIManager'), _dec2 = property({
        type: AchievementHint
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: StartMenuPanel
      }), _dec6 = property({
        type: AchievementPanel
      }), _dec7 = property({
        type: SelectTalentPanel
      }), _dec8 = property({
        type: DistributePropPanel
      }), _dec9 = property({
        type: LifeTrackPanel
      }), _dec10 = property({
        type: SummaryPanel
      }), _dec11 = property({
        type: ConfirmPanel
      }), _dec12 = property({
        type: DialogPanel
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIManager, _Component);

        function UIManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "achievementHint", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "homeButtonNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "achievementButtonNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "startMenuPanel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "achievementPanel", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "selectTalentPanel", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "distributePropPanel", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lifeTrackPanel", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "summaryPanel", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "confirmPanel", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "dialogPanel", _descriptor11, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_selectedTalentList", void 0);

          return _this;
        }

        var _proto = UIManager.prototype;

        _proto.start = function start() {
          this.init();
        };

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var _yield$Promise$all, happyLife, specialthanks;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    setDisplayStats(false);
                    _context.next = 3;
                    return Promise.all([lifeMgr.initial(), ConfigManager.readJson('happy_life'), ConfigManager.readJson('specialthanks')]);

                  case 3:
                    _yield$Promise$all = _context.sent;
                    happyLife = _yield$Promise$all[1];
                    specialthanks = _yield$Promise$all[2];
                    eventMsg.on(Message.StartMenu, function () {
                      _this2.startMenuPanel.show(happyLife);

                      _this2.selectTalentPanel.close();

                      _this2.distributePropPanel.close();

                      _this2.lifeTrackPanel.close();

                      _this2.homeButtonNode.active = false;
                      _this2.achievementButtonNode.active = true;
                    });
                    eventMsg.on(Message.StartGame, function () {
                      _this2.startMenuPanel.close();

                      _this2.homeButtonNode.active = true;
                      _this2.achievementButtonNode.active = false;

                      _this2.openSelectTalentPanel();
                    });
                    eventMsg.on(Message.TalentSelectEnd, function (selectedTalentList) {
                      _this2._selectedTalentList = selectedTalentList;

                      _this2.selectTalentPanel.close();

                      _this2.distributePropPanel.show(selectedTalentList);
                    });
                    eventMsg.on(Message.DistributePropEnd, function (propData) {
                      _this2.distributePropPanel.close();

                      _this2.lifeTrackPanel.show(_this2._selectedTalentList, propData);
                    });
                    eventMsg.on(Message.LifeTrackEnd, function () {
                      _this2.lifeTrackPanel.close();

                      _this2.summaryPanel.show();
                    });
                    eventMsg.on(Message.Replay, function () {
                      _this2.summaryPanel.close();

                      lifeMgr.times++;

                      _this2.openSelectTalentPanel();
                    }); // achievement

                    eventMsg.on(Message.Achievement, function (achievementData) {
                      _this2.achievementHint.show(achievementData);
                    }); // start

                    eventMsg.emit(Message.StartMenu);
                    gameMgr.uiManager = this;

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.openSelectTalentPanel = function openSelectTalentPanel() {
          this.selectTalentPanel.show();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.onClearButtonClicked = function onClearButtonClicked() {
          localStorage.clear();
        };

        _proto.onOpenAchievementButtonClicked = function onOpenAchievementButtonClicked() {
          this.achievementPanel.show();
        };

        _proto.onHomeButtonClicked = function onHomeButtonClicked() {
          eventMsg.emit(Message.StartMenu);
        } //警示
        // gameMgr.uiManager.ShowConfirm("请问你是否要开始",()=>{log("haha")},"通知");
        ;

        _proto.ShowConfirm = function ShowConfirm(des, conFunc, title, canFunc) {
          this.confirmPanel.show(des, conFunc, title, canFunc);
        } //对话
        // gameMgr.uiManager.ShowDialog(1,1);
        ;

        _proto.ShowDialog = function ShowDialog(dialogId, speed) {
          this.dialogPanel.show(dialogId, speed);
        }
        /*
        public save() {
            if (sys.platform === sys.Platform.MOBILE_BROWSER ||
                sys.platform === sys.Platform.DESKTOP_BROWSER) {
                    const data = {};
                    Object
                        .keys(localStorage)
                        .filter(v=>v.substr(0,4)!='goog')
                        .forEach(key=>data[key] = localStorage[key]);
                      let blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
                    // @ts-ignore
                    const slice = blob.slice || blob.webkitSlice || blob.mozSlice;
                    blob = slice.call(blob, 0, blob.size, 'application/octet-stream');
                    const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement;
                      a.href = URL.createObjectURL(blob);
                    a.download = `Remake_save_${new Date().toISOString().replace(':','.')}.json`;
                      document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(a.href);
            }
        }
          public load() {
            if (sys.platform === sys.Platform.MOBILE_BROWSER ||
                sys.platform === sys.Platform.DESKTOP_BROWSER) {
                    const file = document.createElement('input');
                    file.type = 'file';
                    file.name = 'file';
                    file.accept = "application/json";
                    // @ts-ignore
                    file.style = "display: none;";
                    file.append('body');
                    file.click();
                    file.addEventListener('change', (e)=>{
                        // @ts-ignore
                        const file = e.target.files[0];
                        if(!file) return;
                        const reader = new FileReader();
                        reader.onload = () => {
                            const data = JSON.parse(reader.result as string);
                            for(const key in data) {
                                localStorage[key] = data[key];
                            }
                            this.achievementHint.show('加载存档成功');
                        }
                        reader.readAsText(file);
                    });
            }
        }
            public onGithubButtonClicked() {
            sys.openURL("https://github.com/gameall3d/LifeRestart_Cocos");
        }
        */
        ;

        return UIManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementHint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "homeButtonNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "achievementButtonNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startMenuPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "achievementPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selectTalentPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "distributePropPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lifeTrackPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "summaryPanel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "confirmPanel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "dialogPanel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartMenuPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIPanel.ts', './EventMessage.ts', './TagItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Prefab, Node, instantiate, UIPanel, eventMsg, TagItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
    }, function (module) {
      UIPanel = module.UIPanel;
    }, function (module) {
      eventMsg = module.eventMsg;
    }, function (module) {
      TagItem = module.TagItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "ff68dOP4v5KTacY3/xxvNmR", "StartMenuPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var fallLength = 400;
      var RADIUS = 200;
      var oneRadian = Math.PI / 180;
      var StartMenuPanel = exports('StartMenuPanel', (_dec = ccclass('StartMenuPanel'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UIPanel) {
        _inheritsLoose(StartMenuPanel, _UIPanel);

        function StartMenuPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UIPanel.call.apply(_UIPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "tagLabelPrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tagCloud", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_tagItems", []);

          _defineProperty(_assertThisInitialized(_this), "_angleX", 0);

          _defineProperty(_assertThisInitialized(_this), "_angleY", 0);

          _defineProperty(_assertThisInitialized(_this), "_isAutoRotY", true);

          return _this;
        }

        var _proto = StartMenuPanel.prototype;

        _proto.onStartButtonClicked = function onStartButtonClicked() {
          // gameMgr.uiManager.ShowDialog(1,0.5);
          eventMsg.emit('StartGame');
        };

        _proto.onShow = function onShow(tagList) {
          this.createTagCloud(tagList);
        };

        _proto.createTagCloud = function createTagCloud(tagList) {
          this._tagItems = [];
          this.tagCloud.removeAllChildren();
          var tagLength = tagList.length;

          for (var i = 0; i < tagLength; i++) {
            var k = (2 * (i + 1) - 1) / tagLength - 1;
            var a = Math.acos(k);
            var b = a * Math.sqrt(tagLength * Math.PI); // var a = Math.random()*2*Math.PI;
            // var b = Math.random()*2*Math.PI;

            var x = RADIUS * Math.sin(a) * Math.cos(b);
            var y = RADIUS * Math.sin(a) * Math.sin(b);
            var z = RADIUS * Math.cos(a);
            var labelNode = instantiate(this.tagLabelPrfb);
            labelNode.setParent(this.tagCloud);
            labelNode.setPosition(x, y, z);
            var tagItem = labelNode.getComponent(TagItem);

            this._tagItems.push(tagItem);

            tagItem.setTagName(tagList[i]);
            tagItem.refresh(fallLength, RADIUS);
          }
        };

        _proto.rotateX = function rotateX() {
          var cos = Math.cos(this._angleX);
          var sin = Math.sin(this._angleX);

          this._tagItems.forEach(function (tagItem) {
            var pos = tagItem.node.position;
            var y1 = pos.y * cos - pos.z * sin;
            var z1 = pos.z * cos + pos.y * sin;
            tagItem.node.setPosition(pos.x, y1, z1);
          });
        };

        _proto.rotateY = function rotateY() {
          var cos = Math.cos(this._angleY);
          var sin = Math.sin(this._angleY);

          this._tagItems.forEach(function (tagItem) {
            var pos = tagItem.node.position;
            var x1 = pos.x * cos - pos.z * sin;
            var z1 = pos.z * cos + pos.x * sin;
            tagItem.node.setPosition(x1, pos.y, z1);
          });
        };

        _proto.rotateItems = function rotateItems() {
          this.rotateX();
          this.rotateY();

          this._tagItems.forEach(function (tagItem) {
            tagItem.refresh(fallLength, RADIUS);
          });
        };

        _proto.update = function update(deltaTime) {
          // [4]
          if (this._isAutoRotY) {
            this._angleY = deltaTime * oneRadian * 5;
            this.rotateItems();
          }
        };

        return StartMenuPanel;
      }(UIPanel), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tagLabelPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tagCloud", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./UIPanel.ts', './ConfirmPanel.ts', './Defines.ts', './LifeTrackItem.ts', './util.ts', './property.ts', './condition.ts', './event.ts', './Talent.ts', './EventMessage.ts', './achievement.ts', './ConfigManager.ts', './Life.ts', './TalentItem.ts', './PropItem.ts', './SummaryPanel.ts', './AchievementItem.ts', './TagItem.ts', './LifeTrackPanel.ts', './StatisticsItem.ts', './AchievementPanel.ts', './summary.ts', './DistributePropItem.ts', './AchievementHint.ts', './DistributePropPanel.ts', './SelectTalentPanel.ts', './GameManager.ts', './DialogPanel.ts', './StartMenuPanel.ts', './UIManager.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
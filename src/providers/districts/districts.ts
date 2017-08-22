import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DistrictsProvider {

  districts = [
    {
      "id": -1,
      "name": "热门城市",
      "parent_id": 0,
      "child": [
        {
          "id": 135,
          "name": "北京",
          "parent_id": -1,
          "child": []
        },
        {
          "id": 136,
          "name": "上海",
          "parent_id": -1,
          "child": []
        },
        {
          "id": 137,
          "name": "广州",
          "parent_id": -1,
          "child": []
        },
        {
          "id": 138,
          "name": "深圳",
          "parent_id": -1,
          "child": []
        },
        {
          "id": 139,
          "name": "南京",
          "parent_id": -1,
          "child": []
        },
        {
          "id": 132,
          "name": "杭州",
          "parent_id": -1,
          "child": []
        }
      ]
    },
    {
      "id": 1,
      "name": "北京市",
      "parent_id": 0,
      "child": [
        {
          "id": 36,
          "name": "东城区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 37,
          "name": "西城区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 38,
          "name": "崇文区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 39,
          "name": "宣武区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 40,
          "name": "朝阳区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 41,
          "name": "丰台区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 42,
          "name": "石景山区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 43,
          "name": "海淀区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 44,
          "name": "门头沟区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 45,
          "name": "房山区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 46,
          "name": "通州区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 47,
          "name": "顺义区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 48,
          "name": "昌平区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 49,
          "name": "大兴区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 50,
          "name": "怀柔区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 51,
          "name": "平谷区",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 52,
          "name": "密云县",
          "parent_id": 1,
          "child": []
        },
        {
          "id": 53,
          "name": "延庆县",
          "parent_id": 1,
          "child": []
        }
      ]
    },
    {
      "id": 2,
      "name": "天津市",
      "parent_id": 0,
      "child": [
        {
          "id": 54,
          "name": "和平区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 55,
          "name": "河东区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 56,
          "name": "河西区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 57,
          "name": "南开区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 58,
          "name": "河北区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 59,
          "name": "红桥区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 60,
          "name": "东丽区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 61,
          "name": "西青区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 62,
          "name": "津南区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 63,
          "name": "北辰区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 64,
          "name": "武清区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 65,
          "name": "宝坻区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 66,
          "name": "滨海新区",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 67,
          "name": "宁河县",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 68,
          "name": "蓟县",
          "parent_id": 2,
          "child": []
        },
        {
          "id": 69,
          "name": "静海县",
          "parent_id": 2,
          "child": []
        }
      ]
    },
    {
      "id": 3,
      "name": "上海市",
      "parent_id": 0,
      "child": [
        {
          "id": 70,
          "name": "黄浦区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 71,
          "name": "徐汇区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 72,
          "name": "长宁区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 73,
          "name": "静安区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 74,
          "name": "普陀区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 75,
          "name": "闸北区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 76,
          "name": "虹口区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 77,
          "name": "杨浦区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 78,
          "name": "闵行区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 79,
          "name": "宝山区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 80,
          "name": "嘉定区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 81,
          "name": "浦东新区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 82,
          "name": "金山区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 83,
          "name": "松江区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 84,
          "name": "青浦区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 85,
          "name": "奉贤区",
          "parent_id": 3,
          "child": []
        },
        {
          "id": 86,
          "name": "崇明县",
          "parent_id": 3,
          "child": []
        }
      ]
    },
    {
      "id": 4,
      "name": "重庆市",
      "parent_id": 0,
      "child": [
        {
          "id": 87,
          "name": "万州区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 88,
          "name": "涪陵区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 89,
          "name": "渝中区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 90,
          "name": "大渡口区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 91,
          "name": "江北区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 92,
          "name": "沙坪坝区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 93,
          "name": "九龙坡区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 94,
          "name": "南岸区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 95,
          "name": "北碚区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 96,
          "name": "綦江区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 97,
          "name": "大足区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 98,
          "name": "渝北区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 99,
          "name": "巴南区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 100,
          "name": "黔江区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 101,
          "name": "长寿区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 102,
          "name": "江津区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 103,
          "name": "合川区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 104,
          "name": "永川区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 105,
          "name": "南川区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 106,
          "name": "潼南县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 107,
          "name": "铜梁区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 108,
          "name": "荣昌县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 109,
          "name": "璧山区",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 110,
          "name": "梁平县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 111,
          "name": "城口县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 112,
          "name": "丰都县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 113,
          "name": "垫江县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 114,
          "name": "武隆县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 115,
          "name": "忠县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 116,
          "name": "开县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 117,
          "name": "云阳县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 118,
          "name": "奉节县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 119,
          "name": "巫山县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 120,
          "name": "巫溪县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 121,
          "name": "石柱自治县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 122,
          "name": "秀山自治县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 123,
          "name": "酉阳自治县",
          "parent_id": 4,
          "child": []
        },
        {
          "id": 124,
          "name": "彭水自治县",
          "parent_id": 4,
          "child": []
        }
      ]
    },
    {
      "id": 5,
      "name": "河北省",
      "parent_id": 0,
      "child": [
        {
          "id": 125,
          "name": "石家庄市",
          "parent_id": 5,
          "child": [
            {
              "id": 533,
              "name": "长安区",
              "parent_id": 125
            },
            {
              "id": 535,
              "name": "桥西区",
              "parent_id": 125
            },
            {
              "id": 536,
              "name": "新华区",
              "parent_id": 125
            },
            {
              "id": 537,
              "name": "井陉矿区",
              "parent_id": 125
            },
            {
              "id": 538,
              "name": "裕华区",
              "parent_id": 125
            },
            {
              "id": 539,
              "name": "井陉县",
              "parent_id": 125
            },
            {
              "id": 540,
              "name": "正定县",
              "parent_id": 125
            },
            {
              "id": 541,
              "name": "栾城区",
              "parent_id": 125
            },
            {
              "id": 542,
              "name": "行唐县",
              "parent_id": 125
            },
            {
              "id": 543,
              "name": "灵寿县",
              "parent_id": 125
            },
            {
              "id": 544,
              "name": "高邑县",
              "parent_id": 125
            },
            {
              "id": 545,
              "name": "深泽县",
              "parent_id": 125
            },
            {
              "id": 546,
              "name": "赞皇县",
              "parent_id": 125
            },
            {
              "id": 547,
              "name": "无极县",
              "parent_id": 125
            },
            {
              "id": 548,
              "name": "平山县",
              "parent_id": 125
            },
            {
              "id": 549,
              "name": "元氏县",
              "parent_id": 125
            },
            {
              "id": 550,
              "name": "赵县",
              "parent_id": 125
            },
            {
              "id": 551,
              "name": "辛集市",
              "parent_id": 125
            },
            {
              "id": 552,
              "name": "藁城区",
              "parent_id": 125
            },
            {
              "id": 553,
              "name": "晋州市",
              "parent_id": 125
            },
            {
              "id": 554,
              "name": "新乐市",
              "parent_id": 125
            },
            {
              "id": 555,
              "name": "鹿泉区",
              "parent_id": 125
            }
          ]
        },
        {
          "id": 126,
          "name": "唐山市",
          "parent_id": 5,
          "child": [
            {
              "id": 556,
              "name": "路南区",
              "parent_id": 126
            },
            {
              "id": 557,
              "name": "路北区",
              "parent_id": 126
            },
            {
              "id": 558,
              "name": "古冶区",
              "parent_id": 126
            },
            {
              "id": 559,
              "name": "开平区",
              "parent_id": 126
            },
            {
              "id": 560,
              "name": "丰南区",
              "parent_id": 126
            },
            {
              "id": 561,
              "name": "丰润区",
              "parent_id": 126
            },
            {
              "id": 562,
              "name": "滦县",
              "parent_id": 126
            },
            {
              "id": 563,
              "name": "滦南县",
              "parent_id": 126
            },
            {
              "id": 564,
              "name": "乐亭县",
              "parent_id": 126
            },
            {
              "id": 565,
              "name": "迁西县",
              "parent_id": 126
            },
            {
              "id": 566,
              "name": "玉田县",
              "parent_id": 126
            },
            {
              "id": 567,
              "name": "唐海县",
              "parent_id": 126
            },
            {
              "id": 568,
              "name": "遵化市",
              "parent_id": 126
            },
            {
              "id": 569,
              "name": "迁安市",
              "parent_id": 126
            }
          ]
        },
        {
          "id": 127,
          "name": "秦皇岛市",
          "parent_id": 5,
          "child": [
            {
              "id": 570,
              "name": "海港区",
              "parent_id": 127
            },
            {
              "id": 571,
              "name": "山海关区",
              "parent_id": 127
            },
            {
              "id": 572,
              "name": "北戴河区",
              "parent_id": 127
            },
            {
              "id": 573,
              "name": "青龙自治县",
              "parent_id": 127
            },
            {
              "id": 574,
              "name": "昌黎县",
              "parent_id": 127
            },
            {
              "id": 575,
              "name": "抚宁县",
              "parent_id": 127
            },
            {
              "id": 576,
              "name": "卢龙县",
              "parent_id": 127
            }
          ]
        },
        {
          "id": 128,
          "name": "邯郸市",
          "parent_id": 5,
          "child": [
            {
              "id": 577,
              "name": "邯山区",
              "parent_id": 128
            },
            {
              "id": 578,
              "name": "丛台区",
              "parent_id": 128
            },
            {
              "id": 579,
              "name": "复兴区",
              "parent_id": 128
            },
            {
              "id": 580,
              "name": "峰峰矿区",
              "parent_id": 128
            },
            {
              "id": 581,
              "name": "邯郸县",
              "parent_id": 128
            },
            {
              "id": 582,
              "name": "临漳县",
              "parent_id": 128
            },
            {
              "id": 583,
              "name": "成安县",
              "parent_id": 128
            },
            {
              "id": 584,
              "name": "大名县",
              "parent_id": 128
            },
            {
              "id": 585,
              "name": "涉县",
              "parent_id": 128
            },
            {
              "id": 586,
              "name": "磁县",
              "parent_id": 128
            },
            {
              "id": 587,
              "name": "肥乡县",
              "parent_id": 128
            },
            {
              "id": 588,
              "name": "永年县",
              "parent_id": 128
            },
            {
              "id": 589,
              "name": "邱县",
              "parent_id": 128
            },
            {
              "id": 590,
              "name": "鸡泽县",
              "parent_id": 128
            },
            {
              "id": 591,
              "name": "广平县",
              "parent_id": 128
            },
            {
              "id": 592,
              "name": "馆陶县",
              "parent_id": 128
            },
            {
              "id": 593,
              "name": "魏县",
              "parent_id": 128
            },
            {
              "id": 594,
              "name": "曲周县",
              "parent_id": 128
            },
            {
              "id": 595,
              "name": "武安市",
              "parent_id": 128
            }
          ]
        },
        {
          "id": 129,
          "name": "邢台市",
          "parent_id": 5,
          "child": [
            {
              "id": 596,
              "name": "桥东区",
              "parent_id": 129
            },
            {
              "id": 597,
              "name": "桥西区",
              "parent_id": 129
            },
            {
              "id": 598,
              "name": "邢台县",
              "parent_id": 129
            },
            {
              "id": 599,
              "name": "临城县",
              "parent_id": 129
            },
            {
              "id": 600,
              "name": "内丘县",
              "parent_id": 129
            },
            {
              "id": 601,
              "name": "柏乡县",
              "parent_id": 129
            },
            {
              "id": 602,
              "name": "隆尧县",
              "parent_id": 129
            },
            {
              "id": 603,
              "name": "任县",
              "parent_id": 129
            },
            {
              "id": 604,
              "name": "南和县",
              "parent_id": 129
            },
            {
              "id": 605,
              "name": "宁晋县",
              "parent_id": 129
            },
            {
              "id": 606,
              "name": "巨鹿县",
              "parent_id": 129
            },
            {
              "id": 607,
              "name": "新河县",
              "parent_id": 129
            },
            {
              "id": 608,
              "name": "广宗县",
              "parent_id": 129
            },
            {
              "id": 609,
              "name": "平乡县",
              "parent_id": 129
            },
            {
              "id": 610,
              "name": "威县",
              "parent_id": 129
            },
            {
              "id": 611,
              "name": "清河县",
              "parent_id": 129
            },
            {
              "id": 612,
              "name": "临西县",
              "parent_id": 129
            },
            {
              "id": 613,
              "name": "南宫市",
              "parent_id": 129
            },
            {
              "id": 614,
              "name": "沙河市",
              "parent_id": 129
            }
          ]
        },
        {
          "id": 130,
          "name": "保定市",
          "parent_id": 5,
          "child": [
            {
              "id": 615,
              "name": "新市区",
              "parent_id": 130
            },
            {
              "id": 616,
              "name": "北市区",
              "parent_id": 130
            },
            {
              "id": 617,
              "name": "南市区",
              "parent_id": 130
            },
            {
              "id": 618,
              "name": "满城县",
              "parent_id": 130
            },
            {
              "id": 619,
              "name": "清苑县",
              "parent_id": 130
            },
            {
              "id": 620,
              "name": "涞水县",
              "parent_id": 130
            },
            {
              "id": 621,
              "name": "阜平县",
              "parent_id": 130
            },
            {
              "id": 622,
              "name": "徐水县",
              "parent_id": 130
            },
            {
              "id": 623,
              "name": "定兴县",
              "parent_id": 130
            },
            {
              "id": 624,
              "name": "唐县",
              "parent_id": 130
            },
            {
              "id": 625,
              "name": "高阳县",
              "parent_id": 130
            },
            {
              "id": 626,
              "name": "容城县",
              "parent_id": 130
            },
            {
              "id": 627,
              "name": "涞源县",
              "parent_id": 130
            },
            {
              "id": 628,
              "name": "望都县",
              "parent_id": 130
            },
            {
              "id": 629,
              "name": "安新县",
              "parent_id": 130
            },
            {
              "id": 630,
              "name": "易县",
              "parent_id": 130
            },
            {
              "id": 631,
              "name": "曲阳县",
              "parent_id": 130
            },
            {
              "id": 632,
              "name": "蠡县",
              "parent_id": 130
            },
            {
              "id": 633,
              "name": "顺平县",
              "parent_id": 130
            },
            {
              "id": 634,
              "name": "博野县",
              "parent_id": 130
            },
            {
              "id": 635,
              "name": "雄县",
              "parent_id": 130
            },
            {
              "id": 636,
              "name": "涿州市",
              "parent_id": 130
            },
            {
              "id": 637,
              "name": "定州市",
              "parent_id": 130
            },
            {
              "id": 638,
              "name": "安国市",
              "parent_id": 130
            },
            {
              "id": 639,
              "name": "高碑店市",
              "parent_id": 130
            }
          ]
        },
        {
          "id": 131,
          "name": "张家口市",
          "parent_id": 5,
          "child": [
            {
              "id": 640,
              "name": "桥东区",
              "parent_id": 131
            },
            {
              "id": 641,
              "name": "桥西区",
              "parent_id": 131
            },
            {
              "id": 642,
              "name": "宣化区",
              "parent_id": 131
            },
            {
              "id": 643,
              "name": "下花园区",
              "parent_id": 131
            },
            {
              "id": 644,
              "name": "宣化县",
              "parent_id": 131
            },
            {
              "id": 645,
              "name": "张北县",
              "parent_id": 131
            },
            {
              "id": 646,
              "name": "康保县",
              "parent_id": 131
            },
            {
              "id": 647,
              "name": "沽源县",
              "parent_id": 131
            },
            {
              "id": 648,
              "name": "尚义县",
              "parent_id": 131
            },
            {
              "id": 649,
              "name": "蔚县",
              "parent_id": 131
            },
            {
              "id": 650,
              "name": "阳原县",
              "parent_id": 131
            },
            {
              "id": 651,
              "name": "怀安县",
              "parent_id": 131
            },
            {
              "id": 652,
              "name": "万全县",
              "parent_id": 131
            },
            {
              "id": 653,
              "name": "怀来县",
              "parent_id": 131
            },
            {
              "id": 654,
              "name": "涿鹿县",
              "parent_id": 131
            },
            {
              "id": 655,
              "name": "赤城县",
              "parent_id": 131
            },
            {
              "id": 656,
              "name": "崇礼县",
              "parent_id": 131
            }
          ]
        },
        {
          "id": 132,
          "name": "承德市",
          "parent_id": 5,
          "child": [
            {
              "id": 657,
              "name": "双桥区",
              "parent_id": 132
            },
            {
              "id": 658,
              "name": "双滦区",
              "parent_id": 132
            },
            {
              "id": 659,
              "name": "鹰手营子区",
              "parent_id": 132
            },
            {
              "id": 660,
              "name": "承德县",
              "parent_id": 132
            },
            {
              "id": 661,
              "name": "兴隆县",
              "parent_id": 132
            },
            {
              "id": 662,
              "name": "平泉县",
              "parent_id": 132
            },
            {
              "id": 663,
              "name": "滦平县",
              "parent_id": 132
            },
            {
              "id": 664,
              "name": "隆化县",
              "parent_id": 132
            },
            {
              "id": 665,
              "name": "丰宁自治县",
              "parent_id": 132
            },
            {
              "id": 666,
              "name": "宽城自治县",
              "parent_id": 132
            },
            {
              "id": 667,
              "name": "围场自治县",
              "parent_id": 132
            }
          ]
        },
        {
          "id": 133,
          "name": "沧州市",
          "parent_id": 5,
          "child": [
            {
              "id": 668,
              "name": "新华区",
              "parent_id": 133
            },
            {
              "id": 669,
              "name": "运河区",
              "parent_id": 133
            },
            {
              "id": 670,
              "name": "沧县",
              "parent_id": 133
            },
            {
              "id": 671,
              "name": "青县",
              "parent_id": 133
            },
            {
              "id": 672,
              "name": "东光县",
              "parent_id": 133
            },
            {
              "id": 673,
              "name": "海兴县",
              "parent_id": 133
            },
            {
              "id": 674,
              "name": "盐山县",
              "parent_id": 133
            },
            {
              "id": 675,
              "name": "肃宁县",
              "parent_id": 133
            },
            {
              "id": 676,
              "name": "南皮县",
              "parent_id": 133
            },
            {
              "id": 677,
              "name": "吴桥县",
              "parent_id": 133
            },
            {
              "id": 678,
              "name": "献县",
              "parent_id": 133
            },
            {
              "id": 679,
              "name": "孟村自治县",
              "parent_id": 133
            },
            {
              "id": 680,
              "name": "泊头市",
              "parent_id": 133
            },
            {
              "id": 681,
              "name": "任丘市",
              "parent_id": 133
            },
            {
              "id": 682,
              "name": "黄骅市",
              "parent_id": 133
            },
            {
              "id": 683,
              "name": "河间市",
              "parent_id": 133
            }
          ]
        },
        {
          "id": 134,
          "name": "廊坊市",
          "parent_id": 5,
          "child": [
            {
              "id": 684,
              "name": "安次区",
              "parent_id": 134
            },
            {
              "id": 685,
              "name": "广阳区",
              "parent_id": 134
            },
            {
              "id": 686,
              "name": "固安县",
              "parent_id": 134
            },
            {
              "id": 687,
              "name": "永清县",
              "parent_id": 134
            },
            {
              "id": 688,
              "name": "香河县",
              "parent_id": 134
            },
            {
              "id": 689,
              "name": "大城县",
              "parent_id": 134
            },
            {
              "id": 690,
              "name": "文安县",
              "parent_id": 134
            },
            {
              "id": 691,
              "name": "大厂自治县",
              "parent_id": 134
            },
            {
              "id": 692,
              "name": "霸州市",
              "parent_id": 134
            },
            {
              "id": 693,
              "name": "三河市",
              "parent_id": 134
            }
          ]
        },
        {
          "id": 135,
          "name": "衡水市",
          "parent_id": 5,
          "child": [
            {
              "id": 694,
              "name": "桃城区",
              "parent_id": 135
            },
            {
              "id": 695,
              "name": "枣强县",
              "parent_id": 135
            },
            {
              "id": 696,
              "name": "武邑县",
              "parent_id": 135
            },
            {
              "id": 697,
              "name": "武强县",
              "parent_id": 135
            },
            {
              "id": 698,
              "name": "饶阳县",
              "parent_id": 135
            },
            {
              "id": 699,
              "name": "安平县",
              "parent_id": 135
            },
            {
              "id": 700,
              "name": "故城县",
              "parent_id": 135
            },
            {
              "id": 701,
              "name": "景县",
              "parent_id": 135
            },
            {
              "id": 702,
              "name": "阜城县",
              "parent_id": 135
            },
            {
              "id": 703,
              "name": "冀州市",
              "parent_id": 135
            },
            {
              "id": 704,
              "name": "深州市",
              "parent_id": 135
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "name": "山西省",
      "parent_id": 0,
      "child": [
        {
          "id": 136,
          "name": "太原市",
          "parent_id": 6,
          "child": [
            {
              "id": 705,
              "name": "小店区",
              "parent_id": 136
            },
            {
              "id": 706,
              "name": "迎泽区",
              "parent_id": 136
            },
            {
              "id": 707,
              "name": "杏花岭区",
              "parent_id": 136
            },
            {
              "id": 708,
              "name": "尖草坪区",
              "parent_id": 136
            },
            {
              "id": 709,
              "name": "万柏林区",
              "parent_id": 136
            },
            {
              "id": 710,
              "name": "晋源区",
              "parent_id": 136
            },
            {
              "id": 711,
              "name": "清徐县",
              "parent_id": 136
            },
            {
              "id": 712,
              "name": "阳曲县",
              "parent_id": 136
            },
            {
              "id": 713,
              "name": "娄烦县",
              "parent_id": 136
            },
            {
              "id": 714,
              "name": "古交市",
              "parent_id": 136
            }
          ]
        },
        {
          "id": 137,
          "name": "大同市",
          "parent_id": 6,
          "child": [
            {
              "id": 715,
              "name": "城区",
              "parent_id": 137
            },
            {
              "id": 716,
              "name": "矿区",
              "parent_id": 137
            },
            {
              "id": 717,
              "name": "南郊区",
              "parent_id": 137
            },
            {
              "id": 718,
              "name": "新荣区",
              "parent_id": 137
            },
            {
              "id": 719,
              "name": "阳高县",
              "parent_id": 137
            },
            {
              "id": 720,
              "name": "天镇县",
              "parent_id": 137
            },
            {
              "id": 721,
              "name": "广灵县",
              "parent_id": 137
            },
            {
              "id": 722,
              "name": "灵丘县",
              "parent_id": 137
            },
            {
              "id": 723,
              "name": "浑源县",
              "parent_id": 137
            },
            {
              "id": 724,
              "name": "左云县",
              "parent_id": 137
            },
            {
              "id": 725,
              "name": "大同县",
              "parent_id": 137
            }
          ]
        },
        {
          "id": 138,
          "name": "阳泉市",
          "parent_id": 6,
          "child": [
            {
              "id": 726,
              "name": "城区",
              "parent_id": 138
            },
            {
              "id": 727,
              "name": "矿区",
              "parent_id": 138
            },
            {
              "id": 728,
              "name": "郊区",
              "parent_id": 138
            },
            {
              "id": 729,
              "name": "平定县",
              "parent_id": 138
            },
            {
              "id": 730,
              "name": "盂县",
              "parent_id": 138
            }
          ]
        },
        {
          "id": 139,
          "name": "长治市",
          "parent_id": 6,
          "child": [
            {
              "id": 731,
              "name": "城区",
              "parent_id": 139
            },
            {
              "id": 732,
              "name": "郊区",
              "parent_id": 139
            },
            {
              "id": 733,
              "name": "长治县",
              "parent_id": 139
            },
            {
              "id": 734,
              "name": "襄垣县",
              "parent_id": 139
            },
            {
              "id": 735,
              "name": "屯留县",
              "parent_id": 139
            },
            {
              "id": 736,
              "name": "平顺县",
              "parent_id": 139
            },
            {
              "id": 737,
              "name": "黎城县",
              "parent_id": 139
            },
            {
              "id": 738,
              "name": "壶关县",
              "parent_id": 139
            },
            {
              "id": 739,
              "name": "长子县",
              "parent_id": 139
            },
            {
              "id": 740,
              "name": "武乡县",
              "parent_id": 139
            },
            {
              "id": 741,
              "name": "沁县",
              "parent_id": 139
            },
            {
              "id": 742,
              "name": "沁源县",
              "parent_id": 139
            },
            {
              "id": 743,
              "name": "潞城县",
              "parent_id": 139
            }
          ]
        },
        {
          "id": 140,
          "name": "晋城市",
          "parent_id": 6,
          "child": [
            {
              "id": 744,
              "name": "城区",
              "parent_id": 140
            },
            {
              "id": 745,
              "name": "沁水县",
              "parent_id": 140
            },
            {
              "id": 746,
              "name": "阳城县",
              "parent_id": 140
            },
            {
              "id": 747,
              "name": "陵川县",
              "parent_id": 140
            },
            {
              "id": 748,
              "name": "泽州县",
              "parent_id": 140
            },
            {
              "id": 749,
              "name": "高平市",
              "parent_id": 140
            }
          ]
        },
        {
          "id": 141,
          "name": "朔州市",
          "parent_id": 6,
          "child": [
            {
              "id": 750,
              "name": "朔城区",
              "parent_id": 141
            },
            {
              "id": 751,
              "name": "平鲁区",
              "parent_id": 141
            },
            {
              "id": 752,
              "name": "山阴县",
              "parent_id": 141
            },
            {
              "id": 753,
              "name": "应县",
              "parent_id": 141
            },
            {
              "id": 754,
              "name": "右玉县",
              "parent_id": 141
            },
            {
              "id": 755,
              "name": "怀仁县",
              "parent_id": 141
            }
          ]
        },
        {
          "id": 142,
          "name": "晋中市",
          "parent_id": 6,
          "child": [
            {
              "id": 756,
              "name": "榆次区",
              "parent_id": 142
            },
            {
              "id": 757,
              "name": "榆社县",
              "parent_id": 142
            },
            {
              "id": 758,
              "name": "左权县",
              "parent_id": 142
            },
            {
              "id": 759,
              "name": "和顺县",
              "parent_id": 142
            },
            {
              "id": 760,
              "name": "昔阳县",
              "parent_id": 142
            },
            {
              "id": 761,
              "name": "寿阳县",
              "parent_id": 142
            },
            {
              "id": 762,
              "name": "太谷县",
              "parent_id": 142
            },
            {
              "id": 763,
              "name": "祁县",
              "parent_id": 142
            },
            {
              "id": 764,
              "name": "平遥县",
              "parent_id": 142
            },
            {
              "id": 765,
              "name": "灵石县",
              "parent_id": 142
            },
            {
              "id": 766,
              "name": "介休市",
              "parent_id": 142
            }
          ]
        },
        {
          "id": 143,
          "name": "运城市",
          "parent_id": 6,
          "child": [
            {
              "id": 767,
              "name": "盐湖区",
              "parent_id": 143
            },
            {
              "id": 768,
              "name": "临猗县",
              "parent_id": 143
            },
            {
              "id": 769,
              "name": "万荣县",
              "parent_id": 143
            },
            {
              "id": 770,
              "name": "闻喜县",
              "parent_id": 143
            },
            {
              "id": 771,
              "name": "稷山县",
              "parent_id": 143
            },
            {
              "id": 772,
              "name": "新绛县",
              "parent_id": 143
            },
            {
              "id": 773,
              "name": "绛县",
              "parent_id": 143
            },
            {
              "id": 774,
              "name": "垣曲县",
              "parent_id": 143
            },
            {
              "id": 775,
              "name": "夏县",
              "parent_id": 143
            },
            {
              "id": 776,
              "name": "平陆县",
              "parent_id": 143
            },
            {
              "id": 777,
              "name": "芮城县",
              "parent_id": 143
            },
            {
              "id": 778,
              "name": "永济市",
              "parent_id": 143
            },
            {
              "id": 779,
              "name": "河津市",
              "parent_id": 143
            }
          ]
        },
        {
          "id": 144,
          "name": "忻州市",
          "parent_id": 6,
          "child": [
            {
              "id": 780,
              "name": "忻府区",
              "parent_id": 144
            },
            {
              "id": 781,
              "name": "定襄县",
              "parent_id": 144
            },
            {
              "id": 782,
              "name": "五台县",
              "parent_id": 144
            },
            {
              "id": 783,
              "name": "代县",
              "parent_id": 144
            },
            {
              "id": 784,
              "name": "繁峙县",
              "parent_id": 144
            },
            {
              "id": 785,
              "name": "宁武县",
              "parent_id": 144
            },
            {
              "id": 786,
              "name": "静乐县",
              "parent_id": 144
            },
            {
              "id": 787,
              "name": "神池县",
              "parent_id": 144
            },
            {
              "id": 788,
              "name": "五寨县",
              "parent_id": 144
            },
            {
              "id": 789,
              "name": "岢岚县",
              "parent_id": 144
            },
            {
              "id": 790,
              "name": "河曲县",
              "parent_id": 144
            },
            {
              "id": 791,
              "name": "保德县",
              "parent_id": 144
            },
            {
              "id": 792,
              "name": "偏关县",
              "parent_id": 144
            },
            {
              "id": 793,
              "name": "原平市",
              "parent_id": 144
            }
          ]
        },
        {
          "id": 145,
          "name": "临汾市",
          "parent_id": 6,
          "child": [
            {
              "id": 794,
              "name": "尧都区",
              "parent_id": 145
            },
            {
              "id": 795,
              "name": "曲沃县",
              "parent_id": 145
            },
            {
              "id": 796,
              "name": "翼城县",
              "parent_id": 145
            },
            {
              "id": 797,
              "name": "襄汾县",
              "parent_id": 145
            },
            {
              "id": 798,
              "name": "洪洞县",
              "parent_id": 145
            },
            {
              "id": 799,
              "name": "古县",
              "parent_id": 145
            },
            {
              "id": 800,
              "name": "安泽县",
              "parent_id": 145
            },
            {
              "id": 801,
              "name": "浮山县",
              "parent_id": 145
            },
            {
              "id": 802,
              "name": "吉县",
              "parent_id": 145
            },
            {
              "id": 803,
              "name": "乡宁县",
              "parent_id": 145
            },
            {
              "id": 804,
              "name": "大宁县",
              "parent_id": 145
            },
            {
              "id": 805,
              "name": "隰县",
              "parent_id": 145
            },
            {
              "id": 806,
              "name": "永和县",
              "parent_id": 145
            },
            {
              "id": 807,
              "name": "蒲县",
              "parent_id": 145
            },
            {
              "id": 808,
              "name": "汾西县",
              "parent_id": 145
            },
            {
              "id": 809,
              "name": "侯马市",
              "parent_id": 145
            },
            {
              "id": 810,
              "name": "霍州市",
              "parent_id": 145
            }
          ]
        },
        {
          "id": 146,
          "name": "吕梁市",
          "parent_id": 6,
          "child": [
            {
              "id": 811,
              "name": "离石区",
              "parent_id": 146
            },
            {
              "id": 812,
              "name": "文水县",
              "parent_id": 146
            },
            {
              "id": 813,
              "name": "交城县",
              "parent_id": 146
            },
            {
              "id": 814,
              "name": "兴县",
              "parent_id": 146
            },
            {
              "id": 815,
              "name": "临县",
              "parent_id": 146
            },
            {
              "id": 816,
              "name": "柳林县",
              "parent_id": 146
            },
            {
              "id": 817,
              "name": "石楼县",
              "parent_id": 146
            },
            {
              "id": 818,
              "name": "岚县",
              "parent_id": 146
            },
            {
              "id": 819,
              "name": "方山县",
              "parent_id": 146
            },
            {
              "id": 820,
              "name": "中阳县",
              "parent_id": 146
            },
            {
              "id": 821,
              "name": "交口县",
              "parent_id": 146
            },
            {
              "id": 822,
              "name": "孝义市",
              "parent_id": 146
            },
            {
              "id": 823,
              "name": "汾阳市",
              "parent_id": 146
            }
          ]
        }
      ]
    },
    {
      "id": 7,
      "name": "内蒙古自治区",
      "parent_id": 0,
      "child": [
        {
          "id": 147,
          "name": "呼和浩特市",
          "parent_id": 7,
          "child": [
            {
              "id": 824,
              "name": "新城区",
              "parent_id": 147
            },
            {
              "id": 825,
              "name": "回民区",
              "parent_id": 147
            },
            {
              "id": 826,
              "name": "玉泉区",
              "parent_id": 147
            },
            {
              "id": 827,
              "name": "赛罕区",
              "parent_id": 147
            },
            {
              "id": 828,
              "name": "土默特左旗",
              "parent_id": 147
            },
            {
              "id": 829,
              "name": "托克托县",
              "parent_id": 147
            },
            {
              "id": 830,
              "name": "和林格尔县",
              "parent_id": 147
            },
            {
              "id": 831,
              "name": "清水河县",
              "parent_id": 147
            },
            {
              "id": 832,
              "name": "武川县",
              "parent_id": 147
            }
          ]
        },
        {
          "id": 148,
          "name": "包头市",
          "parent_id": 7,
          "child": [
            {
              "id": 833,
              "name": "东河区",
              "parent_id": 148
            },
            {
              "id": 834,
              "name": "昆都仑区",
              "parent_id": 148
            },
            {
              "id": 835,
              "name": "青山区",
              "parent_id": 148
            },
            {
              "id": 836,
              "name": "石拐区",
              "parent_id": 148
            },
            {
              "id": 837,
              "name": "白云区",
              "parent_id": 148
            },
            {
              "id": 838,
              "name": "九原区",
              "parent_id": 148
            },
            {
              "id": 839,
              "name": "土默特右旗",
              "parent_id": 148
            },
            {
              "id": 840,
              "name": "固阳县",
              "parent_id": 148
            },
            {
              "id": 841,
              "name": "达尔罕茂明安旗",
              "parent_id": 148
            }
          ]
        },
        {
          "id": 149,
          "name": "乌海市",
          "parent_id": 7,
          "child": [
            {
              "id": 842,
              "name": "海勃湾区",
              "parent_id": 149
            },
            {
              "id": 843,
              "name": "海南区",
              "parent_id": 149
            },
            {
              "id": 844,
              "name": "乌达区",
              "parent_id": 149
            }
          ]
        },
        {
          "id": 150,
          "name": "赤峰市",
          "parent_id": 7,
          "child": [
            {
              "id": 845,
              "name": "红山区",
              "parent_id": 150
            },
            {
              "id": 846,
              "name": "元宝山区",
              "parent_id": 150
            },
            {
              "id": 847,
              "name": "松山区",
              "parent_id": 150
            },
            {
              "id": 848,
              "name": "阿鲁科尔沁旗",
              "parent_id": 150
            },
            {
              "id": 849,
              "name": "巴林左旗",
              "parent_id": 150
            },
            {
              "id": 850,
              "name": "巴林右旗",
              "parent_id": 150
            },
            {
              "id": 851,
              "name": "林西县",
              "parent_id": 150
            },
            {
              "id": 852,
              "name": "克什克腾旗",
              "parent_id": 150
            },
            {
              "id": 853,
              "name": "翁牛特旗",
              "parent_id": 150
            },
            {
              "id": 854,
              "name": "喀喇沁旗",
              "parent_id": 150
            },
            {
              "id": 855,
              "name": "宁城县",
              "parent_id": 150
            },
            {
              "id": 856,
              "name": "敖汉旗",
              "parent_id": 150
            }
          ]
        },
        {
          "id": 151,
          "name": "通辽市",
          "parent_id": 7,
          "child": [
            {
              "id": 857,
              "name": "科尔沁区",
              "parent_id": 151
            },
            {
              "id": 858,
              "name": "科尔沁左翼中旗",
              "parent_id": 151
            },
            {
              "id": 859,
              "name": "科尔沁左翼后旗",
              "parent_id": 151
            },
            {
              "id": 860,
              "name": "开鲁县",
              "parent_id": 151
            },
            {
              "id": 861,
              "name": "库伦旗",
              "parent_id": 151
            },
            {
              "id": 862,
              "name": "奈曼旗",
              "parent_id": 151
            },
            {
              "id": 863,
              "name": "扎鲁特旗",
              "parent_id": 151
            },
            {
              "id": 864,
              "name": "霍林郭勒市",
              "parent_id": 151
            }
          ]
        },
        {
          "id": 152,
          "name": "鄂尔多斯市",
          "parent_id": 7,
          "child": [
            {
              "id": 865,
              "name": "东胜区",
              "parent_id": 152
            },
            {
              "id": 866,
              "name": "达拉特旗",
              "parent_id": 152
            },
            {
              "id": 867,
              "name": "准格尔旗",
              "parent_id": 152
            },
            {
              "id": 868,
              "name": "鄂托克前旗",
              "parent_id": 152
            },
            {
              "id": 869,
              "name": "鄂托克旗",
              "parent_id": 152
            },
            {
              "id": 870,
              "name": "杭锦旗",
              "parent_id": 152
            },
            {
              "id": 871,
              "name": "乌审旗",
              "parent_id": 152
            },
            {
              "id": 872,
              "name": "伊金霍洛旗",
              "parent_id": 152
            }
          ]
        },
        {
          "id": 153,
          "name": "呼伦贝尔市",
          "parent_id": 7,
          "child": [
            {
              "id": 873,
              "name": "海拉尔区",
              "parent_id": 153
            },
            {
              "id": 874,
              "name": "阿荣旗",
              "parent_id": 153
            },
            {
              "id": 875,
              "name": "莫力达瓦自治旗",
              "parent_id": 153
            },
            {
              "id": 876,
              "name": "鄂伦春自治旗",
              "parent_id": 153
            },
            {
              "id": 877,
              "name": "鄂温克族自治旗",
              "parent_id": 153
            },
            {
              "id": 878,
              "name": "陈巴尔虎旗",
              "parent_id": 153
            },
            {
              "id": 879,
              "name": "新巴尔虎左旗",
              "parent_id": 153
            },
            {
              "id": 880,
              "name": "新巴尔虎右旗",
              "parent_id": 153
            },
            {
              "id": 881,
              "name": "满洲里市",
              "parent_id": 153
            },
            {
              "id": 882,
              "name": "牙克石市",
              "parent_id": 153
            },
            {
              "id": 883,
              "name": "扎兰屯市",
              "parent_id": 153
            },
            {
              "id": 884,
              "name": "额尔古纳市",
              "parent_id": 153
            },
            {
              "id": 885,
              "name": "根河市",
              "parent_id": 153
            }
          ]
        },
        {
          "id": 154,
          "name": "巴彦淖尔市",
          "parent_id": 7,
          "child": [
            {
              "id": 886,
              "name": "临河区",
              "parent_id": 154
            },
            {
              "id": 887,
              "name": "五原县",
              "parent_id": 154
            },
            {
              "id": 888,
              "name": "磴口县",
              "parent_id": 154
            },
            {
              "id": 889,
              "name": "乌拉特前旗",
              "parent_id": 154
            },
            {
              "id": 890,
              "name": "乌拉特中旗",
              "parent_id": 154
            },
            {
              "id": 891,
              "name": "乌拉特后旗",
              "parent_id": 154
            },
            {
              "id": 892,
              "name": "杭锦后旗",
              "parent_id": 154
            }
          ]
        },
        {
          "id": 155,
          "name": "乌兰察布市",
          "parent_id": 7,
          "child": [
            {
              "id": 893,
              "name": "集宁区",
              "parent_id": 155
            },
            {
              "id": 894,
              "name": "卓资县",
              "parent_id": 155
            },
            {
              "id": 895,
              "name": "化德县",
              "parent_id": 155
            },
            {
              "id": 896,
              "name": "商都县",
              "parent_id": 155
            },
            {
              "id": 897,
              "name": "兴和县",
              "parent_id": 155
            },
            {
              "id": 898,
              "name": "凉城县",
              "parent_id": 155
            },
            {
              "id": 899,
              "name": "察哈尔右翼前旗",
              "parent_id": 155
            },
            {
              "id": 900,
              "name": "察哈尔右翼中旗",
              "parent_id": 155
            },
            {
              "id": 901,
              "name": "察哈尔右翼后旗",
              "parent_id": 155
            },
            {
              "id": 902,
              "name": "四子王旗",
              "parent_id": 155
            },
            {
              "id": 903,
              "name": "丰镇市",
              "parent_id": 155
            }
          ]
        },
        {
          "id": 156,
          "name": "兴安盟",
          "parent_id": 7,
          "child": [
            {
              "id": 904,
              "name": "乌兰浩特市",
              "parent_id": 156
            },
            {
              "id": 905,
              "name": "阿尔山市",
              "parent_id": 156
            },
            {
              "id": 906,
              "name": "科尔沁右翼前旗",
              "parent_id": 156
            },
            {
              "id": 907,
              "name": "科尔沁右翼中旗",
              "parent_id": 156
            },
            {
              "id": 908,
              "name": "扎赉特旗",
              "parent_id": 156
            },
            {
              "id": 909,
              "name": "突泉县",
              "parent_id": 156
            }
          ]
        },
        {
          "id": 157,
          "name": "锡林郭勒盟",
          "parent_id": 7,
          "child": [
            {
              "id": 910,
              "name": "二连浩特市",
              "parent_id": 157
            },
            {
              "id": 911,
              "name": "锡林浩特市",
              "parent_id": 157
            },
            {
              "id": 912,
              "name": "阿巴嘎旗",
              "parent_id": 157
            },
            {
              "id": 913,
              "name": "苏尼特左旗",
              "parent_id": 157
            },
            {
              "id": 914,
              "name": "苏尼特右旗",
              "parent_id": 157
            },
            {
              "id": 915,
              "name": "东乌珠穆沁旗",
              "parent_id": 157
            },
            {
              "id": 916,
              "name": "西乌珠穆沁旗",
              "parent_id": 157
            },
            {
              "id": 917,
              "name": "太仆寺旗",
              "parent_id": 157
            },
            {
              "id": 918,
              "name": "镶黄旗",
              "parent_id": 157
            },
            {
              "id": 919,
              "name": "正镶白旗",
              "parent_id": 157
            },
            {
              "id": 920,
              "name": "正蓝旗",
              "parent_id": 157
            },
            {
              "id": 921,
              "name": "多伦县",
              "parent_id": 157
            }
          ]
        },
        {
          "id": 158,
          "name": "阿拉善盟",
          "parent_id": 7,
          "child": [
            {
              "id": 922,
              "name": "阿拉善左旗",
              "parent_id": 158
            },
            {
              "id": 923,
              "name": "阿拉善右旗",
              "parent_id": 158
            },
            {
              "id": 924,
              "name": "额济纳旗",
              "parent_id": 158
            }
          ]
        }
      ]
    },
    {
      "id": 8,
      "name": "辽宁省",
      "parent_id": 0,
      "child": [
        {
          "id": 159,
          "name": "沈阳市",
          "parent_id": 8,
          "child": [
            {
              "id": 925,
              "name": "和平区",
              "parent_id": 159
            },
            {
              "id": 926,
              "name": "沈河区",
              "parent_id": 159
            },
            {
              "id": 927,
              "name": "大东区",
              "parent_id": 159
            },
            {
              "id": 928,
              "name": "皇姑区",
              "parent_id": 159
            },
            {
              "id": 929,
              "name": "铁西区",
              "parent_id": 159
            },
            {
              "id": 930,
              "name": "苏家屯区",
              "parent_id": 159
            },
            {
              "id": 931,
              "name": "浑南区",
              "parent_id": 159
            },
            {
              "id": 932,
              "name": "沈北新区",
              "parent_id": 159
            },
            {
              "id": 933,
              "name": "于洪区",
              "parent_id": 159
            },
            {
              "id": 934,
              "name": "辽中县",
              "parent_id": 159
            },
            {
              "id": 935,
              "name": "康平县",
              "parent_id": 159
            },
            {
              "id": 936,
              "name": "法库县",
              "parent_id": 159
            },
            {
              "id": 937,
              "name": "新民市",
              "parent_id": 159
            }
          ]
        },
        {
          "id": 160,
          "name": "大连市",
          "parent_id": 8,
          "child": [
            {
              "id": 938,
              "name": "中山区",
              "parent_id": 160
            },
            {
              "id": 939,
              "name": "西岗区",
              "parent_id": 160
            },
            {
              "id": 940,
              "name": "沙河口区",
              "parent_id": 160
            },
            {
              "id": 941,
              "name": "甘井子区",
              "parent_id": 160
            },
            {
              "id": 942,
              "name": "旅顺口区",
              "parent_id": 160
            },
            {
              "id": 943,
              "name": "金州区",
              "parent_id": 160
            },
            {
              "id": 944,
              "name": "长海县",
              "parent_id": 160
            },
            {
              "id": 945,
              "name": "瓦房店市",
              "parent_id": 160
            },
            {
              "id": 946,
              "name": "普兰店市",
              "parent_id": 160
            },
            {
              "id": 947,
              "name": "庄河市",
              "parent_id": 160
            }
          ]
        },
        {
          "id": 161,
          "name": "鞍山市",
          "parent_id": 8,
          "child": [
            {
              "id": 948,
              "name": "铁东区",
              "parent_id": 161
            },
            {
              "id": 949,
              "name": "铁西区",
              "parent_id": 161
            },
            {
              "id": 950,
              "name": "立山区",
              "parent_id": 161
            },
            {
              "id": 951,
              "name": "千山区",
              "parent_id": 161
            },
            {
              "id": 952,
              "name": "台安县",
              "parent_id": 161
            },
            {
              "id": 953,
              "name": "岫岩自治县",
              "parent_id": 161
            },
            {
              "id": 954,
              "name": "海城市",
              "parent_id": 161
            }
          ]
        },
        {
          "id": 162,
          "name": "抚顺市",
          "parent_id": 8,
          "child": [
            {
              "id": 955,
              "name": "新抚区",
              "parent_id": 162
            },
            {
              "id": 956,
              "name": "东洲区",
              "parent_id": 162
            },
            {
              "id": 957,
              "name": "望花区",
              "parent_id": 162
            },
            {
              "id": 958,
              "name": "顺城区",
              "parent_id": 162
            },
            {
              "id": 959,
              "name": "抚顺县",
              "parent_id": 162
            },
            {
              "id": 960,
              "name": "新宾自治县",
              "parent_id": 162
            },
            {
              "id": 961,
              "name": "清原自治县",
              "parent_id": 162
            }
          ]
        },
        {
          "id": 163,
          "name": "本溪市",
          "parent_id": 8,
          "child": [
            {
              "id": 962,
              "name": "平山区",
              "parent_id": 163
            },
            {
              "id": 963,
              "name": "溪湖区",
              "parent_id": 163
            },
            {
              "id": 964,
              "name": "明山区",
              "parent_id": 163
            },
            {
              "id": 965,
              "name": "南芬区",
              "parent_id": 163
            },
            {
              "id": 966,
              "name": "本溪自治县",
              "parent_id": 163
            },
            {
              "id": 967,
              "name": "桓仁自治县",
              "parent_id": 163
            }
          ]
        },
        {
          "id": 164,
          "name": "丹东市",
          "parent_id": 8,
          "child": [
            {
              "id": 968,
              "name": "元宝区",
              "parent_id": 164
            },
            {
              "id": 969,
              "name": "振兴区",
              "parent_id": 164
            },
            {
              "id": 970,
              "name": "振安区",
              "parent_id": 164
            },
            {
              "id": 971,
              "name": "宽甸自治县",
              "parent_id": 164
            },
            {
              "id": 972,
              "name": "东港市",
              "parent_id": 164
            },
            {
              "id": 973,
              "name": "凤城市",
              "parent_id": 164
            }
          ]
        },
        {
          "id": 165,
          "name": "锦州市",
          "parent_id": 8,
          "child": [
            {
              "id": 974,
              "name": "古塔区",
              "parent_id": 165
            },
            {
              "id": 975,
              "name": "凌河区",
              "parent_id": 165
            },
            {
              "id": 976,
              "name": "太和区",
              "parent_id": 165
            },
            {
              "id": 977,
              "name": "黑山县",
              "parent_id": 165
            },
            {
              "id": 978,
              "name": "义县",
              "parent_id": 165
            },
            {
              "id": 979,
              "name": "凌海市",
              "parent_id": 165
            },
            {
              "id": 980,
              "name": "北镇市",
              "parent_id": 165
            }
          ]
        },
        {
          "id": 166,
          "name": "营口市",
          "parent_id": 8,
          "child": [
            {
              "id": 981,
              "name": "站前区",
              "parent_id": 166
            },
            {
              "id": 982,
              "name": "西市区",
              "parent_id": 166
            },
            {
              "id": 983,
              "name": "鲅鱼圈区",
              "parent_id": 166
            },
            {
              "id": 984,
              "name": "老边区",
              "parent_id": 166
            },
            {
              "id": 985,
              "name": "盖州市",
              "parent_id": 166
            },
            {
              "id": 986,
              "name": "大石桥市",
              "parent_id": 166
            }
          ]
        },
        {
          "id": 167,
          "name": "阜新市",
          "parent_id": 8,
          "child": [
            {
              "id": 987,
              "name": "海州区",
              "parent_id": 167
            },
            {
              "id": 988,
              "name": "新邱区",
              "parent_id": 167
            },
            {
              "id": 989,
              "name": "太平区",
              "parent_id": 167
            },
            {
              "id": 990,
              "name": "清河门区",
              "parent_id": 167
            },
            {
              "id": 991,
              "name": "细河区",
              "parent_id": 167
            },
            {
              "id": 992,
              "name": "阜新自治县",
              "parent_id": 167
            },
            {
              "id": 993,
              "name": "彰武县",
              "parent_id": 167
            }
          ]
        },
        {
          "id": 168,
          "name": "辽阳市",
          "parent_id": 8,
          "child": [
            {
              "id": 994,
              "name": "白塔区",
              "parent_id": 168
            },
            {
              "id": 995,
              "name": "文圣区",
              "parent_id": 168
            },
            {
              "id": 996,
              "name": "宏伟区",
              "parent_id": 168
            },
            {
              "id": 997,
              "name": "弓长岭区",
              "parent_id": 168
            },
            {
              "id": 998,
              "name": "辽阳县",
              "parent_id": 168
            },
            {
              "id": 999,
              "name": "灯塔市",
              "parent_id": 168
            },
            {
              "id": 1000,
              "name": "太子河区",
              "parent_id": 168
            }
          ]
        },
        {
          "id": 169,
          "name": "盘锦市",
          "parent_id": 8,
          "child": [
            {
              "id": 1001,
              "name": "双台子区",
              "parent_id": 169
            },
            {
              "id": 1002,
              "name": "兴隆台区",
              "parent_id": 169
            },
            {
              "id": 1003,
              "name": "大洼县",
              "parent_id": 169
            },
            {
              "id": 1004,
              "name": "盘山县",
              "parent_id": 169
            }
          ]
        },
        {
          "id": 170,
          "name": "铁岭市",
          "parent_id": 8,
          "child": [
            {
              "id": 1005,
              "name": "银州区",
              "parent_id": 170
            },
            {
              "id": 1006,
              "name": "清河区",
              "parent_id": 170
            },
            {
              "id": 1007,
              "name": "铁岭县",
              "parent_id": 170
            },
            {
              "id": 1008,
              "name": "西丰县",
              "parent_id": 170
            },
            {
              "id": 1009,
              "name": "昌图县",
              "parent_id": 170
            },
            {
              "id": 1010,
              "name": "调兵山市",
              "parent_id": 170
            },
            {
              "id": 1011,
              "name": "开原市",
              "parent_id": 170
            }
          ]
        },
        {
          "id": 171,
          "name": "朝阳市",
          "parent_id": 8,
          "child": [
            {
              "id": 1012,
              "name": "双塔区",
              "parent_id": 171
            },
            {
              "id": 1013,
              "name": "龙城区",
              "parent_id": 171
            },
            {
              "id": 1014,
              "name": "朝阳县",
              "parent_id": 171
            },
            {
              "id": 1015,
              "name": "建平县",
              "parent_id": 171
            },
            {
              "id": 1016,
              "name": "喀喇沁左翼自治县",
              "parent_id": 171
            },
            {
              "id": 1017,
              "name": "北票市",
              "parent_id": 171
            },
            {
              "id": 1018,
              "name": "凌源市",
              "parent_id": 171
            }
          ]
        },
        {
          "id": 172,
          "name": "葫芦岛市",
          "parent_id": 8,
          "child": [
            {
              "id": 1019,
              "name": "连山区",
              "parent_id": 172
            },
            {
              "id": 1020,
              "name": "龙港区",
              "parent_id": 172
            },
            {
              "id": 1021,
              "name": "南票区",
              "parent_id": 172
            },
            {
              "id": 1022,
              "name": "绥中县",
              "parent_id": 172
            },
            {
              "id": 1023,
              "name": "建昌县",
              "parent_id": 172
            },
            {
              "id": 1024,
              "name": "兴城市",
              "parent_id": 172
            }
          ]
        }
      ]
    },
    {
      "id": 9,
      "name": "吉林省",
      "parent_id": 0,
      "child": [
        {
          "id": 173,
          "name": "长春市",
          "parent_id": 9,
          "child": [
            {
              "id": 1025,
              "name": "南关区",
              "parent_id": 173
            },
            {
              "id": 1026,
              "name": "宽城区",
              "parent_id": 173
            },
            {
              "id": 1027,
              "name": "朝阳区",
              "parent_id": 173
            },
            {
              "id": 1028,
              "name": "二道区",
              "parent_id": 173
            },
            {
              "id": 1029,
              "name": "绿园区",
              "parent_id": 173
            },
            {
              "id": 1030,
              "name": "双阳区",
              "parent_id": 173
            },
            {
              "id": 1031,
              "name": "农安县",
              "parent_id": 173
            },
            {
              "id": 1032,
              "name": "九台区",
              "parent_id": 173
            },
            {
              "id": 1033,
              "name": "榆树市",
              "parent_id": 173
            },
            {
              "id": 1034,
              "name": "德惠市",
              "parent_id": 173
            }
          ]
        },
        {
          "id": 174,
          "name": "吉林市",
          "parent_id": 9,
          "child": [
            {
              "id": 1035,
              "name": "昌邑区",
              "parent_id": 174
            },
            {
              "id": 1036,
              "name": "龙潭区",
              "parent_id": 174
            },
            {
              "id": 1037,
              "name": "船营区",
              "parent_id": 174
            },
            {
              "id": 1038,
              "name": "丰满区",
              "parent_id": 174
            },
            {
              "id": 1039,
              "name": "永吉县",
              "parent_id": 174
            },
            {
              "id": 1040,
              "name": "桦甸市",
              "parent_id": 174
            },
            {
              "id": 1041,
              "name": "蛟河市",
              "parent_id": 174
            },
            {
              "id": 1042,
              "name": "舒兰市",
              "parent_id": 174
            },
            {
              "id": 1043,
              "name": "磐石市",
              "parent_id": 174
            }
          ]
        },
        {
          "id": 175,
          "name": "四平市",
          "parent_id": 9,
          "child": [
            {
              "id": 1044,
              "name": "铁西区",
              "parent_id": 175
            },
            {
              "id": 1045,
              "name": "铁东区",
              "parent_id": 175
            },
            {
              "id": 1046,
              "name": "梨树县",
              "parent_id": 175
            },
            {
              "id": 1047,
              "name": "伊通自治县",
              "parent_id": 175
            },
            {
              "id": 1048,
              "name": "公主岭市",
              "parent_id": 175
            },
            {
              "id": 1049,
              "name": "双辽市",
              "parent_id": 175
            }
          ]
        },
        {
          "id": 176,
          "name": "辽源市",
          "parent_id": 9,
          "child": [
            {
              "id": 1050,
              "name": "龙山区",
              "parent_id": 176
            },
            {
              "id": 1051,
              "name": "西安区",
              "parent_id": 176
            },
            {
              "id": 1052,
              "name": "东丰县",
              "parent_id": 176
            },
            {
              "id": 1053,
              "name": "东辽县",
              "parent_id": 176
            }
          ]
        },
        {
          "id": 177,
          "name": "通化市",
          "parent_id": 9,
          "child": [
            {
              "id": 1054,
              "name": "东昌区",
              "parent_id": 177
            },
            {
              "id": 1055,
              "name": "二道江区",
              "parent_id": 177
            },
            {
              "id": 1056,
              "name": "通化县",
              "parent_id": 177
            },
            {
              "id": 1057,
              "name": "辉南县",
              "parent_id": 177
            },
            {
              "id": 1058,
              "name": "柳河县",
              "parent_id": 177
            },
            {
              "id": 1059,
              "name": "梅河口市",
              "parent_id": 177
            },
            {
              "id": 1060,
              "name": "集安市",
              "parent_id": 177
            }
          ]
        },
        {
          "id": 178,
          "name": "白山市",
          "parent_id": 9,
          "child": [
            {
              "id": 1061,
              "name": "浑江区",
              "parent_id": 178
            },
            {
              "id": 1062,
              "name": "江源区",
              "parent_id": 178
            },
            {
              "id": 1063,
              "name": "抚松县",
              "parent_id": 178
            },
            {
              "id": 1064,
              "name": "靖宇县",
              "parent_id": 178
            },
            {
              "id": 1065,
              "name": "长白自治县",
              "parent_id": 178
            },
            {
              "id": 1066,
              "name": "临江市",
              "parent_id": 178
            }
          ]
        },
        {
          "id": 179,
          "name": "松原市",
          "parent_id": 9,
          "child": [
            {
              "id": 1067,
              "name": "宁江区",
              "parent_id": 179
            },
            {
              "id": 1068,
              "name": "前郭尔罗斯自治县",
              "parent_id": 179
            },
            {
              "id": 1069,
              "name": "长岭县",
              "parent_id": 179
            },
            {
              "id": 1070,
              "name": "乾安县",
              "parent_id": 179
            },
            {
              "id": 1071,
              "name": "扶余市",
              "parent_id": 179
            }
          ]
        },
        {
          "id": 180,
          "name": "白城市",
          "parent_id": 9,
          "child": [
            {
              "id": 1072,
              "name": "洮北区",
              "parent_id": 180
            },
            {
              "id": 1073,
              "name": "镇赉县",
              "parent_id": 180
            },
            {
              "id": 1074,
              "name": "洮南市",
              "parent_id": 180
            },
            {
              "id": 1075,
              "name": "大安市",
              "parent_id": 180
            },
            {
              "id": 1076,
              "name": "通榆县",
              "parent_id": 180
            }
          ]
        },
        {
          "id": 181,
          "name": "延边自治州",
          "parent_id": 9,
          "child": [
            {
              "id": 1077,
              "name": "延吉市",
              "parent_id": 181
            },
            {
              "id": 1078,
              "name": "图们市",
              "parent_id": 181
            },
            {
              "id": 1079,
              "name": "敦化市",
              "parent_id": 181
            },
            {
              "id": 1080,
              "name": "珲春市",
              "parent_id": 181
            },
            {
              "id": 1081,
              "name": "龙井市",
              "parent_id": 181
            },
            {
              "id": 1082,
              "name": "和龙市",
              "parent_id": 181
            },
            {
              "id": 1083,
              "name": "汪清县",
              "parent_id": 181
            },
            {
              "id": 1084,
              "name": "安图县",
              "parent_id": 181
            }
          ]
        }
      ]
    },
    {
      "id": 10,
      "name": "黑龙江省",
      "parent_id": 0,
      "child": [
        {
          "id": 182,
          "name": "哈尔滨市",
          "parent_id": 10,
          "child": [
            {
              "id": 1085,
              "name": "道里区",
              "parent_id": 182
            },
            {
              "id": 1086,
              "name": "南岗区",
              "parent_id": 182
            },
            {
              "id": 1087,
              "name": "道外区",
              "parent_id": 182
            },
            {
              "id": 1088,
              "name": "平房区",
              "parent_id": 182
            },
            {
              "id": 1089,
              "name": "松北区",
              "parent_id": 182
            },
            {
              "id": 1090,
              "name": "香坊区",
              "parent_id": 182
            },
            {
              "id": 1091,
              "name": "呼兰区",
              "parent_id": 182
            },
            {
              "id": 1092,
              "name": "阿城区",
              "parent_id": 182
            },
            {
              "id": 1093,
              "name": "依兰县",
              "parent_id": 182
            },
            {
              "id": 1094,
              "name": "方正县",
              "parent_id": 182
            },
            {
              "id": 1095,
              "name": "宾县",
              "parent_id": 182
            },
            {
              "id": 1096,
              "name": "巴彦县",
              "parent_id": 182
            },
            {
              "id": 1097,
              "name": "木兰县",
              "parent_id": 182
            },
            {
              "id": 1098,
              "name": "通河县",
              "parent_id": 182
            },
            {
              "id": 1099,
              "name": "延寿县",
              "parent_id": 182
            },
            {
              "id": 1100,
              "name": "双城区",
              "parent_id": 182
            },
            {
              "id": 1101,
              "name": "尚志市",
              "parent_id": 182
            },
            {
              "id": 1102,
              "name": "五常市",
              "parent_id": 182
            }
          ]
        },
        {
          "id": 183,
          "name": "齐齐哈尔市",
          "parent_id": 10,
          "child": [
            {
              "id": 1103,
              "name": "龙沙区",
              "parent_id": 183
            },
            {
              "id": 1104,
              "name": "建华区",
              "parent_id": 183
            },
            {
              "id": 1105,
              "name": "铁锋区",
              "parent_id": 183
            },
            {
              "id": 1106,
              "name": "昂昂溪区",
              "parent_id": 183
            },
            {
              "id": 1107,
              "name": "富拉尔基区",
              "parent_id": 183
            },
            {
              "id": 1108,
              "name": "碾子山区",
              "parent_id": 183
            },
            {
              "id": 1109,
              "name": "梅里斯区",
              "parent_id": 183
            },
            {
              "id": 1110,
              "name": "龙江县",
              "parent_id": 183
            },
            {
              "id": 1111,
              "name": "依安县",
              "parent_id": 183
            },
            {
              "id": 1112,
              "name": "泰来县",
              "parent_id": 183
            },
            {
              "id": 1113,
              "name": "甘南县",
              "parent_id": 183
            },
            {
              "id": 1114,
              "name": "富裕县",
              "parent_id": 183
            },
            {
              "id": 1115,
              "name": "克山县",
              "parent_id": 183
            },
            {
              "id": 1116,
              "name": "克东县",
              "parent_id": 183
            },
            {
              "id": 1117,
              "name": "拜泉县",
              "parent_id": 183
            },
            {
              "id": 1118,
              "name": "讷河市",
              "parent_id": 183
            }
          ]
        },
        {
          "id": 184,
          "name": "鸡西市",
          "parent_id": 10,
          "child": [
            {
              "id": 1119,
              "name": "鸡冠区",
              "parent_id": 184
            },
            {
              "id": 1120,
              "name": "恒山区",
              "parent_id": 184
            },
            {
              "id": 1121,
              "name": "滴道区",
              "parent_id": 184
            },
            {
              "id": 1122,
              "name": "梨树区",
              "parent_id": 184
            },
            {
              "id": 1123,
              "name": "城子河区",
              "parent_id": 184
            },
            {
              "id": 1124,
              "name": "麻山区",
              "parent_id": 184
            },
            {
              "id": 1125,
              "name": "鸡东县",
              "parent_id": 184
            },
            {
              "id": 1126,
              "name": "虎林市",
              "parent_id": 184
            },
            {
              "id": 1127,
              "name": "密山市",
              "parent_id": 184
            }
          ]
        },
        {
          "id": 185,
          "name": "鹤岗市",
          "parent_id": 10,
          "child": [
            {
              "id": 1128,
              "name": "向阳区",
              "parent_id": 185
            },
            {
              "id": 1129,
              "name": "工农区",
              "parent_id": 185
            },
            {
              "id": 1130,
              "name": "南山区",
              "parent_id": 185
            },
            {
              "id": 1131,
              "name": "兴安区",
              "parent_id": 185
            },
            {
              "id": 1132,
              "name": "东山区",
              "parent_id": 185
            },
            {
              "id": 1133,
              "name": "兴山区",
              "parent_id": 185
            },
            {
              "id": 1134,
              "name": "萝北县",
              "parent_id": 185
            },
            {
              "id": 1135,
              "name": "绥滨县",
              "parent_id": 185
            }
          ]
        },
        {
          "id": 186,
          "name": "双鸭山市",
          "parent_id": 10,
          "child": [
            {
              "id": 1136,
              "name": "尖山区",
              "parent_id": 186
            },
            {
              "id": 1137,
              "name": "岭东区",
              "parent_id": 186
            },
            {
              "id": 1138,
              "name": "四方台区",
              "parent_id": 186
            },
            {
              "id": 1139,
              "name": "宝山区",
              "parent_id": 186
            },
            {
              "id": 1140,
              "name": "集贤县",
              "parent_id": 186
            },
            {
              "id": 1141,
              "name": "友谊县",
              "parent_id": 186
            },
            {
              "id": 1142,
              "name": "宝清县",
              "parent_id": 186
            },
            {
              "id": 1143,
              "name": "饶河县",
              "parent_id": 186
            }
          ]
        },
        {
          "id": 187,
          "name": "大庆市",
          "parent_id": 10,
          "child": [
            {
              "id": 1144,
              "name": "萨尔图区",
              "parent_id": 187
            },
            {
              "id": 1145,
              "name": "龙凤区",
              "parent_id": 187
            },
            {
              "id": 1146,
              "name": "让胡路区",
              "parent_id": 187
            },
            {
              "id": 1147,
              "name": "红岗区",
              "parent_id": 187
            },
            {
              "id": 1148,
              "name": "大同区",
              "parent_id": 187
            },
            {
              "id": 1149,
              "name": "肇州县",
              "parent_id": 187
            },
            {
              "id": 1150,
              "name": "肇源县",
              "parent_id": 187
            },
            {
              "id": 1151,
              "name": "林甸县",
              "parent_id": 187
            },
            {
              "id": 1152,
              "name": "杜尔伯特自治县",
              "parent_id": 187
            }
          ]
        },
        {
          "id": 188,
          "name": "伊春市",
          "parent_id": 10,
          "child": [
            {
              "id": 1153,
              "name": "伊春区",
              "parent_id": 188
            },
            {
              "id": 1154,
              "name": "南岔区",
              "parent_id": 188
            },
            {
              "id": 1155,
              "name": "友好区",
              "parent_id": 188
            },
            {
              "id": 1156,
              "name": "西林区",
              "parent_id": 188
            },
            {
              "id": 1157,
              "name": "翠峦区",
              "parent_id": 188
            },
            {
              "id": 1158,
              "name": "新青区",
              "parent_id": 188
            },
            {
              "id": 1159,
              "name": "美溪区",
              "parent_id": 188
            },
            {
              "id": 1160,
              "name": "金山屯区",
              "parent_id": 188
            },
            {
              "id": 1161,
              "name": "五营区",
              "parent_id": 188
            },
            {
              "id": 1162,
              "name": "乌马河区",
              "parent_id": 188
            },
            {
              "id": 1163,
              "name": "汤旺河区",
              "parent_id": 188
            },
            {
              "id": 1164,
              "name": "带岭区",
              "parent_id": 188
            },
            {
              "id": 1165,
              "name": "乌伊岭区",
              "parent_id": 188
            },
            {
              "id": 1166,
              "name": "红星区",
              "parent_id": 188
            },
            {
              "id": 1167,
              "name": "上甘岭区",
              "parent_id": 188
            },
            {
              "id": 1168,
              "name": "嘉荫县",
              "parent_id": 188
            },
            {
              "id": 1169,
              "name": "铁力市",
              "parent_id": 188
            }
          ]
        },
        {
          "id": 189,
          "name": "佳木斯市",
          "parent_id": 10,
          "child": [
            {
              "id": 1170,
              "name": "向阳区",
              "parent_id": 189
            },
            {
              "id": 1171,
              "name": "前进区",
              "parent_id": 189
            },
            {
              "id": 1172,
              "name": "东风区",
              "parent_id": 189
            },
            {
              "id": 1173,
              "name": "郊区",
              "parent_id": 189
            },
            {
              "id": 1174,
              "name": "桦南县",
              "parent_id": 189
            },
            {
              "id": 1175,
              "name": "桦川县",
              "parent_id": 189
            },
            {
              "id": 1176,
              "name": "汤原县",
              "parent_id": 189
            },
            {
              "id": 1177,
              "name": "抚远县",
              "parent_id": 189
            },
            {
              "id": 1178,
              "name": "同江市",
              "parent_id": 189
            },
            {
              "id": 1179,
              "name": "富锦市",
              "parent_id": 189
            }
          ]
        },
        {
          "id": 190,
          "name": "七台河市",
          "parent_id": 10,
          "child": [
            {
              "id": 1180,
              "name": "新兴区",
              "parent_id": 190
            },
            {
              "id": 1181,
              "name": "桃山区",
              "parent_id": 190
            },
            {
              "id": 1182,
              "name": "茄子河区",
              "parent_id": 190
            },
            {
              "id": 1183,
              "name": "勃利县",
              "parent_id": 190
            }
          ]
        },
        {
          "id": 191,
          "name": "牡丹江市",
          "parent_id": 10,
          "child": [
            {
              "id": 1184,
              "name": "东安区",
              "parent_id": 191
            },
            {
              "id": 1185,
              "name": "阳明区",
              "parent_id": 191
            },
            {
              "id": 1186,
              "name": "爱民区",
              "parent_id": 191
            },
            {
              "id": 1187,
              "name": "西安区",
              "parent_id": 191
            },
            {
              "id": 1188,
              "name": "东宁县",
              "parent_id": 191
            },
            {
              "id": 1189,
              "name": "林口县",
              "parent_id": 191
            },
            {
              "id": 1190,
              "name": "绥芬河市",
              "parent_id": 191
            },
            {
              "id": 1191,
              "name": "海林市",
              "parent_id": 191
            },
            {
              "id": 1192,
              "name": "宁安市",
              "parent_id": 191
            },
            {
              "id": 1193,
              "name": "穆棱市",
              "parent_id": 191
            }
          ]
        },
        {
          "id": 192,
          "name": "黑河市",
          "parent_id": 10,
          "child": [
            {
              "id": 1194,
              "name": "爱辉区",
              "parent_id": 192
            },
            {
              "id": 1195,
              "name": "嫩江县",
              "parent_id": 192
            },
            {
              "id": 1196,
              "name": "逊克县",
              "parent_id": 192
            },
            {
              "id": 1197,
              "name": "孙吴县",
              "parent_id": 192
            },
            {
              "id": 1198,
              "name": "北安市",
              "parent_id": 192
            },
            {
              "id": 1199,
              "name": "五大连池市",
              "parent_id": 192
            }
          ]
        },
        {
          "id": 193,
          "name": "绥化市",
          "parent_id": 10,
          "child": [
            {
              "id": 1200,
              "name": "北林区",
              "parent_id": 193
            },
            {
              "id": 1201,
              "name": "望奎县",
              "parent_id": 193
            },
            {
              "id": 1202,
              "name": "兰西县",
              "parent_id": 193
            },
            {
              "id": 1203,
              "name": "青冈县",
              "parent_id": 193
            },
            {
              "id": 1204,
              "name": "庆安县",
              "parent_id": 193
            },
            {
              "id": 1205,
              "name": "明水县",
              "parent_id": 193
            },
            {
              "id": 1206,
              "name": "绥棱县",
              "parent_id": 193
            },
            {
              "id": 1207,
              "name": "安达市",
              "parent_id": 193
            },
            {
              "id": 1208,
              "name": "肇东市",
              "parent_id": 193
            },
            {
              "id": 1209,
              "name": "海伦市",
              "parent_id": 193
            }
          ]
        },
        {
          "id": 194,
          "name": "大兴安岭地区",
          "parent_id": 10,
          "child": [
            {
              "id": 1210,
              "name": "加格达奇区",
              "parent_id": 194
            },
            {
              "id": 1211,
              "name": "松岭区",
              "parent_id": 194
            },
            {
              "id": 1212,
              "name": "新林区",
              "parent_id": 194
            },
            {
              "id": 1213,
              "name": "呼中区",
              "parent_id": 194
            },
            {
              "id": 1214,
              "name": "呼玛县",
              "parent_id": 194
            },
            {
              "id": 1215,
              "name": "塔河县",
              "parent_id": 194
            },
            {
              "id": 1216,
              "name": "漠河县",
              "parent_id": 194
            }
          ]
        }
      ]
    },
    {
      "id": 11,
      "name": "江苏省",
      "parent_id": 0,
      "child": [
        {
          "id": 195,
          "name": "南京市",
          "parent_id": 11,
          "child": [
            {
              "id": 1217,
              "name": "玄武区",
              "parent_id": 195
            },
            {
              "id": 1218,
              "name": "秦淮区",
              "parent_id": 195
            },
            {
              "id": 1219,
              "name": "建邺区",
              "parent_id": 195
            },
            {
              "id": 1220,
              "name": "鼓楼区",
              "parent_id": 195
            },
            {
              "id": 1221,
              "name": "浦口区",
              "parent_id": 195
            },
            {
              "id": 1222,
              "name": "栖霞区",
              "parent_id": 195
            },
            {
              "id": 1223,
              "name": "雨花台区",
              "parent_id": 195
            },
            {
              "id": 1224,
              "name": "江宁区",
              "parent_id": 195
            },
            {
              "id": 1225,
              "name": "六合区",
              "parent_id": 195
            },
            {
              "id": 1226,
              "name": "溧水区",
              "parent_id": 195
            },
            {
              "id": 1227,
              "name": "高淳区",
              "parent_id": 195
            }
          ]
        },
        {
          "id": 196,
          "name": "无锡市",
          "parent_id": 11,
          "child": [
            {
              "id": 1228,
              "name": "崇安区",
              "parent_id": 196
            },
            {
              "id": 1229,
              "name": "南长区",
              "parent_id": 196
            },
            {
              "id": 1230,
              "name": "北塘区",
              "parent_id": 196
            },
            {
              "id": 1231,
              "name": "锡山区",
              "parent_id": 196
            },
            {
              "id": 1232,
              "name": "惠山区",
              "parent_id": 196
            },
            {
              "id": 1233,
              "name": "滨湖区",
              "parent_id": 196
            },
            {
              "id": 1234,
              "name": "江阴市",
              "parent_id": 196
            },
            {
              "id": 1235,
              "name": "宜兴市",
              "parent_id": 196
            }
          ]
        },
        {
          "id": 197,
          "name": "徐州市",
          "parent_id": 11,
          "child": [
            {
              "id": 1236,
              "name": "鼓楼区",
              "parent_id": 197
            },
            {
              "id": 1237,
              "name": "云龙区",
              "parent_id": 197
            },
            {
              "id": 1238,
              "name": "贾汪区",
              "parent_id": 197
            },
            {
              "id": 1239,
              "name": "泉山区",
              "parent_id": 197
            },
            {
              "id": 1240,
              "name": "铜山区",
              "parent_id": 197
            },
            {
              "id": 1241,
              "name": "丰县",
              "parent_id": 197
            },
            {
              "id": 1242,
              "name": "沛县",
              "parent_id": 197
            },
            {
              "id": 1243,
              "name": "睢宁县",
              "parent_id": 197
            },
            {
              "id": 1244,
              "name": "新沂市",
              "parent_id": 197
            },
            {
              "id": 1245,
              "name": "邳州市",
              "parent_id": 197
            }
          ]
        },
        {
          "id": 198,
          "name": "常州市",
          "parent_id": 11,
          "child": [
            {
              "id": 1246,
              "name": "天宁区",
              "parent_id": 198
            },
            {
              "id": 1247,
              "name": "钟楼区",
              "parent_id": 198
            },
            {
              "id": 1248,
              "name": "戚墅堰区",
              "parent_id": 198
            },
            {
              "id": 1249,
              "name": "新北区",
              "parent_id": 198
            },
            {
              "id": 1250,
              "name": "武进区",
              "parent_id": 198
            },
            {
              "id": 1251,
              "name": "溧阳市",
              "parent_id": 198
            },
            {
              "id": 1252,
              "name": "金坛市",
              "parent_id": 198
            }
          ]
        },
        {
          "id": 199,
          "name": "苏州市",
          "parent_id": 11,
          "child": [
            {
              "id": 1253,
              "name": "虎丘区",
              "parent_id": 199
            },
            {
              "id": 1254,
              "name": "吴中区",
              "parent_id": 199
            },
            {
              "id": 1255,
              "name": "相城区",
              "parent_id": 199
            },
            {
              "id": 1256,
              "name": "姑苏区",
              "parent_id": 199
            },
            {
              "id": 1257,
              "name": "吴江市",
              "parent_id": 199
            },
            {
              "id": 1258,
              "name": "常熟市",
              "parent_id": 199
            },
            {
              "id": 1259,
              "name": "张家港市",
              "parent_id": 199
            },
            {
              "id": 1260,
              "name": "昆山市",
              "parent_id": 199
            },
            {
              "id": 1261,
              "name": "太仓市",
              "parent_id": 199
            }
          ]
        },
        {
          "id": 200,
          "name": "南通市",
          "parent_id": 11,
          "child": [
            {
              "id": 1262,
              "name": "崇川区",
              "parent_id": 200
            },
            {
              "id": 1263,
              "name": "港闸区",
              "parent_id": 200
            },
            {
              "id": 1264,
              "name": "通州区",
              "parent_id": 200
            },
            {
              "id": 1265,
              "name": "海安县",
              "parent_id": 200
            },
            {
              "id": 1266,
              "name": "如东县",
              "parent_id": 200
            },
            {
              "id": 1267,
              "name": "启东市",
              "parent_id": 200
            },
            {
              "id": 1268,
              "name": "如皋市",
              "parent_id": 200
            },
            {
              "id": 1269,
              "name": "海门市",
              "parent_id": 200
            }
          ]
        },
        {
          "id": 201,
          "name": "连云港市",
          "parent_id": 11,
          "child": [
            {
              "id": 1270,
              "name": "连云区",
              "parent_id": 201
            },
            {
              "id": 1272,
              "name": "海州区",
              "parent_id": 201
            },
            {
              "id": 1273,
              "name": "赣榆区",
              "parent_id": 201
            },
            {
              "id": 1274,
              "name": "东海县",
              "parent_id": 201
            },
            {
              "id": 1275,
              "name": "灌云县",
              "parent_id": 201
            },
            {
              "id": 1276,
              "name": "灌南县",
              "parent_id": 201
            }
          ]
        },
        {
          "id": 202,
          "name": "淮安市",
          "parent_id": 11,
          "child": [
            {
              "id": 1277,
              "name": "清河区",
              "parent_id": 202
            },
            {
              "id": 1278,
              "name": "淮安区",
              "parent_id": 202
            },
            {
              "id": 1279,
              "name": "淮阴区",
              "parent_id": 202
            },
            {
              "id": 1280,
              "name": "清浦区",
              "parent_id": 202
            },
            {
              "id": 1281,
              "name": "涟水县",
              "parent_id": 202
            },
            {
              "id": 1282,
              "name": "洪泽县",
              "parent_id": 202
            },
            {
              "id": 1283,
              "name": "盱眙县",
              "parent_id": 202
            },
            {
              "id": 1284,
              "name": "金湖县",
              "parent_id": 202
            }
          ]
        },
        {
          "id": 203,
          "name": "盐城市",
          "parent_id": 11,
          "child": [
            {
              "id": 1285,
              "name": "亭湖区",
              "parent_id": 203
            },
            {
              "id": 1286,
              "name": "盐都区",
              "parent_id": 203
            },
            {
              "id": 1287,
              "name": "响水县",
              "parent_id": 203
            },
            {
              "id": 1288,
              "name": "滨海县",
              "parent_id": 203
            },
            {
              "id": 1289,
              "name": "阜宁县",
              "parent_id": 203
            },
            {
              "id": 1290,
              "name": "射阳县",
              "parent_id": 203
            },
            {
              "id": 1291,
              "name": "建湖县",
              "parent_id": 203
            },
            {
              "id": 1292,
              "name": "东台市",
              "parent_id": 203
            },
            {
              "id": 1293,
              "name": "大丰市",
              "parent_id": 203
            }
          ]
        },
        {
          "id": 204,
          "name": "扬州市",
          "parent_id": 11,
          "child": [
            {
              "id": 1294,
              "name": "广陵区",
              "parent_id": 204
            },
            {
              "id": 1295,
              "name": "邗江区",
              "parent_id": 204
            },
            {
              "id": 1296,
              "name": "江都区",
              "parent_id": 204
            },
            {
              "id": 1297,
              "name": "宝应县",
              "parent_id": 204
            },
            {
              "id": 1298,
              "name": "仪征市",
              "parent_id": 204
            },
            {
              "id": 1299,
              "name": "高邮市",
              "parent_id": 204
            }
          ]
        },
        {
          "id": 205,
          "name": "镇江市",
          "parent_id": 11,
          "child": [
            {
              "id": 1300,
              "name": "京口区",
              "parent_id": 205
            },
            {
              "id": 1301,
              "name": "润州区",
              "parent_id": 205
            },
            {
              "id": 1302,
              "name": "丹徒区",
              "parent_id": 205
            },
            {
              "id": 1303,
              "name": "丹阳市",
              "parent_id": 205
            },
            {
              "id": 1304,
              "name": "扬中市",
              "parent_id": 205
            },
            {
              "id": 1305,
              "name": "句容市",
              "parent_id": 205
            }
          ]
        },
        {
          "id": 206,
          "name": "泰州市",
          "parent_id": 11,
          "child": [
            {
              "id": 1306,
              "name": "海陵区",
              "parent_id": 206
            },
            {
              "id": 1307,
              "name": "高港区",
              "parent_id": 206
            },
            {
              "id": 1308,
              "name": "兴化市",
              "parent_id": 206
            },
            {
              "id": 1309,
              "name": "靖江市",
              "parent_id": 206
            },
            {
              "id": 1310,
              "name": "泰兴市",
              "parent_id": 206
            },
            {
              "id": 1311,
              "name": "姜堰区",
              "parent_id": 206
            }
          ]
        },
        {
          "id": 207,
          "name": "宿迁市",
          "parent_id": 11,
          "child": [
            {
              "id": 1312,
              "name": "宿城区",
              "parent_id": 207
            },
            {
              "id": 1313,
              "name": "宿豫区",
              "parent_id": 207
            },
            {
              "id": 1314,
              "name": "沭阳县",
              "parent_id": 207
            },
            {
              "id": 1315,
              "name": "泗阳县",
              "parent_id": 207
            },
            {
              "id": 1316,
              "name": "泗洪县",
              "parent_id": 207
            }
          ]
        }
      ]
    },
    {
      "id": 12,
      "name": "浙江省",
      "parent_id": 0,
      "child": [
        {
          "id": 208,
          "name": "杭州市",
          "parent_id": 12,
          "child": [
            {
              "id": 1317,
              "name": "上城区",
              "parent_id": 208
            },
            {
              "id": 1318,
              "name": "下城区",
              "parent_id": 208
            },
            {
              "id": 1319,
              "name": "江干区",
              "parent_id": 208
            },
            {
              "id": 1320,
              "name": "拱墅区",
              "parent_id": 208
            },
            {
              "id": 1321,
              "name": "西湖区",
              "parent_id": 208
            },
            {
              "id": 1322,
              "name": "滨江区",
              "parent_id": 208
            },
            {
              "id": 1323,
              "name": "萧山区",
              "parent_id": 208
            },
            {
              "id": 1324,
              "name": "余杭区",
              "parent_id": 208
            },
            {
              "id": 1325,
              "name": "桐庐县",
              "parent_id": 208
            },
            {
              "id": 1326,
              "name": "淳安县",
              "parent_id": 208
            },
            {
              "id": 1327,
              "name": "建德市",
              "parent_id": 208
            },
            {
              "id": 1328,
              "name": "富阳市",
              "parent_id": 208
            },
            {
              "id": 1329,
              "name": "临安市",
              "parent_id": 208
            }
          ]
        },
        {
          "id": 209,
          "name": "宁波市",
          "parent_id": 12,
          "child": [
            {
              "id": 1330,
              "name": "海曙区",
              "parent_id": 209
            },
            {
              "id": 1331,
              "name": "江东区",
              "parent_id": 209
            },
            {
              "id": 1332,
              "name": "江北区",
              "parent_id": 209
            },
            {
              "id": 1333,
              "name": "北仑区",
              "parent_id": 209
            },
            {
              "id": 1334,
              "name": "镇海区",
              "parent_id": 209
            },
            {
              "id": 1335,
              "name": "鄞州区",
              "parent_id": 209
            },
            {
              "id": 1336,
              "name": "象山县",
              "parent_id": 209
            },
            {
              "id": 1337,
              "name": "宁海县",
              "parent_id": 209
            },
            {
              "id": 1338,
              "name": "余姚市",
              "parent_id": 209
            },
            {
              "id": 1339,
              "name": "慈溪市",
              "parent_id": 209
            },
            {
              "id": 1340,
              "name": "奉化市",
              "parent_id": 209
            }
          ]
        },
        {
          "id": 210,
          "name": "温州市",
          "parent_id": 12,
          "child": [
            {
              "id": 1341,
              "name": "鹿城区",
              "parent_id": 210
            },
            {
              "id": 1342,
              "name": "龙湾区",
              "parent_id": 210
            },
            {
              "id": 1343,
              "name": "瓯海区",
              "parent_id": 210
            },
            {
              "id": 1344,
              "name": "洞头县",
              "parent_id": 210
            },
            {
              "id": 1345,
              "name": "永嘉县",
              "parent_id": 210
            },
            {
              "id": 1346,
              "name": "平阳县",
              "parent_id": 210
            },
            {
              "id": 1347,
              "name": "苍南县",
              "parent_id": 210
            },
            {
              "id": 1348,
              "name": "文成县",
              "parent_id": 210
            },
            {
              "id": 1349,
              "name": "泰顺县",
              "parent_id": 210
            },
            {
              "id": 1350,
              "name": "瑞安市",
              "parent_id": 210
            },
            {
              "id": 1351,
              "name": "乐清市",
              "parent_id": 210
            }
          ]
        },
        {
          "id": 211,
          "name": "嘉兴市",
          "parent_id": 12,
          "child": [
            {
              "id": 1352,
              "name": "南湖区",
              "parent_id": 211
            },
            {
              "id": 1353,
              "name": "秀洲区",
              "parent_id": 211
            },
            {
              "id": 1354,
              "name": "嘉善县",
              "parent_id": 211
            },
            {
              "id": 1355,
              "name": "海盐县",
              "parent_id": 211
            },
            {
              "id": 1356,
              "name": "海宁市",
              "parent_id": 211
            },
            {
              "id": 1357,
              "name": "平湖市",
              "parent_id": 211
            },
            {
              "id": 1358,
              "name": "桐乡市",
              "parent_id": 211
            }
          ]
        },
        {
          "id": 212,
          "name": "湖州市",
          "parent_id": 12,
          "child": [
            {
              "id": 1359,
              "name": "吴兴区",
              "parent_id": 212
            },
            {
              "id": 1360,
              "name": "南浔区",
              "parent_id": 212
            },
            {
              "id": 1361,
              "name": "德清县",
              "parent_id": 212
            },
            {
              "id": 1362,
              "name": "长兴县",
              "parent_id": 212
            },
            {
              "id": 1363,
              "name": "安吉县",
              "parent_id": 212
            }
          ]
        },
        {
          "id": 213,
          "name": "绍兴市",
          "parent_id": 12,
          "child": [
            {
              "id": 1364,
              "name": "越城区",
              "parent_id": 213
            },
            {
              "id": 1365,
              "name": "柯桥区",
              "parent_id": 213
            },
            {
              "id": 1366,
              "name": "新昌县",
              "parent_id": 213
            },
            {
              "id": 1367,
              "name": "诸暨市",
              "parent_id": 213
            },
            {
              "id": 1368,
              "name": "上虞区",
              "parent_id": 213
            },
            {
              "id": 1369,
              "name": "嵊州市",
              "parent_id": 213
            }
          ]
        },
        {
          "id": 214,
          "name": "金华市",
          "parent_id": 12,
          "child": [
            {
              "id": 1370,
              "name": "婺城区",
              "parent_id": 214
            },
            {
              "id": 1371,
              "name": "金东区",
              "parent_id": 214
            },
            {
              "id": 1372,
              "name": "武义县",
              "parent_id": 214
            },
            {
              "id": 1373,
              "name": "浦江县",
              "parent_id": 214
            },
            {
              "id": 1374,
              "name": "磐安县",
              "parent_id": 214
            },
            {
              "id": 1375,
              "name": "兰溪市",
              "parent_id": 214
            },
            {
              "id": 1376,
              "name": "义乌市",
              "parent_id": 214
            },
            {
              "id": 1377,
              "name": "东阳市",
              "parent_id": 214
            },
            {
              "id": 1378,
              "name": "永康市",
              "parent_id": 214
            }
          ]
        },
        {
          "id": 215,
          "name": "衢州市",
          "parent_id": 12,
          "child": [
            {
              "id": 1379,
              "name": "柯城区",
              "parent_id": 215
            },
            {
              "id": 1380,
              "name": "衢江区",
              "parent_id": 215
            },
            {
              "id": 1381,
              "name": "常山县",
              "parent_id": 215
            },
            {
              "id": 1382,
              "name": "开化县",
              "parent_id": 215
            },
            {
              "id": 1383,
              "name": "龙游县",
              "parent_id": 215
            },
            {
              "id": 1384,
              "name": "江山市",
              "parent_id": 215
            }
          ]
        },
        {
          "id": 216,
          "name": "舟山市",
          "parent_id": 12,
          "child": [
            {
              "id": 1385,
              "name": "定海区",
              "parent_id": 216
            },
            {
              "id": 1386,
              "name": "普陀区",
              "parent_id": 216
            },
            {
              "id": 1387,
              "name": "岱山县",
              "parent_id": 216
            },
            {
              "id": 1388,
              "name": "嵊泗县",
              "parent_id": 216
            }
          ]
        },
        {
          "id": 217,
          "name": "台州市",
          "parent_id": 12,
          "child": [
            {
              "id": 1389,
              "name": "椒江区",
              "parent_id": 217
            },
            {
              "id": 1390,
              "name": "黄岩区",
              "parent_id": 217
            },
            {
              "id": 1391,
              "name": "路桥区",
              "parent_id": 217
            },
            {
              "id": 1392,
              "name": "玉环县",
              "parent_id": 217
            },
            {
              "id": 1393,
              "name": "三门县",
              "parent_id": 217
            },
            {
              "id": 1394,
              "name": "天台县",
              "parent_id": 217
            },
            {
              "id": 1395,
              "name": "仙居县",
              "parent_id": 217
            },
            {
              "id": 1396,
              "name": "温岭市",
              "parent_id": 217
            },
            {
              "id": 1397,
              "name": "临海市",
              "parent_id": 217
            }
          ]
        },
        {
          "id": 218,
          "name": "丽水市",
          "parent_id": 12,
          "child": [
            {
              "id": 1398,
              "name": "莲都区",
              "parent_id": 218
            },
            {
              "id": 1399,
              "name": "青田县",
              "parent_id": 218
            },
            {
              "id": 1400,
              "name": "缙云县",
              "parent_id": 218
            },
            {
              "id": 1401,
              "name": "遂昌县",
              "parent_id": 218
            },
            {
              "id": 1402,
              "name": "松阳县",
              "parent_id": 218
            },
            {
              "id": 1403,
              "name": "云和县",
              "parent_id": 218
            },
            {
              "id": 1404,
              "name": "庆元县",
              "parent_id": 218
            },
            {
              "id": 1405,
              "name": "景宁自治县",
              "parent_id": 218
            },
            {
              "id": 1406,
              "name": "龙泉市",
              "parent_id": 218
            }
          ]
        }
      ]
    },
    {
      "id": 13,
      "name": "安徽省",
      "parent_id": 0,
      "child": [
        {
          "id": 219,
          "name": "合肥市",
          "parent_id": 13,
          "child": [
            {
              "id": 1407,
              "name": "瑶海区",
              "parent_id": 219
            },
            {
              "id": 1408,
              "name": "庐阳区",
              "parent_id": 219
            },
            {
              "id": 1409,
              "name": "蜀山区",
              "parent_id": 219
            },
            {
              "id": 1410,
              "name": "包河区",
              "parent_id": 219
            },
            {
              "id": 1411,
              "name": "长丰县",
              "parent_id": 219
            },
            {
              "id": 1412,
              "name": "肥东县",
              "parent_id": 219
            },
            {
              "id": 1413,
              "name": "肥西县",
              "parent_id": 219
            },
            {
              "id": 1414,
              "name": "庐江县",
              "parent_id": 219
            },
            {
              "id": 1415,
              "name": "巢湖市",
              "parent_id": 219
            }
          ]
        },
        {
          "id": 220,
          "name": "芜湖市",
          "parent_id": 13,
          "child": [
            {
              "id": 1416,
              "name": "镜湖区",
              "parent_id": 220
            },
            {
              "id": 1417,
              "name": "弋江区",
              "parent_id": 220
            },
            {
              "id": 1418,
              "name": "鸠江区",
              "parent_id": 220
            },
            {
              "id": 1419,
              "name": "三山区",
              "parent_id": 220
            },
            {
              "id": 1420,
              "name": "芜湖县",
              "parent_id": 220
            },
            {
              "id": 1421,
              "name": "繁昌县",
              "parent_id": 220
            },
            {
              "id": 1422,
              "name": "南陵县",
              "parent_id": 220
            },
            {
              "id": 1423,
              "name": "无为县",
              "parent_id": 220
            }
          ]
        },
        {
          "id": 221,
          "name": "蚌埠市",
          "parent_id": 13,
          "child": [
            {
              "id": 1424,
              "name": "龙子湖区",
              "parent_id": 221
            },
            {
              "id": 1425,
              "name": "蚌山区",
              "parent_id": 221
            },
            {
              "id": 1426,
              "name": "禹会区",
              "parent_id": 221
            },
            {
              "id": 1427,
              "name": "淮上区",
              "parent_id": 221
            },
            {
              "id": 1428,
              "name": "怀远县",
              "parent_id": 221
            },
            {
              "id": 1429,
              "name": "五河县",
              "parent_id": 221
            },
            {
              "id": 1430,
              "name": "固镇县",
              "parent_id": 221
            }
          ]
        },
        {
          "id": 222,
          "name": "淮南市",
          "parent_id": 13,
          "child": [
            {
              "id": 1431,
              "name": "大通区",
              "parent_id": 222
            },
            {
              "id": 1432,
              "name": "田家庵区",
              "parent_id": 222
            },
            {
              "id": 1433,
              "name": "谢家集区",
              "parent_id": 222
            },
            {
              "id": 1434,
              "name": "八公山区",
              "parent_id": 222
            },
            {
              "id": 1435,
              "name": "潘集区",
              "parent_id": 222
            },
            {
              "id": 1436,
              "name": "凤台县",
              "parent_id": 222
            }
          ]
        },
        {
          "id": 223,
          "name": "马鞍山市",
          "parent_id": 13,
          "child": [
            {
              "id": 1437,
              "name": "花山区",
              "parent_id": 223
            },
            {
              "id": 1438,
              "name": "雨山区",
              "parent_id": 223
            },
            {
              "id": 1439,
              "name": "博望区",
              "parent_id": 223
            },
            {
              "id": 1440,
              "name": "当涂县",
              "parent_id": 223
            },
            {
              "id": 1441,
              "name": "含山县",
              "parent_id": 223
            },
            {
              "id": 1442,
              "name": "和县",
              "parent_id": 223
            }
          ]
        },
        {
          "id": 224,
          "name": "淮北市",
          "parent_id": 13,
          "child": [
            {
              "id": 1443,
              "name": "杜集区",
              "parent_id": 224
            },
            {
              "id": 1444,
              "name": "相山区",
              "parent_id": 224
            },
            {
              "id": 1445,
              "name": "烈山区",
              "parent_id": 224
            },
            {
              "id": 1446,
              "name": "濉溪县",
              "parent_id": 224
            }
          ]
        },
        {
          "id": 225,
          "name": "铜陵市",
          "parent_id": 13,
          "child": [
            {
              "id": 1447,
              "name": "铜官山区",
              "parent_id": 225
            },
            {
              "id": 1448,
              "name": "狮子山区",
              "parent_id": 225
            },
            {
              "id": 1449,
              "name": "郊区",
              "parent_id": 225
            },
            {
              "id": 1450,
              "name": "铜陵县",
              "parent_id": 225
            }
          ]
        },
        {
          "id": 226,
          "name": "安庆市",
          "parent_id": 13,
          "child": [
            {
              "id": 1451,
              "name": "迎江区",
              "parent_id": 226
            },
            {
              "id": 1452,
              "name": "大观区",
              "parent_id": 226
            },
            {
              "id": 1453,
              "name": "宜秀区",
              "parent_id": 226
            },
            {
              "id": 1454,
              "name": "怀宁县",
              "parent_id": 226
            },
            {
              "id": 1455,
              "name": "枞阳县",
              "parent_id": 226
            },
            {
              "id": 1456,
              "name": "潜山县",
              "parent_id": 226
            },
            {
              "id": 1457,
              "name": "太湖县",
              "parent_id": 226
            },
            {
              "id": 1458,
              "name": "宿松县",
              "parent_id": 226
            },
            {
              "id": 1459,
              "name": "望江县",
              "parent_id": 226
            },
            {
              "id": 1460,
              "name": "岳西县",
              "parent_id": 226
            },
            {
              "id": 1461,
              "name": "桐城市",
              "parent_id": 226
            }
          ]
        },
        {
          "id": 227,
          "name": "黄山市",
          "parent_id": 13,
          "child": [
            {
              "id": 1462,
              "name": "屯溪区",
              "parent_id": 227
            },
            {
              "id": 1463,
              "name": "黄山区",
              "parent_id": 227
            },
            {
              "id": 1464,
              "name": "徽州区",
              "parent_id": 227
            },
            {
              "id": 1465,
              "name": "歙县",
              "parent_id": 227
            },
            {
              "id": 1466,
              "name": "休宁县",
              "parent_id": 227
            },
            {
              "id": 1467,
              "name": "黟县",
              "parent_id": 227
            },
            {
              "id": 1468,
              "name": "祁门县",
              "parent_id": 227
            }
          ]
        },
        {
          "id": 228,
          "name": "滁州市",
          "parent_id": 13,
          "child": [
            {
              "id": 1469,
              "name": "琅玡区",
              "parent_id": 228
            },
            {
              "id": 1470,
              "name": "南谯区",
              "parent_id": 228
            },
            {
              "id": 1471,
              "name": "来安县",
              "parent_id": 228
            },
            {
              "id": 1472,
              "name": "全椒县",
              "parent_id": 228
            },
            {
              "id": 1473,
              "name": "定远县",
              "parent_id": 228
            },
            {
              "id": 1474,
              "name": "凤阳县",
              "parent_id": 228
            },
            {
              "id": 1475,
              "name": "天长市",
              "parent_id": 228
            },
            {
              "id": 1476,
              "name": "明光市",
              "parent_id": 228
            }
          ]
        },
        {
          "id": 229,
          "name": "阜阳市",
          "parent_id": 13,
          "child": [
            {
              "id": 1477,
              "name": "颍州区",
              "parent_id": 229
            },
            {
              "id": 1478,
              "name": "颍东区",
              "parent_id": 229
            },
            {
              "id": 1479,
              "name": "颍泉区",
              "parent_id": 229
            },
            {
              "id": 1480,
              "name": "临泉县",
              "parent_id": 229
            },
            {
              "id": 1481,
              "name": "太和县",
              "parent_id": 229
            },
            {
              "id": 1482,
              "name": "阜南县",
              "parent_id": 229
            },
            {
              "id": 1483,
              "name": "颖上县",
              "parent_id": 229
            },
            {
              "id": 1484,
              "name": "界首市",
              "parent_id": 229
            }
          ]
        },
        {
          "id": 230,
          "name": "宿州市",
          "parent_id": 13,
          "child": [
            {
              "id": 1485,
              "name": "埇桥区",
              "parent_id": 230
            },
            {
              "id": 1486,
              "name": "砀山县",
              "parent_id": 230
            },
            {
              "id": 1487,
              "name": "萧县",
              "parent_id": 230
            },
            {
              "id": 1488,
              "name": "灵璧县",
              "parent_id": 230
            },
            {
              "id": 1489,
              "name": "泗县",
              "parent_id": 230
            }
          ]
        },
        {
          "id": 231,
          "name": "六安市",
          "parent_id": 13,
          "child": [
            {
              "id": 1490,
              "name": "金安区",
              "parent_id": 231
            },
            {
              "id": 1491,
              "name": "裕安区",
              "parent_id": 231
            },
            {
              "id": 1492,
              "name": "寿县",
              "parent_id": 231
            },
            {
              "id": 1493,
              "name": "霍邱县",
              "parent_id": 231
            },
            {
              "id": 1494,
              "name": "舒城县",
              "parent_id": 231
            },
            {
              "id": 1495,
              "name": "金寨县",
              "parent_id": 231
            },
            {
              "id": 1496,
              "name": "霍山县",
              "parent_id": 231
            }
          ]
        },
        {
          "id": 232,
          "name": "亳州市",
          "parent_id": 13,
          "child": [
            {
              "id": 1497,
              "name": "谯城区",
              "parent_id": 232
            },
            {
              "id": 1498,
              "name": "涡阳县",
              "parent_id": 232
            },
            {
              "id": 1499,
              "name": "蒙城县",
              "parent_id": 232
            },
            {
              "id": 1500,
              "name": "利辛县",
              "parent_id": 232
            }
          ]
        },
        {
          "id": 233,
          "name": "池州市",
          "parent_id": 13,
          "child": [
            {
              "id": 1501,
              "name": "贵池区",
              "parent_id": 233
            },
            {
              "id": 1502,
              "name": "东至县",
              "parent_id": 233
            },
            {
              "id": 1503,
              "name": "石台县",
              "parent_id": 233
            },
            {
              "id": 1504,
              "name": "青阳县",
              "parent_id": 233
            }
          ]
        },
        {
          "id": 234,
          "name": "宣城市",
          "parent_id": 13,
          "child": [
            {
              "id": 1505,
              "name": "宣州区",
              "parent_id": 234
            },
            {
              "id": 1506,
              "name": "郎溪县",
              "parent_id": 234
            },
            {
              "id": 1507,
              "name": "广德县",
              "parent_id": 234
            },
            {
              "id": 1508,
              "name": "泾县",
              "parent_id": 234
            },
            {
              "id": 1509,
              "name": "绩溪县",
              "parent_id": 234
            },
            {
              "id": 1510,
              "name": "旌德县",
              "parent_id": 234
            },
            {
              "id": 1511,
              "name": "宁国市",
              "parent_id": 234
            }
          ]
        }
      ]
    },
    {
      "id": 14,
      "name": "福建省",
      "parent_id": 0,
      "child": [
        {
          "id": 235,
          "name": "福州市",
          "parent_id": 14,
          "child": [
            {
              "id": 1512,
              "name": "鼓楼区",
              "parent_id": 235
            },
            {
              "id": 1513,
              "name": "台江区",
              "parent_id": 235
            },
            {
              "id": 1514,
              "name": "仓山区",
              "parent_id": 235
            },
            {
              "id": 1515,
              "name": "马尾区",
              "parent_id": 235
            },
            {
              "id": 1516,
              "name": "晋安区",
              "parent_id": 235
            },
            {
              "id": 1517,
              "name": "闽侯县",
              "parent_id": 235
            },
            {
              "id": 1518,
              "name": "连江县",
              "parent_id": 235
            },
            {
              "id": 1519,
              "name": "罗源县",
              "parent_id": 235
            },
            {
              "id": 1520,
              "name": "闽清县",
              "parent_id": 235
            },
            {
              "id": 1521,
              "name": "永泰县",
              "parent_id": 235
            },
            {
              "id": 1522,
              "name": "平潭县",
              "parent_id": 235
            },
            {
              "id": 1523,
              "name": "福清市",
              "parent_id": 235
            },
            {
              "id": 1524,
              "name": "长乐市",
              "parent_id": 235
            }
          ]
        },
        {
          "id": 236,
          "name": "厦门市",
          "parent_id": 14,
          "child": [
            {
              "id": 1525,
              "name": "思明区",
              "parent_id": 236
            },
            {
              "id": 1526,
              "name": "海沧区",
              "parent_id": 236
            },
            {
              "id": 1527,
              "name": "湖里区",
              "parent_id": 236
            },
            {
              "id": 1528,
              "name": "集美区",
              "parent_id": 236
            },
            {
              "id": 1529,
              "name": "同安区",
              "parent_id": 236
            },
            {
              "id": 1530,
              "name": "翔安区",
              "parent_id": 236
            }
          ]
        },
        {
          "id": 237,
          "name": "莆田市",
          "parent_id": 14,
          "child": [
            {
              "id": 1531,
              "name": "城厢区",
              "parent_id": 237
            },
            {
              "id": 1532,
              "name": "涵江区",
              "parent_id": 237
            },
            {
              "id": 1533,
              "name": "荔城区",
              "parent_id": 237
            },
            {
              "id": 1534,
              "name": "秀屿区",
              "parent_id": 237
            },
            {
              "id": 1535,
              "name": "仙游县",
              "parent_id": 237
            }
          ]
        },
        {
          "id": 238,
          "name": "三明市",
          "parent_id": 14,
          "child": [
            {
              "id": 1536,
              "name": "梅列区",
              "parent_id": 238
            },
            {
              "id": 1537,
              "name": "三元区",
              "parent_id": 238
            },
            {
              "id": 1538,
              "name": "明溪县",
              "parent_id": 238
            },
            {
              "id": 1539,
              "name": "清流县",
              "parent_id": 238
            },
            {
              "id": 1540,
              "name": "宁化县",
              "parent_id": 238
            },
            {
              "id": 1541,
              "name": "大田县",
              "parent_id": 238
            },
            {
              "id": 1542,
              "name": "尤溪县",
              "parent_id": 238
            },
            {
              "id": 1543,
              "name": "沙县",
              "parent_id": 238
            },
            {
              "id": 1544,
              "name": "将乐县",
              "parent_id": 238
            },
            {
              "id": 1545,
              "name": "泰宁县",
              "parent_id": 238
            },
            {
              "id": 1546,
              "name": "建宁县",
              "parent_id": 238
            },
            {
              "id": 1547,
              "name": "永安市",
              "parent_id": 238
            }
          ]
        },
        {
          "id": 239,
          "name": "泉州市",
          "parent_id": 14,
          "child": [
            {
              "id": 1548,
              "name": "鲤城区",
              "parent_id": 239
            },
            {
              "id": 1549,
              "name": "丰泽区",
              "parent_id": 239
            },
            {
              "id": 1550,
              "name": "洛江区",
              "parent_id": 239
            },
            {
              "id": 1551,
              "name": "泉港区",
              "parent_id": 239
            },
            {
              "id": 1552,
              "name": "惠安县",
              "parent_id": 239
            },
            {
              "id": 1553,
              "name": "安溪县",
              "parent_id": 239
            },
            {
              "id": 1554,
              "name": "永春县",
              "parent_id": 239
            },
            {
              "id": 1555,
              "name": "德化县",
              "parent_id": 239
            },
            {
              "id": 1556,
              "name": "金门县",
              "parent_id": 239
            },
            {
              "id": 1557,
              "name": "石狮市",
              "parent_id": 239
            },
            {
              "id": 1558,
              "name": "晋江市",
              "parent_id": 239
            },
            {
              "id": 1559,
              "name": "南安市",
              "parent_id": 239
            }
          ]
        },
        {
          "id": 240,
          "name": "漳州市",
          "parent_id": 14,
          "child": [
            {
              "id": 1560,
              "name": "芗城区",
              "parent_id": 240
            },
            {
              "id": 1561,
              "name": "龙文区",
              "parent_id": 240
            },
            {
              "id": 1562,
              "name": "云霄县",
              "parent_id": 240
            },
            {
              "id": 1563,
              "name": "漳浦县",
              "parent_id": 240
            },
            {
              "id": 1564,
              "name": "诏安县",
              "parent_id": 240
            },
            {
              "id": 1565,
              "name": "长泰县",
              "parent_id": 240
            },
            {
              "id": 1566,
              "name": "东山县",
              "parent_id": 240
            },
            {
              "id": 1567,
              "name": "南靖县",
              "parent_id": 240
            },
            {
              "id": 1568,
              "name": "平和县",
              "parent_id": 240
            },
            {
              "id": 1569,
              "name": "华安县",
              "parent_id": 240
            },
            {
              "id": 1570,
              "name": "龙海市",
              "parent_id": 240
            }
          ]
        },
        {
          "id": 241,
          "name": "南平市",
          "parent_id": 14,
          "child": [
            {
              "id": 1571,
              "name": "延平区",
              "parent_id": 241
            },
            {
              "id": 1572,
              "name": "顺昌县",
              "parent_id": 241
            },
            {
              "id": 1573,
              "name": "浦城县",
              "parent_id": 241
            },
            {
              "id": 1574,
              "name": "光泽县",
              "parent_id": 241
            },
            {
              "id": 1575,
              "name": "松溪县",
              "parent_id": 241
            },
            {
              "id": 1576,
              "name": "政和县",
              "parent_id": 241
            },
            {
              "id": 1577,
              "name": "邵武市",
              "parent_id": 241
            },
            {
              "id": 1578,
              "name": "武夷山市",
              "parent_id": 241
            },
            {
              "id": 1579,
              "name": "建瓯市",
              "parent_id": 241
            },
            {
              "id": 1580,
              "name": "建阳区",
              "parent_id": 241
            }
          ]
        },
        {
          "id": 242,
          "name": "龙岩市",
          "parent_id": 14,
          "child": [
            {
              "id": 1581,
              "name": "新罗区",
              "parent_id": 242
            },
            {
              "id": 1582,
              "name": "长汀县",
              "parent_id": 242
            },
            {
              "id": 1583,
              "name": "永定县",
              "parent_id": 242
            },
            {
              "id": 1584,
              "name": "上杭县",
              "parent_id": 242
            },
            {
              "id": 1585,
              "name": "武平县",
              "parent_id": 242
            },
            {
              "id": 1586,
              "name": "连城县",
              "parent_id": 242
            },
            {
              "id": 1587,
              "name": "漳平市",
              "parent_id": 242
            }
          ]
        },
        {
          "id": 243,
          "name": "宁德市",
          "parent_id": 14,
          "child": [
            {
              "id": 1588,
              "name": "蕉城区",
              "parent_id": 243
            },
            {
              "id": 1589,
              "name": "霞浦县",
              "parent_id": 243
            },
            {
              "id": 1590,
              "name": "古田县",
              "parent_id": 243
            },
            {
              "id": 1591,
              "name": "屏南县",
              "parent_id": 243
            },
            {
              "id": 1592,
              "name": "寿宁县",
              "parent_id": 243
            },
            {
              "id": 1593,
              "name": "周宁县",
              "parent_id": 243
            },
            {
              "id": 1594,
              "name": "柘荣县",
              "parent_id": 243
            },
            {
              "id": 1595,
              "name": "福安市",
              "parent_id": 243
            },
            {
              "id": 1596,
              "name": "福鼎市",
              "parent_id": 243
            }
          ]
        }
      ]
    },
    {
      "id": 15,
      "name": "江西省",
      "parent_id": 0,
      "child": [
        {
          "id": 244,
          "name": "南昌市",
          "parent_id": 15,
          "child": [
            {
              "id": 1597,
              "name": "东湖区",
              "parent_id": 244
            },
            {
              "id": 1598,
              "name": "西湖区",
              "parent_id": 244
            },
            {
              "id": 1599,
              "name": "青云谱区",
              "parent_id": 244
            },
            {
              "id": 1600,
              "name": "湾里区",
              "parent_id": 244
            },
            {
              "id": 1601,
              "name": "青山湖区",
              "parent_id": 244
            },
            {
              "id": 1602,
              "name": "南昌县",
              "parent_id": 244
            },
            {
              "id": 1603,
              "name": "新建县",
              "parent_id": 244
            },
            {
              "id": 1604,
              "name": "安义县",
              "parent_id": 244
            },
            {
              "id": 1605,
              "name": "进贤县",
              "parent_id": 244
            }
          ]
        },
        {
          "id": 245,
          "name": "景德镇市",
          "parent_id": 15,
          "child": [
            {
              "id": 1606,
              "name": "昌江区",
              "parent_id": 245
            },
            {
              "id": 1607,
              "name": "珠山区",
              "parent_id": 245
            },
            {
              "id": 1608,
              "name": "浮梁县",
              "parent_id": 245
            },
            {
              "id": 1609,
              "name": "乐平市",
              "parent_id": 245
            }
          ]
        },
        {
          "id": 246,
          "name": "萍乡市",
          "parent_id": 15,
          "child": [
            {
              "id": 1610,
              "name": "安源区",
              "parent_id": 246
            },
            {
              "id": 1611,
              "name": "湘东区",
              "parent_id": 246
            },
            {
              "id": 1612,
              "name": "莲花县",
              "parent_id": 246
            },
            {
              "id": 1613,
              "name": "上栗县",
              "parent_id": 246
            },
            {
              "id": 1614,
              "name": "芦溪县",
              "parent_id": 246
            }
          ]
        },
        {
          "id": 247,
          "name": "九江市",
          "parent_id": 15,
          "child": [
            {
              "id": 1615,
              "name": "庐山区",
              "parent_id": 247
            },
            {
              "id": 1616,
              "name": "浔阳区",
              "parent_id": 247
            },
            {
              "id": 1617,
              "name": "九江县",
              "parent_id": 247
            },
            {
              "id": 1618,
              "name": "武宁县",
              "parent_id": 247
            },
            {
              "id": 1619,
              "name": "修水县",
              "parent_id": 247
            },
            {
              "id": 1620,
              "name": "永修县",
              "parent_id": 247
            },
            {
              "id": 1621,
              "name": "德安县",
              "parent_id": 247
            },
            {
              "id": 1622,
              "name": "星子县",
              "parent_id": 247
            },
            {
              "id": 1623,
              "name": "都昌县",
              "parent_id": 247
            },
            {
              "id": 1624,
              "name": "湖口县",
              "parent_id": 247
            },
            {
              "id": 1625,
              "name": "彭泽县",
              "parent_id": 247
            },
            {
              "id": 1626,
              "name": "瑞昌市",
              "parent_id": 247
            },
            {
              "id": 1627,
              "name": "共青城市",
              "parent_id": 247
            }
          ]
        },
        {
          "id": 248,
          "name": "新余市",
          "parent_id": 15,
          "child": [
            {
              "id": 1628,
              "name": "渝水区",
              "parent_id": 248
            },
            {
              "id": 1629,
              "name": "分宜县",
              "parent_id": 248
            }
          ]
        },
        {
          "id": 249,
          "name": "鹰潭市",
          "parent_id": 15,
          "child": [
            {
              "id": 1630,
              "name": "月湖区",
              "parent_id": 249
            },
            {
              "id": 1631,
              "name": "余江县",
              "parent_id": 249
            },
            {
              "id": 1632,
              "name": "贵溪市",
              "parent_id": 249
            }
          ]
        },
        {
          "id": 250,
          "name": "赣州市",
          "parent_id": 15,
          "child": [
            {
              "id": 1633,
              "name": "章贡区",
              "parent_id": 250
            },
            {
              "id": 1634,
              "name": "赣县",
              "parent_id": 250
            },
            {
              "id": 1635,
              "name": "信丰县",
              "parent_id": 250
            },
            {
              "id": 1636,
              "name": "大余县",
              "parent_id": 250
            },
            {
              "id": 1637,
              "name": "上犹县",
              "parent_id": 250
            },
            {
              "id": 1638,
              "name": "崇义县",
              "parent_id": 250
            },
            {
              "id": 1639,
              "name": "安远县",
              "parent_id": 250
            },
            {
              "id": 1640,
              "name": "龙南县",
              "parent_id": 250
            },
            {
              "id": 1641,
              "name": "定南县",
              "parent_id": 250
            },
            {
              "id": 1642,
              "name": "全南县",
              "parent_id": 250
            },
            {
              "id": 1643,
              "name": "宁都县",
              "parent_id": 250
            },
            {
              "id": 1644,
              "name": "于都县",
              "parent_id": 250
            },
            {
              "id": 1645,
              "name": "兴国县",
              "parent_id": 250
            },
            {
              "id": 1646,
              "name": "会昌县",
              "parent_id": 250
            },
            {
              "id": 1647,
              "name": "寻乌县",
              "parent_id": 250
            },
            {
              "id": 1648,
              "name": "石城县",
              "parent_id": 250
            },
            {
              "id": 1649,
              "name": "瑞金市",
              "parent_id": 250
            },
            {
              "id": 1650,
              "name": "南康区",
              "parent_id": 250
            }
          ]
        },
        {
          "id": 251,
          "name": "吉安市",
          "parent_id": 15,
          "child": [
            {
              "id": 1651,
              "name": "吉州区",
              "parent_id": 251
            },
            {
              "id": 1652,
              "name": "青原区",
              "parent_id": 251
            },
            {
              "id": 1653,
              "name": "吉安县",
              "parent_id": 251
            },
            {
              "id": 1654,
              "name": "吉水县",
              "parent_id": 251
            },
            {
              "id": 1655,
              "name": "峡江县",
              "parent_id": 251
            },
            {
              "id": 1656,
              "name": "新干县",
              "parent_id": 251
            },
            {
              "id": 1657,
              "name": "永丰县",
              "parent_id": 251
            },
            {
              "id": 1658,
              "name": "泰和县",
              "parent_id": 251
            },
            {
              "id": 1659,
              "name": "遂川县",
              "parent_id": 251
            },
            {
              "id": 1660,
              "name": "万安县",
              "parent_id": 251
            },
            {
              "id": 1661,
              "name": "安福县",
              "parent_id": 251
            },
            {
              "id": 1662,
              "name": "永新县",
              "parent_id": 251
            },
            {
              "id": 1663,
              "name": "井冈山市",
              "parent_id": 251
            }
          ]
        },
        {
          "id": 252,
          "name": "宜春市",
          "parent_id": 15,
          "child": [
            {
              "id": 1664,
              "name": "袁州区",
              "parent_id": 252
            },
            {
              "id": 1665,
              "name": "奉新县",
              "parent_id": 252
            },
            {
              "id": 1666,
              "name": "万载县",
              "parent_id": 252
            },
            {
              "id": 1667,
              "name": "上高县",
              "parent_id": 252
            },
            {
              "id": 1668,
              "name": "宜丰县",
              "parent_id": 252
            },
            {
              "id": 1669,
              "name": "靖安县",
              "parent_id": 252
            },
            {
              "id": 1670,
              "name": "铜鼓县",
              "parent_id": 252
            },
            {
              "id": 1671,
              "name": "丰城市",
              "parent_id": 252
            },
            {
              "id": 1672,
              "name": "樟树市",
              "parent_id": 252
            },
            {
              "id": 1673,
              "name": "高安市",
              "parent_id": 252
            }
          ]
        },
        {
          "id": 253,
          "name": "抚州市",
          "parent_id": 15,
          "child": [
            {
              "id": 1674,
              "name": "临川区",
              "parent_id": 253
            },
            {
              "id": 1675,
              "name": "南城县",
              "parent_id": 253
            },
            {
              "id": 1676,
              "name": "黎川县",
              "parent_id": 253
            },
            {
              "id": 1677,
              "name": "南丰县",
              "parent_id": 253
            },
            {
              "id": 1678,
              "name": "崇仁县",
              "parent_id": 253
            },
            {
              "id": 1679,
              "name": "乐安县",
              "parent_id": 253
            },
            {
              "id": 1680,
              "name": "宜黄县",
              "parent_id": 253
            },
            {
              "id": 1681,
              "name": "金溪县",
              "parent_id": 253
            },
            {
              "id": 1682,
              "name": "资溪县",
              "parent_id": 253
            },
            {
              "id": 1683,
              "name": "东乡县",
              "parent_id": 253
            },
            {
              "id": 1684,
              "name": "广昌县",
              "parent_id": 253
            }
          ]
        },
        {
          "id": 254,
          "name": "上饶市",
          "parent_id": 15,
          "child": [
            {
              "id": 1685,
              "name": "信州区",
              "parent_id": 254
            },
            {
              "id": 1686,
              "name": "上饶县",
              "parent_id": 254
            },
            {
              "id": 1687,
              "name": "广丰县",
              "parent_id": 254
            },
            {
              "id": 1688,
              "name": "玉山县",
              "parent_id": 254
            },
            {
              "id": 1689,
              "name": "铅山县",
              "parent_id": 254
            },
            {
              "id": 1690,
              "name": "横峰县",
              "parent_id": 254
            },
            {
              "id": 1691,
              "name": "弋阳县",
              "parent_id": 254
            },
            {
              "id": 1692,
              "name": "余干县",
              "parent_id": 254
            },
            {
              "id": 1693,
              "name": "鄱阳县",
              "parent_id": 254
            },
            {
              "id": 1694,
              "name": "万年县",
              "parent_id": 254
            },
            {
              "id": 1695,
              "name": "婺源县",
              "parent_id": 254
            },
            {
              "id": 1696,
              "name": "德兴市",
              "parent_id": 254
            }
          ]
        }
      ]
    },
    {
      "id": 16,
      "name": "山东省",
      "parent_id": 0,
      "child": [
        {
          "id": 255,
          "name": "济南市",
          "parent_id": 16,
          "child": [
            {
              "id": 1697,
              "name": "历下区",
              "parent_id": 255
            },
            {
              "id": 1698,
              "name": "市中区",
              "parent_id": 255
            },
            {
              "id": 1699,
              "name": "槐荫区",
              "parent_id": 255
            },
            {
              "id": 1700,
              "name": "天桥区",
              "parent_id": 255
            },
            {
              "id": 1701,
              "name": "历城区",
              "parent_id": 255
            },
            {
              "id": 1702,
              "name": "长清区",
              "parent_id": 255
            },
            {
              "id": 1703,
              "name": "平阴县",
              "parent_id": 255
            },
            {
              "id": 1704,
              "name": "济阳县",
              "parent_id": 255
            },
            {
              "id": 1705,
              "name": "商河县",
              "parent_id": 255
            },
            {
              "id": 1706,
              "name": "章丘市",
              "parent_id": 255
            }
          ]
        },
        {
          "id": 256,
          "name": "青岛市",
          "parent_id": 16,
          "child": [
            {
              "id": 1707,
              "name": "市南区",
              "parent_id": 256
            },
            {
              "id": 1708,
              "name": "市北区",
              "parent_id": 256
            },
            {
              "id": 1709,
              "name": "黄岛区",
              "parent_id": 256
            },
            {
              "id": 1710,
              "name": "崂山区",
              "parent_id": 256
            },
            {
              "id": 1711,
              "name": "李沧区",
              "parent_id": 256
            },
            {
              "id": 1712,
              "name": "城阳区",
              "parent_id": 256
            },
            {
              "id": 1713,
              "name": "胶州市",
              "parent_id": 256
            },
            {
              "id": 1714,
              "name": "即墨市",
              "parent_id": 256
            },
            {
              "id": 1715,
              "name": "平度市",
              "parent_id": 256
            },
            {
              "id": 1716,
              "name": "莱西市",
              "parent_id": 256
            }
          ]
        },
        {
          "id": 257,
          "name": "淄博市",
          "parent_id": 16,
          "child": [
            {
              "id": 1717,
              "name": "淄川区",
              "parent_id": 257
            },
            {
              "id": 1718,
              "name": "张店区",
              "parent_id": 257
            },
            {
              "id": 1719,
              "name": "博山区",
              "parent_id": 257
            },
            {
              "id": 1720,
              "name": "临淄区",
              "parent_id": 257
            },
            {
              "id": 1721,
              "name": "周村区",
              "parent_id": 257
            },
            {
              "id": 1722,
              "name": "桓台县",
              "parent_id": 257
            },
            {
              "id": 1723,
              "name": "高青县",
              "parent_id": 257
            },
            {
              "id": 1724,
              "name": "沂源县",
              "parent_id": 257
            }
          ]
        },
        {
          "id": 258,
          "name": "枣庄市",
          "parent_id": 16,
          "child": [
            {
              "id": 1725,
              "name": "市中区",
              "parent_id": 258
            },
            {
              "id": 1726,
              "name": "薛城区",
              "parent_id": 258
            },
            {
              "id": 1727,
              "name": "峄城区",
              "parent_id": 258
            },
            {
              "id": 1728,
              "name": "台儿庄区",
              "parent_id": 258
            },
            {
              "id": 1729,
              "name": "山亭区",
              "parent_id": 258
            },
            {
              "id": 1730,
              "name": "滕州市",
              "parent_id": 258
            }
          ]
        },
        {
          "id": 259,
          "name": "东营市",
          "parent_id": 16,
          "child": [
            {
              "id": 1731,
              "name": "东营区",
              "parent_id": 259
            },
            {
              "id": 1732,
              "name": "河口区",
              "parent_id": 259
            },
            {
              "id": 1733,
              "name": "垦利县",
              "parent_id": 259
            },
            {
              "id": 1734,
              "name": "利津县",
              "parent_id": 259
            },
            {
              "id": 1735,
              "name": "广饶县",
              "parent_id": 259
            }
          ]
        },
        {
          "id": 260,
          "name": "烟台市",
          "parent_id": 16,
          "child": [
            {
              "id": 1736,
              "name": "芝罘区",
              "parent_id": 260
            },
            {
              "id": 1737,
              "name": "福山区",
              "parent_id": 260
            },
            {
              "id": 1738,
              "name": "牟平区",
              "parent_id": 260
            },
            {
              "id": 1739,
              "name": "莱山区",
              "parent_id": 260
            },
            {
              "id": 1740,
              "name": "长岛县",
              "parent_id": 260
            },
            {
              "id": 1741,
              "name": "龙口市",
              "parent_id": 260
            },
            {
              "id": 1742,
              "name": "莱阳市",
              "parent_id": 260
            },
            {
              "id": 1743,
              "name": "莱州市",
              "parent_id": 260
            },
            {
              "id": 1744,
              "name": "蓬莱市",
              "parent_id": 260
            },
            {
              "id": 1745,
              "name": "招远市",
              "parent_id": 260
            },
            {
              "id": 1746,
              "name": "栖霞市",
              "parent_id": 260
            },
            {
              "id": 1747,
              "name": "海阳市",
              "parent_id": 260
            }
          ]
        },
        {
          "id": 261,
          "name": "潍坊市",
          "parent_id": 16,
          "child": [
            {
              "id": 1748,
              "name": "潍城区",
              "parent_id": 261
            },
            {
              "id": 1749,
              "name": "寒亭区",
              "parent_id": 261
            },
            {
              "id": 1750,
              "name": "坊子区",
              "parent_id": 261
            },
            {
              "id": 1751,
              "name": "奎文区",
              "parent_id": 261
            },
            {
              "id": 1752,
              "name": "临朐县",
              "parent_id": 261
            },
            {
              "id": 1753,
              "name": "昌乐县",
              "parent_id": 261
            },
            {
              "id": 1754,
              "name": "青州市",
              "parent_id": 261
            },
            {
              "id": 1755,
              "name": "诸城市",
              "parent_id": 261
            },
            {
              "id": 1756,
              "name": "寿光市",
              "parent_id": 261
            },
            {
              "id": 1757,
              "name": "安丘市",
              "parent_id": 261
            },
            {
              "id": 1758,
              "name": "高密市",
              "parent_id": 261
            },
            {
              "id": 1759,
              "name": "昌邑市",
              "parent_id": 261
            }
          ]
        },
        {
          "id": 262,
          "name": "济宁市",
          "parent_id": 16,
          "child": [
            {
              "id": 1761,
              "name": "任城区",
              "parent_id": 262
            },
            {
              "id": 1762,
              "name": "微山县",
              "parent_id": 262
            },
            {
              "id": 1763,
              "name": "鱼台县",
              "parent_id": 262
            },
            {
              "id": 1764,
              "name": "金乡县",
              "parent_id": 262
            },
            {
              "id": 1765,
              "name": "嘉祥县",
              "parent_id": 262
            },
            {
              "id": 1766,
              "name": "汶上县",
              "parent_id": 262
            },
            {
              "id": 1767,
              "name": "泗水县",
              "parent_id": 262
            },
            {
              "id": 1768,
              "name": "梁山县",
              "parent_id": 262
            },
            {
              "id": 1769,
              "name": "曲阜市",
              "parent_id": 262
            },
            {
              "id": 1770,
              "name": "兖州区",
              "parent_id": 262
            },
            {
              "id": 1771,
              "name": "邹城市",
              "parent_id": 262
            }
          ]
        },
        {
          "id": 263,
          "name": "泰安市",
          "parent_id": 16,
          "child": [
            {
              "id": 1772,
              "name": "泰山区",
              "parent_id": 263
            },
            {
              "id": 1773,
              "name": "岱岳区",
              "parent_id": 263
            },
            {
              "id": 1774,
              "name": "宁阳县",
              "parent_id": 263
            },
            {
              "id": 1775,
              "name": "东平县",
              "parent_id": 263
            },
            {
              "id": 1776,
              "name": "新泰市",
              "parent_id": 263
            },
            {
              "id": 1777,
              "name": "肥城市",
              "parent_id": 263
            }
          ]
        },
        {
          "id": 264,
          "name": "威海市",
          "parent_id": 16,
          "child": [
            {
              "id": 1778,
              "name": "环翠区",
              "parent_id": 264
            },
            {
              "id": 1779,
              "name": "文登区",
              "parent_id": 264
            },
            {
              "id": 1780,
              "name": "荣成市",
              "parent_id": 264
            },
            {
              "id": 1781,
              "name": "乳山市",
              "parent_id": 264
            }
          ]
        },
        {
          "id": 265,
          "name": "日照市",
          "parent_id": 16,
          "child": [
            {
              "id": 1782,
              "name": "东港区",
              "parent_id": 265
            },
            {
              "id": 1783,
              "name": "岚山区",
              "parent_id": 265
            },
            {
              "id": 1784,
              "name": "五莲县",
              "parent_id": 265
            },
            {
              "id": 1785,
              "name": "莒县",
              "parent_id": 265
            }
          ]
        },
        {
          "id": 266,
          "name": "莱芜市",
          "parent_id": 16,
          "child": [
            {
              "id": 1786,
              "name": "莱城区",
              "parent_id": 266
            },
            {
              "id": 1787,
              "name": "钢城区",
              "parent_id": 266
            }
          ]
        },
        {
          "id": 267,
          "name": "临沂市",
          "parent_id": 16,
          "child": [
            {
              "id": 1788,
              "name": "兰山区",
              "parent_id": 267
            },
            {
              "id": 1789,
              "name": "罗庄区",
              "parent_id": 267
            },
            {
              "id": 1790,
              "name": "河东区",
              "parent_id": 267
            },
            {
              "id": 1791,
              "name": "沂南县",
              "parent_id": 267
            },
            {
              "id": 1792,
              "name": "郯城县",
              "parent_id": 267
            },
            {
              "id": 1793,
              "name": "沂水县",
              "parent_id": 267
            },
            {
              "id": 1794,
              "name": "兰陵县",
              "parent_id": 267
            },
            {
              "id": 1795,
              "name": "费县",
              "parent_id": 267
            },
            {
              "id": 1796,
              "name": "平邑县",
              "parent_id": 267
            },
            {
              "id": 1797,
              "name": "莒南县",
              "parent_id": 267
            },
            {
              "id": 1798,
              "name": "蒙阴县",
              "parent_id": 267
            },
            {
              "id": 1799,
              "name": "临沭县",
              "parent_id": 267
            }
          ]
        },
        {
          "id": 268,
          "name": "德州市",
          "parent_id": 16,
          "child": [
            {
              "id": 1800,
              "name": "德城区",
              "parent_id": 268
            },
            {
              "id": 1801,
              "name": "陵城区",
              "parent_id": 268
            },
            {
              "id": 1802,
              "name": "宁津县",
              "parent_id": 268
            },
            {
              "id": 1803,
              "name": "庆云县",
              "parent_id": 268
            },
            {
              "id": 1804,
              "name": "临邑县",
              "parent_id": 268
            },
            {
              "id": 1805,
              "name": "齐河县",
              "parent_id": 268
            },
            {
              "id": 1806,
              "name": "平原县",
              "parent_id": 268
            },
            {
              "id": 1807,
              "name": "夏津县",
              "parent_id": 268
            },
            {
              "id": 1808,
              "name": "武城县",
              "parent_id": 268
            },
            {
              "id": 1809,
              "name": "乐陵市",
              "parent_id": 268
            },
            {
              "id": 1810,
              "name": "禹城市",
              "parent_id": 268
            }
          ]
        },
        {
          "id": 269,
          "name": "聊城市",
          "parent_id": 16,
          "child": [
            {
              "id": 1811,
              "name": "东昌府区",
              "parent_id": 269
            },
            {
              "id": 1812,
              "name": "阳谷县",
              "parent_id": 269
            },
            {
              "id": 1813,
              "name": "莘县",
              "parent_id": 269
            },
            {
              "id": 1814,
              "name": "茌平县",
              "parent_id": 269
            },
            {
              "id": 1815,
              "name": "东阿县",
              "parent_id": 269
            },
            {
              "id": 1816,
              "name": "冠县",
              "parent_id": 269
            },
            {
              "id": 1817,
              "name": "高唐县",
              "parent_id": 269
            },
            {
              "id": 1818,
              "name": "临清市",
              "parent_id": 269
            }
          ]
        },
        {
          "id": 270,
          "name": "滨州市",
          "parent_id": 16,
          "child": [
            {
              "id": 1819,
              "name": "滨城区",
              "parent_id": 270
            },
            {
              "id": 1820,
              "name": "惠民县",
              "parent_id": 270
            },
            {
              "id": 1821,
              "name": "阳信县",
              "parent_id": 270
            },
            {
              "id": 1822,
              "name": "无棣县",
              "parent_id": 270
            },
            {
              "id": 1823,
              "name": "沾化区",
              "parent_id": 270
            },
            {
              "id": 1824,
              "name": "博兴县",
              "parent_id": 270
            },
            {
              "id": 1825,
              "name": "邹平县",
              "parent_id": 270
            }
          ]
        },
        {
          "id": 271,
          "name": "菏泽市",
          "parent_id": 16,
          "child": [
            {
              "id": 1826,
              "name": "牡丹区",
              "parent_id": 271
            },
            {
              "id": 1827,
              "name": "曹县",
              "parent_id": 271
            },
            {
              "id": 1828,
              "name": "单县",
              "parent_id": 271
            },
            {
              "id": 1829,
              "name": "成武县",
              "parent_id": 271
            },
            {
              "id": 1830,
              "name": "巨野县",
              "parent_id": 271
            },
            {
              "id": 1831,
              "name": "郓城县",
              "parent_id": 271
            },
            {
              "id": 1832,
              "name": "鄄城县",
              "parent_id": 271
            },
            {
              "id": 1833,
              "name": "定陶县",
              "parent_id": 271
            },
            {
              "id": 1834,
              "name": "东明县",
              "parent_id": 271
            }
          ]
        }
      ]
    },
    {
      "id": 17,
      "name": "河南省",
      "parent_id": 0,
      "child": [
        {
          "id": 272,
          "name": "郑州市",
          "parent_id": 17,
          "child": [
            {
              "id": 1835,
              "name": "中原区",
              "parent_id": 272
            },
            {
              "id": 1836,
              "name": "二七区",
              "parent_id": 272
            },
            {
              "id": 1837,
              "name": "管城区",
              "parent_id": 272
            },
            {
              "id": 1838,
              "name": "金水区",
              "parent_id": 272
            },
            {
              "id": 1839,
              "name": "上街区",
              "parent_id": 272
            },
            {
              "id": 1840,
              "name": "惠济区",
              "parent_id": 272
            },
            {
              "id": 1841,
              "name": "中牟县",
              "parent_id": 272
            },
            {
              "id": 1842,
              "name": "巩义市",
              "parent_id": 272
            },
            {
              "id": 1843,
              "name": "荥阳市",
              "parent_id": 272
            },
            {
              "id": 1844,
              "name": "新密市",
              "parent_id": 272
            },
            {
              "id": 1845,
              "name": "新郑市",
              "parent_id": 272
            },
            {
              "id": 1846,
              "name": "登封市",
              "parent_id": 272
            }
          ]
        },
        {
          "id": 273,
          "name": "开封市",
          "parent_id": 17,
          "child": [
            {
              "id": 1847,
              "name": "龙亭区",
              "parent_id": 273
            },
            {
              "id": 1848,
              "name": "顺河区",
              "parent_id": 273
            },
            {
              "id": 1849,
              "name": "鼓楼区",
              "parent_id": 273
            },
            {
              "id": 1850,
              "name": "禹王台区",
              "parent_id": 273
            },
            {
              "id": 1852,
              "name": "杞县",
              "parent_id": 273
            },
            {
              "id": 1853,
              "name": "通许县",
              "parent_id": 273
            },
            {
              "id": 1854,
              "name": "尉氏县",
              "parent_id": 273
            },
            {
              "id": 1855,
              "name": "祥符区",
              "parent_id": 273
            },
            {
              "id": 1856,
              "name": "兰考县",
              "parent_id": 273
            }
          ]
        },
        {
          "id": 274,
          "name": "洛阳市",
          "parent_id": 17,
          "child": [
            {
              "id": 1857,
              "name": "老城区",
              "parent_id": 274
            },
            {
              "id": 1858,
              "name": "西工区",
              "parent_id": 274
            },
            {
              "id": 1859,
              "name": "瀍河区",
              "parent_id": 274
            },
            {
              "id": 1860,
              "name": "涧西区",
              "parent_id": 274
            },
            {
              "id": 1861,
              "name": "吉利区",
              "parent_id": 274
            },
            {
              "id": 1862,
              "name": "洛龙区",
              "parent_id": 274
            },
            {
              "id": 1863,
              "name": "孟津县",
              "parent_id": 274
            },
            {
              "id": 1864,
              "name": "新安县",
              "parent_id": 274
            },
            {
              "id": 1865,
              "name": "栾川县",
              "parent_id": 274
            },
            {
              "id": 1866,
              "name": "嵩县",
              "parent_id": 274
            },
            {
              "id": 1867,
              "name": "汝阳县",
              "parent_id": 274
            },
            {
              "id": 1868,
              "name": "宜阳县",
              "parent_id": 274
            },
            {
              "id": 1869,
              "name": "洛宁县",
              "parent_id": 274
            },
            {
              "id": 1870,
              "name": "伊川县",
              "parent_id": 274
            },
            {
              "id": 1871,
              "name": "偃师市",
              "parent_id": 274
            }
          ]
        },
        {
          "id": 275,
          "name": "平顶山市",
          "parent_id": 17,
          "child": [
            {
              "id": 1872,
              "name": "新华区",
              "parent_id": 275
            },
            {
              "id": 1873,
              "name": "卫东区",
              "parent_id": 275
            },
            {
              "id": 1874,
              "name": "石龙区",
              "parent_id": 275
            },
            {
              "id": 1875,
              "name": "湛河区",
              "parent_id": 275
            },
            {
              "id": 1876,
              "name": "宝丰县",
              "parent_id": 275
            },
            {
              "id": 1877,
              "name": "叶县",
              "parent_id": 275
            },
            {
              "id": 1878,
              "name": "鲁山县",
              "parent_id": 275
            },
            {
              "id": 1879,
              "name": "郏县",
              "parent_id": 275
            },
            {
              "id": 1880,
              "name": "舞钢市",
              "parent_id": 275
            },
            {
              "id": 1881,
              "name": "汝州市",
              "parent_id": 275
            }
          ]
        },
        {
          "id": 276,
          "name": "安阳市",
          "parent_id": 17,
          "child": [
            {
              "id": 1882,
              "name": "文峰区",
              "parent_id": 276
            },
            {
              "id": 1883,
              "name": "北关区",
              "parent_id": 276
            },
            {
              "id": 1884,
              "name": "殷都区",
              "parent_id": 276
            },
            {
              "id": 1885,
              "name": "龙安区",
              "parent_id": 276
            },
            {
              "id": 1886,
              "name": "安阳县",
              "parent_id": 276
            },
            {
              "id": 1887,
              "name": "汤阴县",
              "parent_id": 276
            },
            {
              "id": 1888,
              "name": "滑县",
              "parent_id": 276
            },
            {
              "id": 1889,
              "name": "内黄县",
              "parent_id": 276
            },
            {
              "id": 1890,
              "name": "林州市",
              "parent_id": 276
            }
          ]
        },
        {
          "id": 277,
          "name": "鹤壁市",
          "parent_id": 17,
          "child": [
            {
              "id": 1891,
              "name": "鹤山区",
              "parent_id": 277
            },
            {
              "id": 1892,
              "name": "山城区",
              "parent_id": 277
            },
            {
              "id": 1893,
              "name": "淇滨区",
              "parent_id": 277
            },
            {
              "id": 1894,
              "name": "浚县",
              "parent_id": 277
            },
            {
              "id": 1895,
              "name": "淇县",
              "parent_id": 277
            }
          ]
        },
        {
          "id": 278,
          "name": "新乡市",
          "parent_id": 17,
          "child": [
            {
              "id": 1896,
              "name": "红旗区",
              "parent_id": 278
            },
            {
              "id": 1897,
              "name": "卫滨区",
              "parent_id": 278
            },
            {
              "id": 1898,
              "name": "凤泉区",
              "parent_id": 278
            },
            {
              "id": 1899,
              "name": "牧野区",
              "parent_id": 278
            },
            {
              "id": 1900,
              "name": "新乡县",
              "parent_id": 278
            },
            {
              "id": 1901,
              "name": "获嘉县",
              "parent_id": 278
            },
            {
              "id": 1902,
              "name": "原阳县",
              "parent_id": 278
            },
            {
              "id": 1903,
              "name": "延津县",
              "parent_id": 278
            },
            {
              "id": 1904,
              "name": "封丘县",
              "parent_id": 278
            },
            {
              "id": 1905,
              "name": "长垣县",
              "parent_id": 278
            },
            {
              "id": 1906,
              "name": "卫辉市",
              "parent_id": 278
            },
            {
              "id": 1907,
              "name": "辉县市",
              "parent_id": 278
            }
          ]
        },
        {
          "id": 279,
          "name": "焦作市",
          "parent_id": 17,
          "child": [
            {
              "id": 1908,
              "name": "解放区",
              "parent_id": 279
            },
            {
              "id": 1909,
              "name": "中站区",
              "parent_id": 279
            },
            {
              "id": 1910,
              "name": "马村区",
              "parent_id": 279
            },
            {
              "id": 1911,
              "name": "山阳区",
              "parent_id": 279
            },
            {
              "id": 1912,
              "name": "修武县",
              "parent_id": 279
            },
            {
              "id": 1913,
              "name": "博爱县",
              "parent_id": 279
            },
            {
              "id": 1914,
              "name": "武陟县",
              "parent_id": 279
            },
            {
              "id": 1915,
              "name": "温县",
              "parent_id": 279
            },
            {
              "id": 1916,
              "name": "沁阳市",
              "parent_id": 279
            },
            {
              "id": 1917,
              "name": "孟州市",
              "parent_id": 279
            }
          ]
        },
        {
          "id": 280,
          "name": "濮阳市",
          "parent_id": 17,
          "child": [
            {
              "id": 1918,
              "name": "华龙区",
              "parent_id": 280
            },
            {
              "id": 1919,
              "name": "清丰县",
              "parent_id": 280
            },
            {
              "id": 1920,
              "name": "南乐县",
              "parent_id": 280
            },
            {
              "id": 1921,
              "name": "范县",
              "parent_id": 280
            },
            {
              "id": 1922,
              "name": "台前县",
              "parent_id": 280
            },
            {
              "id": 1923,
              "name": "濮阳县",
              "parent_id": 280
            }
          ]
        },
        {
          "id": 281,
          "name": "许昌市",
          "parent_id": 17,
          "child": [
            {
              "id": 1924,
              "name": "魏都区",
              "parent_id": 281
            },
            {
              "id": 1925,
              "name": "许昌县",
              "parent_id": 281
            },
            {
              "id": 1926,
              "name": "鄢陵县",
              "parent_id": 281
            },
            {
              "id": 1927,
              "name": "襄城县",
              "parent_id": 281
            },
            {
              "id": 1928,
              "name": "禹州市",
              "parent_id": 281
            },
            {
              "id": 1929,
              "name": "长葛市",
              "parent_id": 281
            }
          ]
        },
        {
          "id": 282,
          "name": "漯河市",
          "parent_id": 17,
          "child": [
            {
              "id": 1930,
              "name": "源汇区",
              "parent_id": 282
            },
            {
              "id": 1931,
              "name": "郾城区",
              "parent_id": 282
            },
            {
              "id": 1932,
              "name": "召陵区",
              "parent_id": 282
            },
            {
              "id": 1933,
              "name": "舞阳县",
              "parent_id": 282
            },
            {
              "id": 1934,
              "name": "临颍县",
              "parent_id": 282
            }
          ]
        },
        {
          "id": 283,
          "name": "三门峡市",
          "parent_id": 17,
          "child": [
            {
              "id": 1935,
              "name": "湖滨区",
              "parent_id": 283
            },
            {
              "id": 1936,
              "name": "渑池县",
              "parent_id": 283
            },
            {
              "id": 1937,
              "name": "陕县",
              "parent_id": 283
            },
            {
              "id": 1938,
              "name": "卢氏县",
              "parent_id": 283
            },
            {
              "id": 1939,
              "name": "义马市",
              "parent_id": 283
            },
            {
              "id": 1940,
              "name": "灵宝市",
              "parent_id": 283
            }
          ]
        },
        {
          "id": 284,
          "name": "南阳市",
          "parent_id": 17,
          "child": [
            {
              "id": 1941,
              "name": "宛城区",
              "parent_id": 284
            },
            {
              "id": 1942,
              "name": "卧龙区",
              "parent_id": 284
            },
            {
              "id": 1943,
              "name": "南召县",
              "parent_id": 284
            },
            {
              "id": 1944,
              "name": "方城县",
              "parent_id": 284
            },
            {
              "id": 1945,
              "name": "西峡县",
              "parent_id": 284
            },
            {
              "id": 1946,
              "name": "镇平县",
              "parent_id": 284
            },
            {
              "id": 1947,
              "name": "内乡县",
              "parent_id": 284
            },
            {
              "id": 1948,
              "name": "淅川县",
              "parent_id": 284
            },
            {
              "id": 1949,
              "name": "社旗县",
              "parent_id": 284
            },
            {
              "id": 1950,
              "name": "唐河县",
              "parent_id": 284
            },
            {
              "id": 1951,
              "name": "新野县",
              "parent_id": 284
            },
            {
              "id": 1952,
              "name": "桐柏县",
              "parent_id": 284
            },
            {
              "id": 1953,
              "name": "邓州市",
              "parent_id": 284
            }
          ]
        },
        {
          "id": 285,
          "name": "商丘市",
          "parent_id": 17,
          "child": [
            {
              "id": 1954,
              "name": "粱园区",
              "parent_id": 285
            },
            {
              "id": 1955,
              "name": "睢阳区",
              "parent_id": 285
            },
            {
              "id": 1956,
              "name": "民权县",
              "parent_id": 285
            },
            {
              "id": 1957,
              "name": "睢县",
              "parent_id": 285
            },
            {
              "id": 1958,
              "name": "宁陵县",
              "parent_id": 285
            },
            {
              "id": 1959,
              "name": "柘城县",
              "parent_id": 285
            },
            {
              "id": 1960,
              "name": "虞城县",
              "parent_id": 285
            },
            {
              "id": 1961,
              "name": "夏邑县",
              "parent_id": 285
            },
            {
              "id": 1962,
              "name": "永城市",
              "parent_id": 285
            }
          ]
        },
        {
          "id": 286,
          "name": "信阳市",
          "parent_id": 17,
          "child": [
            {
              "id": 1963,
              "name": "浉河区",
              "parent_id": 286
            },
            {
              "id": 1964,
              "name": "平桥区",
              "parent_id": 286
            },
            {
              "id": 1965,
              "name": "罗山县",
              "parent_id": 286
            },
            {
              "id": 1966,
              "name": "光山县",
              "parent_id": 286
            },
            {
              "id": 1967,
              "name": "新县",
              "parent_id": 286
            },
            {
              "id": 1968,
              "name": "商城县",
              "parent_id": 286
            },
            {
              "id": 1969,
              "name": "固始县",
              "parent_id": 286
            },
            {
              "id": 1970,
              "name": "潢川县",
              "parent_id": 286
            },
            {
              "id": 1971,
              "name": "淮滨县",
              "parent_id": 286
            },
            {
              "id": 1972,
              "name": "息县",
              "parent_id": 286
            }
          ]
        },
        {
          "id": 287,
          "name": "周口市",
          "parent_id": 17,
          "child": [
            {
              "id": 1973,
              "name": "川汇区",
              "parent_id": 287
            },
            {
              "id": 1974,
              "name": "扶沟县",
              "parent_id": 287
            },
            {
              "id": 1975,
              "name": "西华县",
              "parent_id": 287
            },
            {
              "id": 1976,
              "name": "商水县",
              "parent_id": 287
            },
            {
              "id": 1977,
              "name": "沈丘县",
              "parent_id": 287
            },
            {
              "id": 1978,
              "name": "郸城县",
              "parent_id": 287
            },
            {
              "id": 1979,
              "name": "淮阳县",
              "parent_id": 287
            },
            {
              "id": 1980,
              "name": "太康县",
              "parent_id": 287
            },
            {
              "id": 1981,
              "name": "鹿邑县",
              "parent_id": 287
            },
            {
              "id": 1982,
              "name": "项城市",
              "parent_id": 287
            }
          ]
        },
        {
          "id": 288,
          "name": "驻马店市",
          "parent_id": 17,
          "child": [
            {
              "id": 1983,
              "name": "驿城区",
              "parent_id": 288
            },
            {
              "id": 1984,
              "name": "西平县",
              "parent_id": 288
            },
            {
              "id": 1985,
              "name": "上蔡县",
              "parent_id": 288
            },
            {
              "id": 1986,
              "name": "平舆县",
              "parent_id": 288
            },
            {
              "id": 1987,
              "name": "正阳县",
              "parent_id": 288
            },
            {
              "id": 1988,
              "name": "确山县",
              "parent_id": 288
            },
            {
              "id": 1989,
              "name": "泌阳县",
              "parent_id": 288
            },
            {
              "id": 1990,
              "name": "汝南县",
              "parent_id": 288
            },
            {
              "id": 1991,
              "name": "遂平县",
              "parent_id": 288
            },
            {
              "id": 1992,
              "name": "新蔡县",
              "parent_id": 288
            }
          ]
        },
        {
          "id": 289,
          "name": "济源市",
          "parent_id": 17,
          "child": []
        }
      ]
    },
    {
      "id": 18,
      "name": "湖北省",
      "parent_id": 0,
      "child": [
        {
          "id": 290,
          "name": "武汉市",
          "parent_id": 18,
          "child": [
            {
              "id": 1993,
              "name": "江岸区",
              "parent_id": 290
            },
            {
              "id": 1994,
              "name": "江汉区",
              "parent_id": 290
            },
            {
              "id": 1995,
              "name": "硚口区",
              "parent_id": 290
            },
            {
              "id": 1996,
              "name": "汉阳区",
              "parent_id": 290
            },
            {
              "id": 1997,
              "name": "武昌区",
              "parent_id": 290
            },
            {
              "id": 1998,
              "name": "青山区",
              "parent_id": 290
            },
            {
              "id": 1999,
              "name": "洪山区",
              "parent_id": 290
            },
            {
              "id": 2000,
              "name": "东西湖区",
              "parent_id": 290
            },
            {
              "id": 2001,
              "name": "汉南区",
              "parent_id": 290
            },
            {
              "id": 2002,
              "name": "蔡甸区",
              "parent_id": 290
            },
            {
              "id": 2003,
              "name": "江夏区",
              "parent_id": 290
            },
            {
              "id": 2004,
              "name": "黄陂区",
              "parent_id": 290
            },
            {
              "id": 2005,
              "name": "新洲区",
              "parent_id": 290
            }
          ]
        },
        {
          "id": 291,
          "name": "黄石市",
          "parent_id": 18,
          "child": [
            {
              "id": 2006,
              "name": "黄石港区",
              "parent_id": 291
            },
            {
              "id": 2007,
              "name": "西塞山区",
              "parent_id": 291
            },
            {
              "id": 2008,
              "name": "下陆区",
              "parent_id": 291
            },
            {
              "id": 2009,
              "name": "铁山区",
              "parent_id": 291
            },
            {
              "id": 2010,
              "name": "阳新县",
              "parent_id": 291
            },
            {
              "id": 2011,
              "name": "大冶市",
              "parent_id": 291
            }
          ]
        },
        {
          "id": 292,
          "name": "十堰市",
          "parent_id": 18,
          "child": [
            {
              "id": 2012,
              "name": "茅箭区",
              "parent_id": 292
            },
            {
              "id": 2013,
              "name": "张湾区",
              "parent_id": 292
            },
            {
              "id": 2014,
              "name": "郧阳区",
              "parent_id": 292
            },
            {
              "id": 2015,
              "name": "郧西县",
              "parent_id": 292
            },
            {
              "id": 2016,
              "name": "竹山县",
              "parent_id": 292
            },
            {
              "id": 2017,
              "name": "竹溪县",
              "parent_id": 292
            },
            {
              "id": 2018,
              "name": "房县",
              "parent_id": 292
            },
            {
              "id": 2019,
              "name": "丹江口市",
              "parent_id": 292
            }
          ]
        },
        {
          "id": 293,
          "name": "宜昌市",
          "parent_id": 18,
          "child": [
            {
              "id": 2020,
              "name": "西陵区",
              "parent_id": 293
            },
            {
              "id": 2021,
              "name": "伍家岗区",
              "parent_id": 293
            },
            {
              "id": 2022,
              "name": "点军区",
              "parent_id": 293
            },
            {
              "id": 2023,
              "name": "虢亭区",
              "parent_id": 293
            },
            {
              "id": 2024,
              "name": "夷陵区",
              "parent_id": 293
            },
            {
              "id": 2025,
              "name": "远安县",
              "parent_id": 293
            },
            {
              "id": 2026,
              "name": "兴山县",
              "parent_id": 293
            },
            {
              "id": 2027,
              "name": "秭归县",
              "parent_id": 293
            },
            {
              "id": 2028,
              "name": "长阳自治县",
              "parent_id": 293
            },
            {
              "id": 2029,
              "name": "五峰自治县",
              "parent_id": 293
            },
            {
              "id": 2030,
              "name": "宜都市",
              "parent_id": 293
            },
            {
              "id": 2031,
              "name": "当阳市",
              "parent_id": 293
            },
            {
              "id": 2032,
              "name": "枝江市",
              "parent_id": 293
            }
          ]
        },
        {
          "id": 294,
          "name": "襄阳市",
          "parent_id": 18,
          "child": [
            {
              "id": 2033,
              "name": "襄城区",
              "parent_id": 294
            },
            {
              "id": 2034,
              "name": "樊城区",
              "parent_id": 294
            },
            {
              "id": 2035,
              "name": "襄州区",
              "parent_id": 294
            },
            {
              "id": 2036,
              "name": "南漳县",
              "parent_id": 294
            },
            {
              "id": 2037,
              "name": "谷城县",
              "parent_id": 294
            },
            {
              "id": 2038,
              "name": "保康县",
              "parent_id": 294
            },
            {
              "id": 2039,
              "name": "老河口市",
              "parent_id": 294
            },
            {
              "id": 2040,
              "name": "枣阳市",
              "parent_id": 294
            },
            {
              "id": 2041,
              "name": "宜城市",
              "parent_id": 294
            }
          ]
        },
        {
          "id": 295,
          "name": "鄂州市",
          "parent_id": 18,
          "child": [
            {
              "id": 2042,
              "name": "粱子湖区",
              "parent_id": 295
            },
            {
              "id": 2043,
              "name": "华容区",
              "parent_id": 295
            },
            {
              "id": 2044,
              "name": "鄂城区",
              "parent_id": 295
            }
          ]
        },
        {
          "id": 296,
          "name": "荆门市",
          "parent_id": 18,
          "child": [
            {
              "id": 2045,
              "name": "东宝区",
              "parent_id": 296
            },
            {
              "id": 2046,
              "name": "掇刀区",
              "parent_id": 296
            },
            {
              "id": 2047,
              "name": "京山县",
              "parent_id": 296
            },
            {
              "id": 2048,
              "name": "沙洋县",
              "parent_id": 296
            },
            {
              "id": 2049,
              "name": "钟祥市",
              "parent_id": 296
            }
          ]
        },
        {
          "id": 297,
          "name": "孝感市",
          "parent_id": 18,
          "child": [
            {
              "id": 2050,
              "name": "孝南区",
              "parent_id": 297
            },
            {
              "id": 2051,
              "name": "大悟县",
              "parent_id": 297
            },
            {
              "id": 2052,
              "name": "云梦县",
              "parent_id": 297
            },
            {
              "id": 2053,
              "name": "应城市",
              "parent_id": 297
            },
            {
              "id": 2054,
              "name": "安陆市",
              "parent_id": 297
            },
            {
              "id": 2055,
              "name": "汉川市",
              "parent_id": 297
            }
          ]
        },
        {
          "id": 298,
          "name": "荆州市",
          "parent_id": 18,
          "child": [
            {
              "id": 2056,
              "name": "沙市区",
              "parent_id": 298
            },
            {
              "id": 2057,
              "name": "荆州区",
              "parent_id": 298
            },
            {
              "id": 2058,
              "name": "公安县",
              "parent_id": 298
            },
            {
              "id": 2059,
              "name": "监利县",
              "parent_id": 298
            },
            {
              "id": 2060,
              "name": "江陵县",
              "parent_id": 298
            },
            {
              "id": 2061,
              "name": "石首市",
              "parent_id": 298
            },
            {
              "id": 2062,
              "name": "洪湖市",
              "parent_id": 298
            },
            {
              "id": 2063,
              "name": "松滋市",
              "parent_id": 298
            }
          ]
        },
        {
          "id": 299,
          "name": "黄冈市",
          "parent_id": 18,
          "child": [
            {
              "id": 2064,
              "name": "黄州区",
              "parent_id": 299
            },
            {
              "id": 2065,
              "name": "团风县",
              "parent_id": 299
            },
            {
              "id": 2066,
              "name": "红安县",
              "parent_id": 299
            },
            {
              "id": 2067,
              "name": "罗田县",
              "parent_id": 299
            },
            {
              "id": 2068,
              "name": "英山县",
              "parent_id": 299
            },
            {
              "id": 2069,
              "name": "浠水县",
              "parent_id": 299
            },
            {
              "id": 2070,
              "name": "蕲春县",
              "parent_id": 299
            },
            {
              "id": 2071,
              "name": "黄梅县",
              "parent_id": 299
            },
            {
              "id": 2072,
              "name": "麻城市",
              "parent_id": 299
            },
            {
              "id": 2073,
              "name": "武穴市",
              "parent_id": 299
            }
          ]
        },
        {
          "id": 300,
          "name": "咸宁市",
          "parent_id": 18,
          "child": [
            {
              "id": 2074,
              "name": "咸安区",
              "parent_id": 300
            },
            {
              "id": 2075,
              "name": "嘉鱼县",
              "parent_id": 300
            },
            {
              "id": 2076,
              "name": "通城县",
              "parent_id": 300
            },
            {
              "id": 2077,
              "name": "崇阳县",
              "parent_id": 300
            },
            {
              "id": 2078,
              "name": "通山县",
              "parent_id": 300
            },
            {
              "id": 2079,
              "name": "赤壁市",
              "parent_id": 300
            }
          ]
        },
        {
          "id": 301,
          "name": "随州市",
          "parent_id": 18,
          "child": [
            {
              "id": 2080,
              "name": "曾都区",
              "parent_id": 301
            },
            {
              "id": 2081,
              "name": "随县",
              "parent_id": 301
            },
            {
              "id": 2082,
              "name": "广水市",
              "parent_id": 301
            }
          ]
        },
        {
          "id": 302,
          "name": "恩施自治州",
          "parent_id": 18,
          "child": [
            {
              "id": 2083,
              "name": "恩施市",
              "parent_id": 302
            },
            {
              "id": 2084,
              "name": "利川市",
              "parent_id": 302
            },
            {
              "id": 2085,
              "name": "建始县",
              "parent_id": 302
            },
            {
              "id": 2086,
              "name": "巴东县",
              "parent_id": 302
            },
            {
              "id": 2087,
              "name": "宣恩县",
              "parent_id": 302
            },
            {
              "id": 2088,
              "name": "咸丰县",
              "parent_id": 302
            },
            {
              "id": 2089,
              "name": "来凤县",
              "parent_id": 302
            },
            {
              "id": 2090,
              "name": "鹤峰县",
              "parent_id": 302
            }
          ]
        },
        {
          "id": 303,
          "name": "仙桃市",
          "parent_id": 18,
          "child": []
        },
        {
          "id": 304,
          "name": "潜江市",
          "parent_id": 18,
          "child": []
        },
        {
          "id": 305,
          "name": "天门市",
          "parent_id": 18,
          "child": []
        },
        {
          "id": 306,
          "name": "神农架林区",
          "parent_id": 18,
          "child": []
        }
      ]
    },
    {
      "id": 19,
      "name": "湖南省",
      "parent_id": 0,
      "child": [
        {
          "id": 307,
          "name": "长沙市",
          "parent_id": 19,
          "child": [
            {
              "id": 2091,
              "name": "芙蓉区",
              "parent_id": 307
            },
            {
              "id": 2092,
              "name": "天心区",
              "parent_id": 307
            },
            {
              "id": 2093,
              "name": "岳麓区",
              "parent_id": 307
            },
            {
              "id": 2094,
              "name": "开福区",
              "parent_id": 307
            },
            {
              "id": 2095,
              "name": "雨花区",
              "parent_id": 307
            },
            {
              "id": 2096,
              "name": "望城区",
              "parent_id": 307
            },
            {
              "id": 2097,
              "name": "长沙县",
              "parent_id": 307
            },
            {
              "id": 2098,
              "name": "宁乡县",
              "parent_id": 307
            },
            {
              "id": 2099,
              "name": "浏阳市",
              "parent_id": 307
            }
          ]
        },
        {
          "id": 308,
          "name": "株洲市",
          "parent_id": 19,
          "child": [
            {
              "id": 2100,
              "name": "荷塘区",
              "parent_id": 308
            },
            {
              "id": 2101,
              "name": "芦淞区",
              "parent_id": 308
            },
            {
              "id": 2102,
              "name": "石峰区",
              "parent_id": 308
            },
            {
              "id": 2103,
              "name": "天元区",
              "parent_id": 308
            },
            {
              "id": 2104,
              "name": "株洲县",
              "parent_id": 308
            },
            {
              "id": 2105,
              "name": "攸县",
              "parent_id": 308
            },
            {
              "id": 2106,
              "name": "茶陵县",
              "parent_id": 308
            },
            {
              "id": 2107,
              "name": "炎陵县",
              "parent_id": 308
            },
            {
              "id": 2108,
              "name": "醴陵市",
              "parent_id": 308
            }
          ]
        },
        {
          "id": 309,
          "name": "湘潭市",
          "parent_id": 19,
          "child": [
            {
              "id": 2109,
              "name": "雨湖区",
              "parent_id": 309
            },
            {
              "id": 2110,
              "name": "岳塘区",
              "parent_id": 309
            },
            {
              "id": 2111,
              "name": "湘潭县",
              "parent_id": 309
            },
            {
              "id": 2112,
              "name": "湘乡市",
              "parent_id": 309
            },
            {
              "id": 2113,
              "name": "韶山市",
              "parent_id": 309
            }
          ]
        },
        {
          "id": 310,
          "name": "衡阳市",
          "parent_id": 19,
          "child": [
            {
              "id": 2114,
              "name": "珠晖区",
              "parent_id": 310
            },
            {
              "id": 2115,
              "name": "雁峰区",
              "parent_id": 310
            },
            {
              "id": 2116,
              "name": "石鼓区",
              "parent_id": 310
            },
            {
              "id": 2117,
              "name": "蒸湘区",
              "parent_id": 310
            },
            {
              "id": 2118,
              "name": "南岳区",
              "parent_id": 310
            },
            {
              "id": 2119,
              "name": "衡阳县",
              "parent_id": 310
            },
            {
              "id": 2120,
              "name": "衡南县",
              "parent_id": 310
            },
            {
              "id": 2121,
              "name": "衡山县",
              "parent_id": 310
            },
            {
              "id": 2122,
              "name": "衡东县",
              "parent_id": 310
            },
            {
              "id": 2123,
              "name": "祁东县",
              "parent_id": 310
            },
            {
              "id": 2124,
              "name": "耒阳市",
              "parent_id": 310
            },
            {
              "id": 2125,
              "name": "常宁市",
              "parent_id": 310
            }
          ]
        },
        {
          "id": 311,
          "name": "邵阳市",
          "parent_id": 19,
          "child": [
            {
              "id": 2126,
              "name": "双清区",
              "parent_id": 311
            },
            {
              "id": 2127,
              "name": "大祥区",
              "parent_id": 311
            },
            {
              "id": 2128,
              "name": "北塔区",
              "parent_id": 311
            },
            {
              "id": 2129,
              "name": "邵东县",
              "parent_id": 311
            },
            {
              "id": 2130,
              "name": "新邵县",
              "parent_id": 311
            },
            {
              "id": 2131,
              "name": "邵阳县",
              "parent_id": 311
            },
            {
              "id": 2132,
              "name": "隆回县",
              "parent_id": 311
            },
            {
              "id": 2133,
              "name": "洞口县",
              "parent_id": 311
            },
            {
              "id": 2134,
              "name": "绥宁县",
              "parent_id": 311
            },
            {
              "id": 2135,
              "name": "新宁县",
              "parent_id": 311
            },
            {
              "id": 2136,
              "name": "城步自治县",
              "parent_id": 311
            },
            {
              "id": 2137,
              "name": "武冈市",
              "parent_id": 311
            }
          ]
        },
        {
          "id": 312,
          "name": "岳阳市",
          "parent_id": 19,
          "child": [
            {
              "id": 2138,
              "name": "岳阳楼区",
              "parent_id": 312
            },
            {
              "id": 2139,
              "name": "云溪区",
              "parent_id": 312
            },
            {
              "id": 2140,
              "name": "君山区",
              "parent_id": 312
            },
            {
              "id": 2141,
              "name": "岳阳县",
              "parent_id": 312
            },
            {
              "id": 2142,
              "name": "华容县",
              "parent_id": 312
            },
            {
              "id": 2143,
              "name": "湘阴县",
              "parent_id": 312
            },
            {
              "id": 2144,
              "name": "平江县",
              "parent_id": 312
            },
            {
              "id": 2145,
              "name": "汨罗市",
              "parent_id": 312
            },
            {
              "id": 2146,
              "name": "临湘市",
              "parent_id": 312
            }
          ]
        },
        {
          "id": 313,
          "name": "常德市",
          "parent_id": 19,
          "child": [
            {
              "id": 2147,
              "name": "武陵区",
              "parent_id": 313
            },
            {
              "id": 2148,
              "name": "鼎城区",
              "parent_id": 313
            },
            {
              "id": 2149,
              "name": "安乡县",
              "parent_id": 313
            },
            {
              "id": 2150,
              "name": "汉寿县",
              "parent_id": 313
            },
            {
              "id": 2151,
              "name": "澧县",
              "parent_id": 313
            },
            {
              "id": 2152,
              "name": "临澧县",
              "parent_id": 313
            },
            {
              "id": 2153,
              "name": "桃源县",
              "parent_id": 313
            },
            {
              "id": 2154,
              "name": "石门县",
              "parent_id": 313
            },
            {
              "id": 2155,
              "name": "津市市",
              "parent_id": 313
            }
          ]
        },
        {
          "id": 314,
          "name": "张家界市",
          "parent_id": 19,
          "child": [
            {
              "id": 2156,
              "name": "永定区",
              "parent_id": 314
            },
            {
              "id": 2157,
              "name": "武陵源区",
              "parent_id": 314
            },
            {
              "id": 2158,
              "name": "慈利县",
              "parent_id": 314
            },
            {
              "id": 2159,
              "name": "桑植县",
              "parent_id": 314
            }
          ]
        },
        {
          "id": 315,
          "name": "益阳市",
          "parent_id": 19,
          "child": [
            {
              "id": 2160,
              "name": "资阳区",
              "parent_id": 315
            },
            {
              "id": 2161,
              "name": "赫山区",
              "parent_id": 315
            },
            {
              "id": 2162,
              "name": "南县",
              "parent_id": 315
            },
            {
              "id": 2163,
              "name": "桃江县",
              "parent_id": 315
            },
            {
              "id": 2164,
              "name": "安化县",
              "parent_id": 315
            },
            {
              "id": 2165,
              "name": "沅江市",
              "parent_id": 315
            }
          ]
        },
        {
          "id": 316,
          "name": "郴州市",
          "parent_id": 19,
          "child": [
            {
              "id": 2166,
              "name": "北湖区",
              "parent_id": 316
            },
            {
              "id": 2167,
              "name": "苏仙区",
              "parent_id": 316
            },
            {
              "id": 2168,
              "name": "桂阳县",
              "parent_id": 316
            },
            {
              "id": 2169,
              "name": "宜章县",
              "parent_id": 316
            },
            {
              "id": 2170,
              "name": "永兴县",
              "parent_id": 316
            },
            {
              "id": 2171,
              "name": "嘉禾县",
              "parent_id": 316
            },
            {
              "id": 2172,
              "name": "临武县",
              "parent_id": 316
            },
            {
              "id": 2173,
              "name": "汝城县",
              "parent_id": 316
            },
            {
              "id": 2174,
              "name": "桂东县",
              "parent_id": 316
            },
            {
              "id": 2175,
              "name": "安仁县",
              "parent_id": 316
            },
            {
              "id": 2176,
              "name": "资兴市",
              "parent_id": 316
            }
          ]
        },
        {
          "id": 317,
          "name": "永州市",
          "parent_id": 19,
          "child": [
            {
              "id": 2177,
              "name": "零陵区",
              "parent_id": 317
            },
            {
              "id": 2178,
              "name": "冷水滩区",
              "parent_id": 317
            },
            {
              "id": 2179,
              "name": "祁阳县",
              "parent_id": 317
            },
            {
              "id": 2180,
              "name": "东安县",
              "parent_id": 317
            },
            {
              "id": 2181,
              "name": "双牌县",
              "parent_id": 317
            },
            {
              "id": 2182,
              "name": "道县",
              "parent_id": 317
            },
            {
              "id": 2183,
              "name": "江永县",
              "parent_id": 317
            },
            {
              "id": 2184,
              "name": "宁远县",
              "parent_id": 317
            },
            {
              "id": 2185,
              "name": "蓝山县",
              "parent_id": 317
            },
            {
              "id": 2186,
              "name": "新田县",
              "parent_id": 317
            },
            {
              "id": 2187,
              "name": "江华自治县",
              "parent_id": 317
            }
          ]
        },
        {
          "id": 318,
          "name": "怀化市",
          "parent_id": 19,
          "child": [
            {
              "id": 2188,
              "name": "鹤城区",
              "parent_id": 318
            },
            {
              "id": 2189,
              "name": "中方县",
              "parent_id": 318
            },
            {
              "id": 2190,
              "name": "沅陵县",
              "parent_id": 318
            },
            {
              "id": 2191,
              "name": "辰溪县",
              "parent_id": 318
            },
            {
              "id": 2192,
              "name": "溆浦县",
              "parent_id": 318
            },
            {
              "id": 2193,
              "name": "会同县",
              "parent_id": 318
            },
            {
              "id": 2194,
              "name": "麻阳自治县",
              "parent_id": 318
            },
            {
              "id": 2195,
              "name": "新晃自治县",
              "parent_id": 318
            },
            {
              "id": 2196,
              "name": "芷江自治县",
              "parent_id": 318
            },
            {
              "id": 2197,
              "name": "靖州自治县",
              "parent_id": 318
            },
            {
              "id": 2198,
              "name": "通道自治县",
              "parent_id": 318
            },
            {
              "id": 2199,
              "name": "洪江市",
              "parent_id": 318
            }
          ]
        },
        {
          "id": 319,
          "name": "娄底市",
          "parent_id": 19,
          "child": [
            {
              "id": 2200,
              "name": "娄星区",
              "parent_id": 319
            },
            {
              "id": 2201,
              "name": "双峰县",
              "parent_id": 319
            },
            {
              "id": 2202,
              "name": "新化县",
              "parent_id": 319
            },
            {
              "id": 2203,
              "name": "冷水江市",
              "parent_id": 319
            },
            {
              "id": 2204,
              "name": "涟源市",
              "parent_id": 319
            }
          ]
        },
        {
          "id": 320,
          "name": "湘西自治州",
          "parent_id": 19,
          "child": [
            {
              "id": 2205,
              "name": "吉首市",
              "parent_id": 320
            },
            {
              "id": 2206,
              "name": "泸溪县",
              "parent_id": 320
            },
            {
              "id": 2207,
              "name": "凤凰县",
              "parent_id": 320
            },
            {
              "id": 2208,
              "name": "花垣县",
              "parent_id": 320
            },
            {
              "id": 2209,
              "name": "保靖县",
              "parent_id": 320
            },
            {
              "id": 2210,
              "name": "古丈县",
              "parent_id": 320
            },
            {
              "id": 2211,
              "name": "永顺县",
              "parent_id": 320
            },
            {
              "id": 2212,
              "name": "龙山县",
              "parent_id": 320
            }
          ]
        }
      ]
    },
    {
      "id": 20,
      "name": "广东省",
      "parent_id": 0,
      "child": [
        {
          "id": 321,
          "name": "广州市",
          "parent_id": 20,
          "child": [
            {
              "id": 2213,
              "name": "荔湾区",
              "parent_id": 321
            },
            {
              "id": 2214,
              "name": "越秀区",
              "parent_id": 321
            },
            {
              "id": 2215,
              "name": "海珠区",
              "parent_id": 321
            },
            {
              "id": 2216,
              "name": "天河区",
              "parent_id": 321
            },
            {
              "id": 2217,
              "name": "白云区",
              "parent_id": 321
            },
            {
              "id": 2218,
              "name": "黄埔区",
              "parent_id": 321
            },
            {
              "id": 2219,
              "name": "番禺区",
              "parent_id": 321
            },
            {
              "id": 2220,
              "name": "花都区",
              "parent_id": 321
            },
            {
              "id": 2221,
              "name": "南沙区",
              "parent_id": 321
            },
            {
              "id": 2223,
              "name": "增城区",
              "parent_id": 321
            },
            {
              "id": 2224,
              "name": "从化区",
              "parent_id": 321
            }
          ]
        },
        {
          "id": 322,
          "name": "韶关市",
          "parent_id": 20,
          "child": [
            {
              "id": 2225,
              "name": "武江区",
              "parent_id": 322
            },
            {
              "id": 2226,
              "name": "浈江区",
              "parent_id": 322
            },
            {
              "id": 2227,
              "name": "曲江区",
              "parent_id": 322
            },
            {
              "id": 2228,
              "name": "始兴县",
              "parent_id": 322
            },
            {
              "id": 2229,
              "name": "仁化县",
              "parent_id": 322
            },
            {
              "id": 2230,
              "name": "翁源县",
              "parent_id": 322
            },
            {
              "id": 2231,
              "name": "乳源自治县",
              "parent_id": 322
            },
            {
              "id": 2232,
              "name": "新丰县",
              "parent_id": 322
            },
            {
              "id": 2233,
              "name": "乐昌市",
              "parent_id": 322
            },
            {
              "id": 2234,
              "name": "南雄市",
              "parent_id": 322
            }
          ]
        },
        {
          "id": 323,
          "name": "深圳市",
          "parent_id": 20,
          "child": [
            {
              "id": 2235,
              "name": "罗湖区",
              "parent_id": 323
            },
            {
              "id": 2236,
              "name": "福田区",
              "parent_id": 323
            },
            {
              "id": 2237,
              "name": "南山区",
              "parent_id": 323
            },
            {
              "id": 2238,
              "name": "宝安区",
              "parent_id": 323
            },
            {
              "id": 2239,
              "name": "龙岗区",
              "parent_id": 323
            },
            {
              "id": 2240,
              "name": "盐田区",
              "parent_id": 323
            }
          ]
        },
        {
          "id": 324,
          "name": "珠海市",
          "parent_id": 20,
          "child": [
            {
              "id": 2241,
              "name": "香洲区",
              "parent_id": 324
            },
            {
              "id": 2242,
              "name": "斗门区",
              "parent_id": 324
            },
            {
              "id": 2243,
              "name": "金湾区",
              "parent_id": 324
            }
          ]
        },
        {
          "id": 325,
          "name": "汕头市",
          "parent_id": 20,
          "child": [
            {
              "id": 2244,
              "name": "龙湖区",
              "parent_id": 325
            },
            {
              "id": 2245,
              "name": "金平区",
              "parent_id": 325
            },
            {
              "id": 2246,
              "name": "濠江区",
              "parent_id": 325
            },
            {
              "id": 2247,
              "name": "潮阳区",
              "parent_id": 325
            },
            {
              "id": 2248,
              "name": "潮南区",
              "parent_id": 325
            },
            {
              "id": 2249,
              "name": "澄海区",
              "parent_id": 325
            },
            {
              "id": 2250,
              "name": "南澳县",
              "parent_id": 325
            }
          ]
        },
        {
          "id": 326,
          "name": "佛山市",
          "parent_id": 20,
          "child": [
            {
              "id": 2251,
              "name": "禅城区",
              "parent_id": 326
            },
            {
              "id": 2252,
              "name": "南海区",
              "parent_id": 326
            },
            {
              "id": 2253,
              "name": "顺德区",
              "parent_id": 326
            },
            {
              "id": 2254,
              "name": "三水区",
              "parent_id": 326
            },
            {
              "id": 2255,
              "name": "高明区",
              "parent_id": 326
            }
          ]
        },
        {
          "id": 327,
          "name": "江门市",
          "parent_id": 20,
          "child": [
            {
              "id": 2256,
              "name": "蓬江区",
              "parent_id": 327
            },
            {
              "id": 2257,
              "name": "江海区",
              "parent_id": 327
            },
            {
              "id": 2258,
              "name": "新会区",
              "parent_id": 327
            },
            {
              "id": 2259,
              "name": "台山市",
              "parent_id": 327
            },
            {
              "id": 2260,
              "name": "开平市",
              "parent_id": 327
            },
            {
              "id": 2261,
              "name": "鹤山市",
              "parent_id": 327
            },
            {
              "id": 2262,
              "name": "恩平市",
              "parent_id": 327
            }
          ]
        },
        {
          "id": 328,
          "name": "湛江市",
          "parent_id": 20,
          "child": [
            {
              "id": 2263,
              "name": "赤坎区",
              "parent_id": 328
            },
            {
              "id": 2264,
              "name": "霞山区",
              "parent_id": 328
            },
            {
              "id": 2265,
              "name": "坡头区",
              "parent_id": 328
            },
            {
              "id": 2266,
              "name": "麻章区",
              "parent_id": 328
            },
            {
              "id": 2267,
              "name": "遂溪县",
              "parent_id": 328
            },
            {
              "id": 2268,
              "name": "徐闻县",
              "parent_id": 328
            },
            {
              "id": 2269,
              "name": "廉江市",
              "parent_id": 328
            },
            {
              "id": 2270,
              "name": "雷州市",
              "parent_id": 328
            },
            {
              "id": 2271,
              "name": "吴川市",
              "parent_id": 328
            }
          ]
        },
        {
          "id": 329,
          "name": "茂名市",
          "parent_id": 20,
          "child": [
            {
              "id": 2272,
              "name": "茂南区",
              "parent_id": 329
            },
            {
              "id": 2274,
              "name": "电白区",
              "parent_id": 329
            },
            {
              "id": 2275,
              "name": "高州市",
              "parent_id": 329
            },
            {
              "id": 2276,
              "name": "化州市",
              "parent_id": 329
            },
            {
              "id": 2277,
              "name": "信宜市",
              "parent_id": 329
            }
          ]
        },
        {
          "id": 330,
          "name": "肇庆市",
          "parent_id": 20,
          "child": [
            {
              "id": 2278,
              "name": "端州区",
              "parent_id": 330
            },
            {
              "id": 2279,
              "name": "鼎湖区",
              "parent_id": 330
            },
            {
              "id": 2280,
              "name": "广宁县",
              "parent_id": 330
            },
            {
              "id": 2281,
              "name": "怀集县",
              "parent_id": 330
            },
            {
              "id": 2282,
              "name": "封开县",
              "parent_id": 330
            },
            {
              "id": 2283,
              "name": "德庆县",
              "parent_id": 330
            },
            {
              "id": 2284,
              "name": "高要市",
              "parent_id": 330
            },
            {
              "id": 2285,
              "name": "四会市",
              "parent_id": 330
            }
          ]
        },
        {
          "id": 331,
          "name": "惠州市",
          "parent_id": 20,
          "child": [
            {
              "id": 2286,
              "name": "惠城区",
              "parent_id": 331
            },
            {
              "id": 2287,
              "name": "惠阳区",
              "parent_id": 331
            },
            {
              "id": 2288,
              "name": "博罗县",
              "parent_id": 331
            },
            {
              "id": 2289,
              "name": "惠东县",
              "parent_id": 331
            },
            {
              "id": 2290,
              "name": "龙门县",
              "parent_id": 331
            }
          ]
        },
        {
          "id": 332,
          "name": "梅州市",
          "parent_id": 20,
          "child": [
            {
              "id": 2291,
              "name": "梅江区",
              "parent_id": 332
            },
            {
              "id": 2292,
              "name": "梅县区",
              "parent_id": 332
            },
            {
              "id": 2293,
              "name": "大埔县",
              "parent_id": 332
            },
            {
              "id": 2294,
              "name": "丰顺县",
              "parent_id": 332
            },
            {
              "id": 2295,
              "name": "五华县",
              "parent_id": 332
            },
            {
              "id": 2296,
              "name": "平远县",
              "parent_id": 332
            },
            {
              "id": 2297,
              "name": "蕉岭县",
              "parent_id": 332
            },
            {
              "id": 2298,
              "name": "兴宁市",
              "parent_id": 332
            }
          ]
        },
        {
          "id": 333,
          "name": "汕尾市",
          "parent_id": 20,
          "child": [
            {
              "id": 2299,
              "name": "城区区",
              "parent_id": 333
            },
            {
              "id": 2300,
              "name": "海丰县",
              "parent_id": 333
            },
            {
              "id": 2301,
              "name": "陆河县",
              "parent_id": 333
            },
            {
              "id": 2302,
              "name": "陆丰市",
              "parent_id": 333
            }
          ]
        },
        {
          "id": 334,
          "name": "河源市",
          "parent_id": 20,
          "child": [
            {
              "id": 2303,
              "name": "源城区",
              "parent_id": 334
            },
            {
              "id": 2304,
              "name": "紫金县",
              "parent_id": 334
            },
            {
              "id": 2305,
              "name": "龙川县",
              "parent_id": 334
            },
            {
              "id": 2306,
              "name": "连平县",
              "parent_id": 334
            },
            {
              "id": 2307,
              "name": "和平县",
              "parent_id": 334
            },
            {
              "id": 2308,
              "name": "东源县",
              "parent_id": 334
            }
          ]
        },
        {
          "id": 335,
          "name": "阳江市",
          "parent_id": 20,
          "child": [
            {
              "id": 2309,
              "name": "江城区",
              "parent_id": 335
            },
            {
              "id": 2310,
              "name": "阳西县",
              "parent_id": 335
            },
            {
              "id": 2311,
              "name": "阳东区",
              "parent_id": 335
            },
            {
              "id": 2312,
              "name": "阳春市",
              "parent_id": 335
            }
          ]
        },
        {
          "id": 336,
          "name": "清远市",
          "parent_id": 20,
          "child": [
            {
              "id": 2313,
              "name": "清城区",
              "parent_id": 336
            },
            {
              "id": 2314,
              "name": "佛冈县",
              "parent_id": 336
            },
            {
              "id": 2315,
              "name": "阳山县",
              "parent_id": 336
            },
            {
              "id": 2316,
              "name": "连山自治县",
              "parent_id": 336
            },
            {
              "id": 2317,
              "name": "连南自治县",
              "parent_id": 336
            },
            {
              "id": 2318,
              "name": "清新县",
              "parent_id": 336
            },
            {
              "id": 2319,
              "name": "英德市",
              "parent_id": 336
            },
            {
              "id": 2320,
              "name": "连州市",
              "parent_id": 336
            }
          ]
        },
        {
          "id": 337,
          "name": "东莞市",
          "parent_id": 20,
          "child": []
        },
        {
          "id": 338,
          "name": "中山市",
          "parent_id": 20,
          "child": []
        },
        {
          "id": 339,
          "name": "潮州市",
          "parent_id": 20,
          "child": [
            {
              "id": 2321,
              "name": "湘桥区",
              "parent_id": 339
            },
            {
              "id": 2322,
              "name": "潮安区",
              "parent_id": 339
            },
            {
              "id": 2323,
              "name": "饶平县",
              "parent_id": 339
            }
          ]
        },
        {
          "id": 340,
          "name": "揭阳市",
          "parent_id": 20,
          "child": [
            {
              "id": 2324,
              "name": "榕城区",
              "parent_id": 340
            },
            {
              "id": 2325,
              "name": "揭东县",
              "parent_id": 340
            },
            {
              "id": 2326,
              "name": "揭西县",
              "parent_id": 340
            },
            {
              "id": 2327,
              "name": "惠来县",
              "parent_id": 340
            },
            {
              "id": 2328,
              "name": "普宁市",
              "parent_id": 340
            }
          ]
        },
        {
          "id": 341,
          "name": "云浮市",
          "parent_id": 20,
          "child": [
            {
              "id": 2329,
              "name": "云城区",
              "parent_id": 341
            },
            {
              "id": 2330,
              "name": "新兴县",
              "parent_id": 341
            },
            {
              "id": 2331,
              "name": "郁南县",
              "parent_id": 341
            },
            {
              "id": 2332,
              "name": "云安区",
              "parent_id": 341
            },
            {
              "id": 2333,
              "name": "罗定市",
              "parent_id": 341
            }
          ]
        }
      ]
    },
    {
      "id": 21,
      "name": "广西自治区",
      "parent_id": 0,
      "child": [
        {
          "id": 342,
          "name": "南宁市",
          "parent_id": 21,
          "child": [
            {
              "id": 2334,
              "name": "兴宁区",
              "parent_id": 342
            },
            {
              "id": 2335,
              "name": "青秀区",
              "parent_id": 342
            },
            {
              "id": 2336,
              "name": "江南区",
              "parent_id": 342
            },
            {
              "id": 2337,
              "name": "西乡塘区",
              "parent_id": 342
            },
            {
              "id": 2338,
              "name": "良庆区",
              "parent_id": 342
            },
            {
              "id": 2339,
              "name": "邕宁区",
              "parent_id": 342
            },
            {
              "id": 2340,
              "name": "武鸣县",
              "parent_id": 342
            },
            {
              "id": 2341,
              "name": "隆安县",
              "parent_id": 342
            },
            {
              "id": 2342,
              "name": "马山县",
              "parent_id": 342
            },
            {
              "id": 2343,
              "name": "上林县",
              "parent_id": 342
            },
            {
              "id": 2344,
              "name": "宾阳县",
              "parent_id": 342
            },
            {
              "id": 2345,
              "name": "横县",
              "parent_id": 342
            }
          ]
        },
        {
          "id": 343,
          "name": "柳州市",
          "parent_id": 21,
          "child": [
            {
              "id": 2346,
              "name": "城中区",
              "parent_id": 343
            },
            {
              "id": 2347,
              "name": "鱼峰区",
              "parent_id": 343
            },
            {
              "id": 2348,
              "name": "柳南区",
              "parent_id": 343
            },
            {
              "id": 2349,
              "name": "柳北区",
              "parent_id": 343
            },
            {
              "id": 2350,
              "name": "柳江县",
              "parent_id": 343
            },
            {
              "id": 2351,
              "name": "柳城县",
              "parent_id": 343
            },
            {
              "id": 2352,
              "name": "鹿寨县",
              "parent_id": 343
            },
            {
              "id": 2353,
              "name": "融安县",
              "parent_id": 343
            },
            {
              "id": 2354,
              "name": "融水自治县",
              "parent_id": 343
            },
            {
              "id": 2355,
              "name": "三江自治县",
              "parent_id": 343
            }
          ]
        },
        {
          "id": 344,
          "name": "桂林市",
          "parent_id": 21,
          "child": [
            {
              "id": 2356,
              "name": "秀峰区",
              "parent_id": 344
            },
            {
              "id": 2357,
              "name": "叠彩区",
              "parent_id": 344
            },
            {
              "id": 2358,
              "name": "象山区",
              "parent_id": 344
            },
            {
              "id": 2359,
              "name": "七星区",
              "parent_id": 344
            },
            {
              "id": 2360,
              "name": "雁山区",
              "parent_id": 344
            },
            {
              "id": 2361,
              "name": "阳朔县",
              "parent_id": 344
            },
            {
              "id": 2362,
              "name": "临桂区",
              "parent_id": 344
            },
            {
              "id": 2363,
              "name": "灵川县",
              "parent_id": 344
            },
            {
              "id": 2364,
              "name": "全州县",
              "parent_id": 344
            },
            {
              "id": 2365,
              "name": "兴安县",
              "parent_id": 344
            },
            {
              "id": 2366,
              "name": "永福县",
              "parent_id": 344
            },
            {
              "id": 2367,
              "name": "灌阳县",
              "parent_id": 344
            },
            {
              "id": 2368,
              "name": "龙胜自治县",
              "parent_id": 344
            },
            {
              "id": 2369,
              "name": "资源县",
              "parent_id": 344
            },
            {
              "id": 2370,
              "name": "平乐县",
              "parent_id": 344
            },
            {
              "id": 2371,
              "name": "荔浦县",
              "parent_id": 344
            },
            {
              "id": 2372,
              "name": "恭城自治县",
              "parent_id": 344
            }
          ]
        },
        {
          "id": 345,
          "name": "梧州市",
          "parent_id": 21,
          "child": [
            {
              "id": 2373,
              "name": "龙圩区",
              "parent_id": 345
            },
            {
              "id": 2374,
              "name": "万秀区",
              "parent_id": 345
            },
            {
              "id": 2375,
              "name": "长洲区",
              "parent_id": 345
            },
            {
              "id": 2376,
              "name": "苍梧县",
              "parent_id": 345
            },
            {
              "id": 2377,
              "name": "藤县",
              "parent_id": 345
            },
            {
              "id": 2378,
              "name": "蒙山县",
              "parent_id": 345
            },
            {
              "id": 2379,
              "name": "岑溪市",
              "parent_id": 345
            }
          ]
        },
        {
          "id": 346,
          "name": "北海市",
          "parent_id": 21,
          "child": [
            {
              "id": 2380,
              "name": "海城区",
              "parent_id": 346
            },
            {
              "id": 2381,
              "name": "银海区",
              "parent_id": 346
            },
            {
              "id": 2382,
              "name": "铁山港区",
              "parent_id": 346
            },
            {
              "id": 2383,
              "name": "合浦县",
              "parent_id": 346
            }
          ]
        },
        {
          "id": 347,
          "name": "防城港市",
          "parent_id": 21,
          "child": [
            {
              "id": 2384,
              "name": "港口区",
              "parent_id": 347
            },
            {
              "id": 2385,
              "name": "防城区",
              "parent_id": 347
            },
            {
              "id": 2386,
              "name": "上思县",
              "parent_id": 347
            },
            {
              "id": 2387,
              "name": "东兴市",
              "parent_id": 347
            }
          ]
        },
        {
          "id": 348,
          "name": "钦州市",
          "parent_id": 21,
          "child": [
            {
              "id": 2388,
              "name": "钦南区",
              "parent_id": 348
            },
            {
              "id": 2389,
              "name": "钦北区",
              "parent_id": 348
            },
            {
              "id": 2390,
              "name": "灵山县",
              "parent_id": 348
            },
            {
              "id": 2391,
              "name": "浦北县",
              "parent_id": 348
            }
          ]
        },
        {
          "id": 349,
          "name": "贵港市",
          "parent_id": 21,
          "child": [
            {
              "id": 2392,
              "name": "港北区",
              "parent_id": 349
            },
            {
              "id": 2393,
              "name": "港南区",
              "parent_id": 349
            },
            {
              "id": 2394,
              "name": "覃塘区",
              "parent_id": 349
            },
            {
              "id": 2395,
              "name": "桂平市",
              "parent_id": 349
            },
            {
              "id": 2396,
              "name": "平南县",
              "parent_id": 349
            }
          ]
        },
        {
          "id": 350,
          "name": "玉林市",
          "parent_id": 21,
          "child": [
            {
              "id": 2397,
              "name": "玉州区",
              "parent_id": 350
            },
            {
              "id": 2398,
              "name": "容县",
              "parent_id": 350
            },
            {
              "id": 2399,
              "name": "陆川县",
              "parent_id": 350
            },
            {
              "id": 2400,
              "name": "博白县",
              "parent_id": 350
            },
            {
              "id": 2401,
              "name": "兴业县",
              "parent_id": 350
            },
            {
              "id": 2402,
              "name": "北流市",
              "parent_id": 350
            },
            {
              "id": 3584,
              "name": "福绵区",
              "parent_id": 350
            }
          ]
        },
        {
          "id": 351,
          "name": "百色市",
          "parent_id": 21,
          "child": [
            {
              "id": 2403,
              "name": "右江区",
              "parent_id": 351
            },
            {
              "id": 2404,
              "name": "田阳县",
              "parent_id": 351
            },
            {
              "id": 2405,
              "name": "田东县",
              "parent_id": 351
            },
            {
              "id": 2406,
              "name": "平果县",
              "parent_id": 351
            },
            {
              "id": 2407,
              "name": "德保县",
              "parent_id": 351
            },
            {
              "id": 2408,
              "name": "靖西县",
              "parent_id": 351
            },
            {
              "id": 2409,
              "name": "那坡县",
              "parent_id": 351
            },
            {
              "id": 2410,
              "name": "凌云县",
              "parent_id": 351
            },
            {
              "id": 2411,
              "name": "乐业县",
              "parent_id": 351
            },
            {
              "id": 2412,
              "name": "田林县",
              "parent_id": 351
            },
            {
              "id": 2413,
              "name": "西林县",
              "parent_id": 351
            },
            {
              "id": 2414,
              "name": "隆林自治县",
              "parent_id": 351
            }
          ]
        },
        {
          "id": 352,
          "name": "贺州市",
          "parent_id": 21,
          "child": [
            {
              "id": 2415,
              "name": "八步区",
              "parent_id": 352
            },
            {
              "id": 2416,
              "name": "昭平县",
              "parent_id": 352
            },
            {
              "id": 2417,
              "name": "钟山县",
              "parent_id": 352
            },
            {
              "id": 2418,
              "name": "富川自治县",
              "parent_id": 352
            }
          ]
        },
        {
          "id": 353,
          "name": "河池市",
          "parent_id": 21,
          "child": [
            {
              "id": 2419,
              "name": "金城江区",
              "parent_id": 353
            },
            {
              "id": 2420,
              "name": "南丹县",
              "parent_id": 353
            },
            {
              "id": 2421,
              "name": "天峨县",
              "parent_id": 353
            },
            {
              "id": 2422,
              "name": "凤山县",
              "parent_id": 353
            },
            {
              "id": 2423,
              "name": "东兰县",
              "parent_id": 353
            },
            {
              "id": 2424,
              "name": "罗城自治县",
              "parent_id": 353
            },
            {
              "id": 2425,
              "name": "环江自治县",
              "parent_id": 353
            },
            {
              "id": 2426,
              "name": "巴马自治县",
              "parent_id": 353
            },
            {
              "id": 2427,
              "name": "都安自治县",
              "parent_id": 353
            },
            {
              "id": 2428,
              "name": "大化自治县",
              "parent_id": 353
            },
            {
              "id": 2429,
              "name": "宜州市",
              "parent_id": 353
            }
          ]
        },
        {
          "id": 354,
          "name": "来宾市",
          "parent_id": 21,
          "child": [
            {
              "id": 2430,
              "name": "兴宾区",
              "parent_id": 354
            },
            {
              "id": 2431,
              "name": "忻城县",
              "parent_id": 354
            },
            {
              "id": 2432,
              "name": "象州县",
              "parent_id": 354
            },
            {
              "id": 2433,
              "name": "武宣县",
              "parent_id": 354
            },
            {
              "id": 2434,
              "name": "金秀自治县",
              "parent_id": 354
            },
            {
              "id": 2435,
              "name": "合山市",
              "parent_id": 354
            }
          ]
        },
        {
          "id": 355,
          "name": "崇左市",
          "parent_id": 21,
          "child": [
            {
              "id": 2436,
              "name": "江州区",
              "parent_id": 355
            },
            {
              "id": 2437,
              "name": "扶绥县",
              "parent_id": 355
            },
            {
              "id": 2438,
              "name": "宁明县",
              "parent_id": 355
            },
            {
              "id": 2439,
              "name": "龙州县",
              "parent_id": 355
            },
            {
              "id": 2440,
              "name": "大新县",
              "parent_id": 355
            },
            {
              "id": 2441,
              "name": "天等县",
              "parent_id": 355
            },
            {
              "id": 2442,
              "name": "凭祥市",
              "parent_id": 355
            }
          ]
        }
      ]
    },
    {
      "id": 22,
      "name": "海南省",
      "parent_id": 0,
      "child": [
        {
          "id": 356,
          "name": "海口市",
          "parent_id": 22,
          "child": [
            {
              "id": 2443,
              "name": "秀英区",
              "parent_id": 356
            },
            {
              "id": 2444,
              "name": "龙华区",
              "parent_id": 356
            },
            {
              "id": 2445,
              "name": "琼山区",
              "parent_id": 356
            },
            {
              "id": 2446,
              "name": "美兰区",
              "parent_id": 356
            }
          ]
        },
        {
          "id": 357,
          "name": "三亚市",
          "parent_id": 22,
          "child": [
            {
              "id": 3578,
              "name": "海棠区",
              "parent_id": 357
            },
            {
              "id": 3579,
              "name": "吉阳区",
              "parent_id": 357
            },
            {
              "id": 3580,
              "name": "天涯区",
              "parent_id": 357
            },
            {
              "id": 3581,
              "name": "崖州区",
              "parent_id": 357
            }
          ]
        },
        {
          "id": 358,
          "name": "三沙市",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 359,
          "name": "五指山市",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 360,
          "name": "琼海市",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 361,
          "name": "儋州市",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 362,
          "name": "文昌市",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 363,
          "name": "万宁市",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 364,
          "name": "东方市",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 365,
          "name": "定安县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 366,
          "name": "屯昌县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 367,
          "name": "澄迈县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 368,
          "name": "临高县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 369,
          "name": "白沙自治县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 370,
          "name": "昌江自治县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 371,
          "name": "乐东自治县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 372,
          "name": "陵水自治县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 373,
          "name": "保亭自治县",
          "parent_id": 22,
          "child": []
        },
        {
          "id": 374,
          "name": "琼中自治县",
          "parent_id": 22,
          "child": []
        }
      ]
    },
    {
      "id": 23,
      "name": "四川省",
      "parent_id": 0,
      "child": [
        {
          "id": 375,
          "name": "成都市",
          "parent_id": 23,
          "child": [
            {
              "id": 2447,
              "name": "锦江区",
              "parent_id": 375
            },
            {
              "id": 2448,
              "name": "青羊区",
              "parent_id": 375
            },
            {
              "id": 2449,
              "name": "金牛区",
              "parent_id": 375
            },
            {
              "id": 2450,
              "name": "武侯区",
              "parent_id": 375
            },
            {
              "id": 2451,
              "name": "成华区",
              "parent_id": 375
            },
            {
              "id": 2452,
              "name": "龙泉驿区",
              "parent_id": 375
            },
            {
              "id": 2453,
              "name": "青白江区",
              "parent_id": 375
            },
            {
              "id": 2454,
              "name": "新都区",
              "parent_id": 375
            },
            {
              "id": 2455,
              "name": "温江区",
              "parent_id": 375
            },
            {
              "id": 2456,
              "name": "金堂县",
              "parent_id": 375
            },
            {
              "id": 2457,
              "name": "双流县",
              "parent_id": 375
            },
            {
              "id": 2458,
              "name": "郫县",
              "parent_id": 375
            },
            {
              "id": 2459,
              "name": "大邑县",
              "parent_id": 375
            },
            {
              "id": 2460,
              "name": "蒲江县",
              "parent_id": 375
            },
            {
              "id": 2461,
              "name": "新津县",
              "parent_id": 375
            },
            {
              "id": 2462,
              "name": "都江堰市",
              "parent_id": 375
            },
            {
              "id": 2463,
              "name": "彭州市",
              "parent_id": 375
            },
            {
              "id": 2464,
              "name": "邛崃市",
              "parent_id": 375
            },
            {
              "id": 2465,
              "name": "崇州市",
              "parent_id": 375
            }
          ]
        },
        {
          "id": 376,
          "name": "自贡市",
          "parent_id": 23,
          "child": [
            {
              "id": 2466,
              "name": "自流井区",
              "parent_id": 376
            },
            {
              "id": 2467,
              "name": "贡井区",
              "parent_id": 376
            },
            {
              "id": 2468,
              "name": "大安区",
              "parent_id": 376
            },
            {
              "id": 2469,
              "name": "沿滩区",
              "parent_id": 376
            },
            {
              "id": 2470,
              "name": "荣县",
              "parent_id": 376
            },
            {
              "id": 2471,
              "name": "富顺县",
              "parent_id": 376
            }
          ]
        },
        {
          "id": 377,
          "name": "攀枝花市",
          "parent_id": 23,
          "child": [
            {
              "id": 2472,
              "name": "东区",
              "parent_id": 377
            },
            {
              "id": 2473,
              "name": "西区",
              "parent_id": 377
            },
            {
              "id": 2474,
              "name": "仁和区",
              "parent_id": 377
            },
            {
              "id": 2475,
              "name": "米易县",
              "parent_id": 377
            },
            {
              "id": 2476,
              "name": "盐边县",
              "parent_id": 377
            }
          ]
        },
        {
          "id": 378,
          "name": "泸州市",
          "parent_id": 23,
          "child": [
            {
              "id": 2477,
              "name": "江阳区",
              "parent_id": 378
            },
            {
              "id": 2478,
              "name": "纳溪区",
              "parent_id": 378
            },
            {
              "id": 2479,
              "name": "龙马潭区",
              "parent_id": 378
            },
            {
              "id": 2480,
              "name": "泸县",
              "parent_id": 378
            },
            {
              "id": 2481,
              "name": "合江县",
              "parent_id": 378
            },
            {
              "id": 2482,
              "name": "叙永县",
              "parent_id": 378
            },
            {
              "id": 2483,
              "name": "古蔺县",
              "parent_id": 378
            }
          ]
        },
        {
          "id": 379,
          "name": "德阳市",
          "parent_id": 23,
          "child": [
            {
              "id": 2484,
              "name": "旌阳区",
              "parent_id": 379
            },
            {
              "id": 2485,
              "name": "中江县",
              "parent_id": 379
            },
            {
              "id": 2486,
              "name": "罗江县",
              "parent_id": 379
            },
            {
              "id": 2487,
              "name": "广汉市",
              "parent_id": 379
            },
            {
              "id": 2488,
              "name": "什邡市",
              "parent_id": 379
            },
            {
              "id": 2489,
              "name": "绵竹市",
              "parent_id": 379
            }
          ]
        },
        {
          "id": 380,
          "name": "绵阳市",
          "parent_id": 23,
          "child": [
            {
              "id": 2490,
              "name": "涪城区",
              "parent_id": 380
            },
            {
              "id": 2491,
              "name": "游仙区",
              "parent_id": 380
            },
            {
              "id": 2492,
              "name": "三台县",
              "parent_id": 380
            },
            {
              "id": 2493,
              "name": "盐亭县",
              "parent_id": 380
            },
            {
              "id": 2494,
              "name": "安县",
              "parent_id": 380
            },
            {
              "id": 2495,
              "name": "梓潼县",
              "parent_id": 380
            },
            {
              "id": 2496,
              "name": "北川自治县",
              "parent_id": 380
            },
            {
              "id": 2497,
              "name": "平武县",
              "parent_id": 380
            },
            {
              "id": 2498,
              "name": "江油市",
              "parent_id": 380
            }
          ]
        },
        {
          "id": 381,
          "name": "广元市",
          "parent_id": 23,
          "child": [
            {
              "id": 2499,
              "name": "利州区",
              "parent_id": 381
            },
            {
              "id": 2500,
              "name": "昭化区",
              "parent_id": 381
            },
            {
              "id": 2501,
              "name": "朝天区",
              "parent_id": 381
            },
            {
              "id": 2502,
              "name": "旺苍县",
              "parent_id": 381
            },
            {
              "id": 2503,
              "name": "青川县",
              "parent_id": 381
            },
            {
              "id": 2504,
              "name": "剑阁县",
              "parent_id": 381
            },
            {
              "id": 2505,
              "name": "苍溪县",
              "parent_id": 381
            }
          ]
        },
        {
          "id": 382,
          "name": "遂宁市",
          "parent_id": 23,
          "child": [
            {
              "id": 2506,
              "name": "船山区",
              "parent_id": 382
            },
            {
              "id": 2507,
              "name": "安居区",
              "parent_id": 382
            },
            {
              "id": 2508,
              "name": "蓬溪县",
              "parent_id": 382
            },
            {
              "id": 2509,
              "name": "射洪县",
              "parent_id": 382
            },
            {
              "id": 2510,
              "name": "大英县",
              "parent_id": 382
            }
          ]
        },
        {
          "id": 383,
          "name": "内江市",
          "parent_id": 23,
          "child": [
            {
              "id": 2511,
              "name": "市中区",
              "parent_id": 383
            },
            {
              "id": 2512,
              "name": "东兴区",
              "parent_id": 383
            },
            {
              "id": 2513,
              "name": "威远县",
              "parent_id": 383
            },
            {
              "id": 2514,
              "name": "资中县",
              "parent_id": 383
            },
            {
              "id": 2515,
              "name": "隆昌县",
              "parent_id": 383
            }
          ]
        },
        {
          "id": 384,
          "name": "乐山市",
          "parent_id": 23,
          "child": [
            {
              "id": 2516,
              "name": "市中区",
              "parent_id": 384
            },
            {
              "id": 2517,
              "name": "沙湾区",
              "parent_id": 384
            },
            {
              "id": 2518,
              "name": "五通桥区",
              "parent_id": 384
            },
            {
              "id": 2519,
              "name": "金口河区",
              "parent_id": 384
            },
            {
              "id": 2520,
              "name": "犍为县",
              "parent_id": 384
            },
            {
              "id": 2521,
              "name": "井研县",
              "parent_id": 384
            },
            {
              "id": 2522,
              "name": "夹江县",
              "parent_id": 384
            },
            {
              "id": 2523,
              "name": "沐川县",
              "parent_id": 384
            },
            {
              "id": 2524,
              "name": "峨边自治县",
              "parent_id": 384
            },
            {
              "id": 2525,
              "name": "马边自治县",
              "parent_id": 384
            },
            {
              "id": 2526,
              "name": "峨眉山市",
              "parent_id": 384
            }
          ]
        },
        {
          "id": 385,
          "name": "南充市",
          "parent_id": 23,
          "child": [
            {
              "id": 2527,
              "name": "顺庆区",
              "parent_id": 385
            },
            {
              "id": 2528,
              "name": "高坪区",
              "parent_id": 385
            },
            {
              "id": 2529,
              "name": "嘉陵区",
              "parent_id": 385
            },
            {
              "id": 2530,
              "name": "南部县",
              "parent_id": 385
            },
            {
              "id": 2531,
              "name": "营山县",
              "parent_id": 385
            },
            {
              "id": 2532,
              "name": "蓬安县",
              "parent_id": 385
            },
            {
              "id": 2533,
              "name": "仪陇县",
              "parent_id": 385
            },
            {
              "id": 2534,
              "name": "西充县",
              "parent_id": 385
            },
            {
              "id": 2535,
              "name": "阆中市",
              "parent_id": 385
            }
          ]
        },
        {
          "id": 386,
          "name": "眉山市",
          "parent_id": 23,
          "child": [
            {
              "id": 2536,
              "name": "东坡区",
              "parent_id": 386
            },
            {
              "id": 2537,
              "name": "仁寿县",
              "parent_id": 386
            },
            {
              "id": 2538,
              "name": "彭山区",
              "parent_id": 386
            },
            {
              "id": 2539,
              "name": "洪雅县",
              "parent_id": 386
            },
            {
              "id": 2540,
              "name": "丹棱县",
              "parent_id": 386
            },
            {
              "id": 2541,
              "name": "青神县",
              "parent_id": 386
            }
          ]
        },
        {
          "id": 387,
          "name": "宜宾市",
          "parent_id": 23,
          "child": [
            {
              "id": 2542,
              "name": "翠屏区",
              "parent_id": 387
            },
            {
              "id": 2543,
              "name": "南溪区",
              "parent_id": 387
            },
            {
              "id": 2544,
              "name": "宜宾县",
              "parent_id": 387
            },
            {
              "id": 2545,
              "name": "江安县",
              "parent_id": 387
            },
            {
              "id": 2546,
              "name": "长宁县",
              "parent_id": 387
            },
            {
              "id": 2547,
              "name": "高县",
              "parent_id": 387
            },
            {
              "id": 2548,
              "name": "珙县",
              "parent_id": 387
            },
            {
              "id": 2549,
              "name": "筠连县",
              "parent_id": 387
            },
            {
              "id": 2550,
              "name": "兴文县",
              "parent_id": 387
            },
            {
              "id": 2551,
              "name": "屏山县",
              "parent_id": 387
            }
          ]
        },
        {
          "id": 388,
          "name": "广安市",
          "parent_id": 23,
          "child": [
            {
              "id": 2552,
              "name": "广安区",
              "parent_id": 388
            },
            {
              "id": 2553,
              "name": "岳池县",
              "parent_id": 388
            },
            {
              "id": 2554,
              "name": "武胜县",
              "parent_id": 388
            },
            {
              "id": 2555,
              "name": "邻水县",
              "parent_id": 388
            },
            {
              "id": 2556,
              "name": "华蓥市",
              "parent_id": 388
            },
            {
              "id": 3583,
              "name": "前锋区",
              "parent_id": 388
            }
          ]
        },
        {
          "id": 389,
          "name": "达州市",
          "parent_id": 23,
          "child": [
            {
              "id": 2557,
              "name": "通川区",
              "parent_id": 389
            },
            {
              "id": 2558,
              "name": "达川区",
              "parent_id": 389
            },
            {
              "id": 2559,
              "name": "宣汉县",
              "parent_id": 389
            },
            {
              "id": 2560,
              "name": "开江县",
              "parent_id": 389
            },
            {
              "id": 2561,
              "name": "大竹县",
              "parent_id": 389
            },
            {
              "id": 2562,
              "name": "渠县",
              "parent_id": 389
            },
            {
              "id": 2563,
              "name": "万源市",
              "parent_id": 389
            }
          ]
        },
        {
          "id": 390,
          "name": "雅安市",
          "parent_id": 23,
          "child": [
            {
              "id": 2564,
              "name": "雨城区",
              "parent_id": 390
            },
            {
              "id": 2565,
              "name": "名山区",
              "parent_id": 390
            },
            {
              "id": 2566,
              "name": "荥经县",
              "parent_id": 390
            },
            {
              "id": 2567,
              "name": "汉源县",
              "parent_id": 390
            },
            {
              "id": 2568,
              "name": "石棉县",
              "parent_id": 390
            },
            {
              "id": 2569,
              "name": "天全县",
              "parent_id": 390
            },
            {
              "id": 2570,
              "name": "芦山县",
              "parent_id": 390
            },
            {
              "id": 2571,
              "name": "宝兴县",
              "parent_id": 390
            }
          ]
        },
        {
          "id": 391,
          "name": "巴中市",
          "parent_id": 23,
          "child": [
            {
              "id": 2572,
              "name": "巴州区",
              "parent_id": 391
            },
            {
              "id": 2573,
              "name": "通江县",
              "parent_id": 391
            },
            {
              "id": 2574,
              "name": "南江县",
              "parent_id": 391
            },
            {
              "id": 2575,
              "name": "平昌县",
              "parent_id": 391
            }
          ]
        },
        {
          "id": 392,
          "name": "资阳市",
          "parent_id": 23,
          "child": [
            {
              "id": 2576,
              "name": "雁江区",
              "parent_id": 392
            },
            {
              "id": 2577,
              "name": "安岳县",
              "parent_id": 392
            },
            {
              "id": 2578,
              "name": "乐至县",
              "parent_id": 392
            },
            {
              "id": 2579,
              "name": "简阳市",
              "parent_id": 392
            }
          ]
        },
        {
          "id": 393,
          "name": "阿坝自治州",
          "parent_id": 23,
          "child": [
            {
              "id": 2580,
              "name": "马尔康县",
              "parent_id": 393
            },
            {
              "id": 2581,
              "name": "汶川县",
              "parent_id": 393
            },
            {
              "id": 2582,
              "name": "理县",
              "parent_id": 393
            },
            {
              "id": 2583,
              "name": "茂县",
              "parent_id": 393
            },
            {
              "id": 2584,
              "name": "松潘县",
              "parent_id": 393
            },
            {
              "id": 2585,
              "name": "九寨沟县",
              "parent_id": 393
            },
            {
              "id": 2586,
              "name": "金川县",
              "parent_id": 393
            },
            {
              "id": 2587,
              "name": "小金县",
              "parent_id": 393
            },
            {
              "id": 2588,
              "name": "黑水县",
              "parent_id": 393
            },
            {
              "id": 2589,
              "name": "壤塘县",
              "parent_id": 393
            },
            {
              "id": 2590,
              "name": "阿坝县",
              "parent_id": 393
            },
            {
              "id": 2591,
              "name": "若尔盖县",
              "parent_id": 393
            },
            {
              "id": 2592,
              "name": "红原县",
              "parent_id": 393
            }
          ]
        },
        {
          "id": 394,
          "name": "甘孜自治州",
          "parent_id": 23,
          "child": [
            {
              "id": 2593,
              "name": "康定县",
              "parent_id": 394
            },
            {
              "id": 2594,
              "name": "泸定县",
              "parent_id": 394
            },
            {
              "id": 2595,
              "name": "丹巴县",
              "parent_id": 394
            },
            {
              "id": 2596,
              "name": "九龙县",
              "parent_id": 394
            },
            {
              "id": 2597,
              "name": "雅江县",
              "parent_id": 394
            },
            {
              "id": 2598,
              "name": "道孚县",
              "parent_id": 394
            },
            {
              "id": 2599,
              "name": "炉霍县",
              "parent_id": 394
            },
            {
              "id": 2600,
              "name": "甘孜县",
              "parent_id": 394
            },
            {
              "id": 2601,
              "name": "新龙县",
              "parent_id": 394
            },
            {
              "id": 2602,
              "name": "德格县",
              "parent_id": 394
            },
            {
              "id": 2603,
              "name": "白玉县",
              "parent_id": 394
            },
            {
              "id": 2604,
              "name": "石渠县",
              "parent_id": 394
            },
            {
              "id": 2605,
              "name": "色达县",
              "parent_id": 394
            },
            {
              "id": 2606,
              "name": "理塘县",
              "parent_id": 394
            },
            {
              "id": 2607,
              "name": "巴塘县",
              "parent_id": 394
            },
            {
              "id": 2608,
              "name": "乡城县",
              "parent_id": 394
            },
            {
              "id": 2609,
              "name": "稻城县",
              "parent_id": 394
            },
            {
              "id": 2610,
              "name": "得荣县",
              "parent_id": 394
            }
          ]
        },
        {
          "id": 395,
          "name": "凉山自治州",
          "parent_id": 23,
          "child": [
            {
              "id": 2611,
              "name": "西昌市",
              "parent_id": 395
            },
            {
              "id": 2612,
              "name": "木里自治县",
              "parent_id": 395
            },
            {
              "id": 2613,
              "name": "盐源县",
              "parent_id": 395
            },
            {
              "id": 2614,
              "name": "德昌县",
              "parent_id": 395
            },
            {
              "id": 2615,
              "name": "会理县",
              "parent_id": 395
            },
            {
              "id": 2616,
              "name": "会东县",
              "parent_id": 395
            },
            {
              "id": 2617,
              "name": "宁南县",
              "parent_id": 395
            },
            {
              "id": 2618,
              "name": "普格县",
              "parent_id": 395
            },
            {
              "id": 2619,
              "name": "布拖县",
              "parent_id": 395
            },
            {
              "id": 2620,
              "name": "金阳县",
              "parent_id": 395
            },
            {
              "id": 2621,
              "name": "昭觉县",
              "parent_id": 395
            },
            {
              "id": 2622,
              "name": "喜德县",
              "parent_id": 395
            },
            {
              "id": 2623,
              "name": "冕宁县",
              "parent_id": 395
            },
            {
              "id": 2624,
              "name": "越西县",
              "parent_id": 395
            },
            {
              "id": 2625,
              "name": "甘洛县",
              "parent_id": 395
            },
            {
              "id": 2626,
              "name": "美姑县",
              "parent_id": 395
            },
            {
              "id": 2627,
              "name": "雷波县",
              "parent_id": 395
            }
          ]
        }
      ]
    },
    {
      "id": 24,
      "name": "贵州省",
      "parent_id": 0,
      "child": [
        {
          "id": 396,
          "name": "贵阳市",
          "parent_id": 24,
          "child": [
            {
              "id": 2628,
              "name": "观山湖区",
              "parent_id": 396
            },
            {
              "id": 2629,
              "name": "南明区",
              "parent_id": 396
            },
            {
              "id": 2630,
              "name": "云岩区",
              "parent_id": 396
            },
            {
              "id": 2631,
              "name": "花溪区",
              "parent_id": 396
            },
            {
              "id": 2632,
              "name": "乌当区",
              "parent_id": 396
            },
            {
              "id": 2633,
              "name": "白云区",
              "parent_id": 396
            },
            {
              "id": 2634,
              "name": "开阳县",
              "parent_id": 396
            },
            {
              "id": 2635,
              "name": "息烽县",
              "parent_id": 396
            },
            {
              "id": 2636,
              "name": "修文县",
              "parent_id": 396
            },
            {
              "id": 2637,
              "name": "清镇市",
              "parent_id": 396
            }
          ]
        },
        {
          "id": 397,
          "name": "六盘水市",
          "parent_id": 24,
          "child": [
            {
              "id": 2638,
              "name": "钟山区",
              "parent_id": 397
            },
            {
              "id": 2639,
              "name": "六枝特区",
              "parent_id": 397
            },
            {
              "id": 2640,
              "name": "水城县",
              "parent_id": 397
            },
            {
              "id": 2641,
              "name": "盘县",
              "parent_id": 397
            }
          ]
        },
        {
          "id": 398,
          "name": "遵义市",
          "parent_id": 24,
          "child": [
            {
              "id": 2642,
              "name": "红花岗区",
              "parent_id": 398
            },
            {
              "id": 2643,
              "name": "汇川区",
              "parent_id": 398
            },
            {
              "id": 2644,
              "name": "遵义县",
              "parent_id": 398
            },
            {
              "id": 2645,
              "name": "桐梓县",
              "parent_id": 398
            },
            {
              "id": 2646,
              "name": "绥阳县",
              "parent_id": 398
            },
            {
              "id": 2647,
              "name": "正安县",
              "parent_id": 398
            },
            {
              "id": 2648,
              "name": "道真自治县",
              "parent_id": 398
            },
            {
              "id": 2649,
              "name": "务川自治县",
              "parent_id": 398
            },
            {
              "id": 2650,
              "name": "凤冈县",
              "parent_id": 398
            },
            {
              "id": 2651,
              "name": "湄潭县",
              "parent_id": 398
            },
            {
              "id": 2652,
              "name": "余庆县",
              "parent_id": 398
            },
            {
              "id": 2653,
              "name": "习水县",
              "parent_id": 398
            },
            {
              "id": 2654,
              "name": "赤水市",
              "parent_id": 398
            },
            {
              "id": 2655,
              "name": "仁怀市",
              "parent_id": 398
            }
          ]
        },
        {
          "id": 399,
          "name": "安顺市",
          "parent_id": 24,
          "child": [
            {
              "id": 2656,
              "name": "西秀区",
              "parent_id": 399
            },
            {
              "id": 2657,
              "name": "平坝县",
              "parent_id": 399
            },
            {
              "id": 2658,
              "name": "普定县",
              "parent_id": 399
            },
            {
              "id": 2659,
              "name": "镇宁自治县",
              "parent_id": 399
            },
            {
              "id": 2660,
              "name": "关岭自治县",
              "parent_id": 399
            },
            {
              "id": 2661,
              "name": "紫云自治县",
              "parent_id": 399
            }
          ]
        },
        {
          "id": 400,
          "name": "毕节市",
          "parent_id": 24,
          "child": [
            {
              "id": 2662,
              "name": "七星关区",
              "parent_id": 400
            },
            {
              "id": 2663,
              "name": "大方县",
              "parent_id": 400
            },
            {
              "id": 2664,
              "name": "黔西县",
              "parent_id": 400
            },
            {
              "id": 2665,
              "name": "金沙县",
              "parent_id": 400
            },
            {
              "id": 2666,
              "name": "织金县",
              "parent_id": 400
            },
            {
              "id": 2667,
              "name": "纳雍县",
              "parent_id": 400
            },
            {
              "id": 2668,
              "name": "威宁自治县",
              "parent_id": 400
            },
            {
              "id": 2669,
              "name": "赫章县",
              "parent_id": 400
            }
          ]
        },
        {
          "id": 401,
          "name": "铜仁市",
          "parent_id": 24,
          "child": [
            {
              "id": 2670,
              "name": "碧江区",
              "parent_id": 401
            },
            {
              "id": 2671,
              "name": "万山区",
              "parent_id": 401
            },
            {
              "id": 2672,
              "name": "江口县",
              "parent_id": 401
            },
            {
              "id": 2673,
              "name": "玉屏自治县",
              "parent_id": 401
            },
            {
              "id": 2674,
              "name": "石阡县",
              "parent_id": 401
            },
            {
              "id": 2675,
              "name": "思南县",
              "parent_id": 401
            },
            {
              "id": 2676,
              "name": "印江自治县",
              "parent_id": 401
            },
            {
              "id": 2677,
              "name": "德江县",
              "parent_id": 401
            },
            {
              "id": 2678,
              "name": "沿河自治县",
              "parent_id": 401
            },
            {
              "id": 2679,
              "name": "松桃自治县",
              "parent_id": 401
            }
          ]
        },
        {
          "id": 402,
          "name": "黔西南自治州",
          "parent_id": 24,
          "child": [
            {
              "id": 2680,
              "name": "兴义市",
              "parent_id": 402
            },
            {
              "id": 2681,
              "name": "兴仁县",
              "parent_id": 402
            },
            {
              "id": 2682,
              "name": "普安县",
              "parent_id": 402
            },
            {
              "id": 2683,
              "name": "晴隆县",
              "parent_id": 402
            },
            {
              "id": 2684,
              "name": "贞丰县",
              "parent_id": 402
            },
            {
              "id": 2685,
              "name": "望谟县",
              "parent_id": 402
            },
            {
              "id": 2686,
              "name": "册亨县",
              "parent_id": 402
            },
            {
              "id": 2687,
              "name": "安龙县",
              "parent_id": 402
            }
          ]
        },
        {
          "id": 403,
          "name": "黔东南自治州",
          "parent_id": 24,
          "child": [
            {
              "id": 2688,
              "name": "凯里市",
              "parent_id": 403
            },
            {
              "id": 2689,
              "name": "黄平县",
              "parent_id": 403
            },
            {
              "id": 2690,
              "name": "施秉县",
              "parent_id": 403
            },
            {
              "id": 2691,
              "name": "三穗县",
              "parent_id": 403
            },
            {
              "id": 2692,
              "name": "镇远县",
              "parent_id": 403
            },
            {
              "id": 2693,
              "name": "岑巩县",
              "parent_id": 403
            },
            {
              "id": 2694,
              "name": "天柱县",
              "parent_id": 403
            },
            {
              "id": 2695,
              "name": "锦屏县",
              "parent_id": 403
            },
            {
              "id": 2696,
              "name": "剑河县",
              "parent_id": 403
            },
            {
              "id": 2697,
              "name": "台江县",
              "parent_id": 403
            },
            {
              "id": 2698,
              "name": "黎平县",
              "parent_id": 403
            },
            {
              "id": 2699,
              "name": "榕江县",
              "parent_id": 403
            },
            {
              "id": 2700,
              "name": "从江县",
              "parent_id": 403
            },
            {
              "id": 2701,
              "name": "雷山县",
              "parent_id": 403
            },
            {
              "id": 2702,
              "name": "麻江县",
              "parent_id": 403
            },
            {
              "id": 2703,
              "name": "丹寨县",
              "parent_id": 403
            }
          ]
        },
        {
          "id": 404,
          "name": "黔南自治州",
          "parent_id": 24,
          "child": [
            {
              "id": 2704,
              "name": "都匀市",
              "parent_id": 404
            },
            {
              "id": 2705,
              "name": "福泉市",
              "parent_id": 404
            },
            {
              "id": 2706,
              "name": "荔波县",
              "parent_id": 404
            },
            {
              "id": 2707,
              "name": "贵定县",
              "parent_id": 404
            },
            {
              "id": 2708,
              "name": "瓮安县",
              "parent_id": 404
            },
            {
              "id": 2709,
              "name": "独山县",
              "parent_id": 404
            },
            {
              "id": 2710,
              "name": "平塘县",
              "parent_id": 404
            },
            {
              "id": 2711,
              "name": "罗甸县",
              "parent_id": 404
            },
            {
              "id": 2712,
              "name": "长顺县",
              "parent_id": 404
            },
            {
              "id": 2713,
              "name": "龙里县",
              "parent_id": 404
            },
            {
              "id": 2714,
              "name": "惠水县",
              "parent_id": 404
            },
            {
              "id": 2715,
              "name": "三都自治县",
              "parent_id": 404
            }
          ]
        }
      ]
    },
    {
      "id": 25,
      "name": "云南省",
      "parent_id": 0,
      "child": [
        {
          "id": 405,
          "name": "昆明市",
          "parent_id": 25,
          "child": [
            {
              "id": 2716,
              "name": "五华区",
              "parent_id": 405
            },
            {
              "id": 2717,
              "name": "盘龙区",
              "parent_id": 405
            },
            {
              "id": 2718,
              "name": "官渡区",
              "parent_id": 405
            },
            {
              "id": 2719,
              "name": "西山区",
              "parent_id": 405
            },
            {
              "id": 2720,
              "name": "东川区",
              "parent_id": 405
            },
            {
              "id": 2721,
              "name": "呈贡区",
              "parent_id": 405
            },
            {
              "id": 2722,
              "name": "晋宁县",
              "parent_id": 405
            },
            {
              "id": 2723,
              "name": "富民县",
              "parent_id": 405
            },
            {
              "id": 2724,
              "name": "宜良县",
              "parent_id": 405
            },
            {
              "id": 2725,
              "name": "石林自治县",
              "parent_id": 405
            },
            {
              "id": 2726,
              "name": "嵩明县",
              "parent_id": 405
            },
            {
              "id": 2727,
              "name": "禄劝自治县",
              "parent_id": 405
            },
            {
              "id": 2728,
              "name": "寻甸自治县",
              "parent_id": 405
            },
            {
              "id": 2729,
              "name": "安宁市",
              "parent_id": 405
            }
          ]
        },
        {
          "id": 406,
          "name": "曲靖市",
          "parent_id": 25,
          "child": [
            {
              "id": 2730,
              "name": "麒麟区",
              "parent_id": 406
            },
            {
              "id": 2731,
              "name": "马龙县",
              "parent_id": 406
            },
            {
              "id": 2732,
              "name": "陆良县",
              "parent_id": 406
            },
            {
              "id": 2733,
              "name": "师宗县",
              "parent_id": 406
            },
            {
              "id": 2734,
              "name": "罗平县",
              "parent_id": 406
            },
            {
              "id": 2735,
              "name": "富源县",
              "parent_id": 406
            },
            {
              "id": 2736,
              "name": "会泽县",
              "parent_id": 406
            },
            {
              "id": 2737,
              "name": "沾益县",
              "parent_id": 406
            },
            {
              "id": 2738,
              "name": "宣威市",
              "parent_id": 406
            }
          ]
        },
        {
          "id": 407,
          "name": "玉溪市",
          "parent_id": 25,
          "child": [
            {
              "id": 2739,
              "name": "红塔区",
              "parent_id": 407
            },
            {
              "id": 2740,
              "name": "江川县",
              "parent_id": 407
            },
            {
              "id": 2741,
              "name": "澄江县",
              "parent_id": 407
            },
            {
              "id": 2742,
              "name": "通海县",
              "parent_id": 407
            },
            {
              "id": 2743,
              "name": "华宁县",
              "parent_id": 407
            },
            {
              "id": 2744,
              "name": "易门县",
              "parent_id": 407
            },
            {
              "id": 2745,
              "name": "峨山自治县",
              "parent_id": 407
            },
            {
              "id": 2746,
              "name": "新平自治县",
              "parent_id": 407
            },
            {
              "id": 2747,
              "name": "元江自治县",
              "parent_id": 407
            }
          ]
        },
        {
          "id": 408,
          "name": "昭通市",
          "parent_id": 25,
          "child": [
            {
              "id": 2748,
              "name": "昭阳区",
              "parent_id": 408
            },
            {
              "id": 2749,
              "name": "鲁甸县",
              "parent_id": 408
            },
            {
              "id": 2750,
              "name": "巧家县",
              "parent_id": 408
            },
            {
              "id": 2751,
              "name": "盐津县",
              "parent_id": 408
            },
            {
              "id": 2752,
              "name": "大关县",
              "parent_id": 408
            },
            {
              "id": 2753,
              "name": "永善县",
              "parent_id": 408
            },
            {
              "id": 2754,
              "name": "绥江县",
              "parent_id": 408
            },
            {
              "id": 2755,
              "name": "镇雄县",
              "parent_id": 408
            },
            {
              "id": 2756,
              "name": "彝良县",
              "parent_id": 408
            },
            {
              "id": 2757,
              "name": "威信县",
              "parent_id": 408
            },
            {
              "id": 2758,
              "name": "水富县",
              "parent_id": 408
            }
          ]
        },
        {
          "id": 409,
          "name": "丽江市",
          "parent_id": 25,
          "child": [
            {
              "id": 2759,
              "name": "古城区",
              "parent_id": 409
            },
            {
              "id": 2760,
              "name": "玉龙自治县",
              "parent_id": 409
            },
            {
              "id": 2761,
              "name": "永胜县",
              "parent_id": 409
            },
            {
              "id": 2762,
              "name": "华坪县",
              "parent_id": 409
            },
            {
              "id": 2763,
              "name": "宁蒗自治县",
              "parent_id": 409
            }
          ]
        },
        {
          "id": 410,
          "name": "普洱市",
          "parent_id": 25,
          "child": [
            {
              "id": 2764,
              "name": "思茅区",
              "parent_id": 410
            },
            {
              "id": 2765,
              "name": "宁洱县",
              "parent_id": 410
            },
            {
              "id": 2766,
              "name": "墨江县",
              "parent_id": 410
            },
            {
              "id": 2767,
              "name": "景东县",
              "parent_id": 410
            },
            {
              "id": 2768,
              "name": "景谷县",
              "parent_id": 410
            },
            {
              "id": 2769,
              "name": "镇沅县",
              "parent_id": 410
            },
            {
              "id": 2770,
              "name": "江城县",
              "parent_id": 410
            },
            {
              "id": 2771,
              "name": "孟连县",
              "parent_id": 410
            },
            {
              "id": 2772,
              "name": "澜沧县",
              "parent_id": 410
            },
            {
              "id": 2773,
              "name": "西盟县",
              "parent_id": 410
            }
          ]
        },
        {
          "id": 411,
          "name": "临沧市",
          "parent_id": 25,
          "child": [
            {
              "id": 2774,
              "name": "临翔区",
              "parent_id": 411
            },
            {
              "id": 2775,
              "name": "凤庆县",
              "parent_id": 411
            },
            {
              "id": 2776,
              "name": "云县",
              "parent_id": 411
            },
            {
              "id": 2777,
              "name": "永德县",
              "parent_id": 411
            },
            {
              "id": 2778,
              "name": "镇康县",
              "parent_id": 411
            },
            {
              "id": 2779,
              "name": "双江自治县",
              "parent_id": 411
            },
            {
              "id": 2780,
              "name": "耿马自治县",
              "parent_id": 411
            },
            {
              "id": 2781,
              "name": "沧源自治县",
              "parent_id": 411
            }
          ]
        },
        {
          "id": 412,
          "name": "楚雄自治州",
          "parent_id": 25,
          "child": [
            {
              "id": 2782,
              "name": "楚雄市",
              "parent_id": 412
            },
            {
              "id": 2783,
              "name": "双柏县",
              "parent_id": 412
            },
            {
              "id": 2784,
              "name": "牟定县",
              "parent_id": 412
            },
            {
              "id": 2785,
              "name": "南华县",
              "parent_id": 412
            },
            {
              "id": 2786,
              "name": "姚安县",
              "parent_id": 412
            },
            {
              "id": 2787,
              "name": "大姚县",
              "parent_id": 412
            },
            {
              "id": 2788,
              "name": "永仁县",
              "parent_id": 412
            },
            {
              "id": 2789,
              "name": "元谋县",
              "parent_id": 412
            },
            {
              "id": 2790,
              "name": "武定县",
              "parent_id": 412
            },
            {
              "id": 2791,
              "name": "禄丰县",
              "parent_id": 412
            }
          ]
        },
        {
          "id": 413,
          "name": "红河自治州",
          "parent_id": 25,
          "child": [
            {
              "id": 2792,
              "name": "个旧市",
              "parent_id": 413
            },
            {
              "id": 2793,
              "name": "开远市",
              "parent_id": 413
            },
            {
              "id": 2794,
              "name": "蒙自市",
              "parent_id": 413
            },
            {
              "id": 2795,
              "name": "屏边自治县",
              "parent_id": 413
            },
            {
              "id": 2796,
              "name": "建水县",
              "parent_id": 413
            },
            {
              "id": 2797,
              "name": "石屏县",
              "parent_id": 413
            },
            {
              "id": 2798,
              "name": "弥勒市",
              "parent_id": 413
            },
            {
              "id": 2799,
              "name": "泸西县",
              "parent_id": 413
            },
            {
              "id": 2800,
              "name": "元阳县",
              "parent_id": 413
            },
            {
              "id": 2801,
              "name": "红河县",
              "parent_id": 413
            },
            {
              "id": 2802,
              "name": "金平自治县",
              "parent_id": 413
            },
            {
              "id": 2803,
              "name": "绿春县",
              "parent_id": 413
            },
            {
              "id": 2804,
              "name": "河口自治县",
              "parent_id": 413
            }
          ]
        },
        {
          "id": 414,
          "name": "文山自治州",
          "parent_id": 25,
          "child": [
            {
              "id": 2805,
              "name": "文山县",
              "parent_id": 414
            },
            {
              "id": 2806,
              "name": "砚山县",
              "parent_id": 414
            },
            {
              "id": 2807,
              "name": "西畴县",
              "parent_id": 414
            },
            {
              "id": 2808,
              "name": "麻栗坡县",
              "parent_id": 414
            },
            {
              "id": 2809,
              "name": "马关县",
              "parent_id": 414
            },
            {
              "id": 2810,
              "name": "丘北县",
              "parent_id": 414
            },
            {
              "id": 2811,
              "name": "广南县",
              "parent_id": 414
            },
            {
              "id": 2812,
              "name": "富宁县",
              "parent_id": 414
            }
          ]
        },
        {
          "id": 415,
          "name": "西双版纳自治州",
          "parent_id": 25,
          "child": [
            {
              "id": 2813,
              "name": "景洪市",
              "parent_id": 415
            },
            {
              "id": 2814,
              "name": "勐海县",
              "parent_id": 415
            },
            {
              "id": 2815,
              "name": "勐腊县",
              "parent_id": 415
            }
          ]
        },
        {
          "id": 416,
          "name": "大理自治州",
          "parent_id": 25,
          "child": [
            {
              "id": 2816,
              "name": "大理市",
              "parent_id": 416
            },
            {
              "id": 2817,
              "name": "漾濞自治县",
              "parent_id": 416
            },
            {
              "id": 2818,
              "name": "祥云县",
              "parent_id": 416
            },
            {
              "id": 2819,
              "name": "宾川县",
              "parent_id": 416
            },
            {
              "id": 2820,
              "name": "弥渡县",
              "parent_id": 416
            },
            {
              "id": 2821,
              "name": "南涧自治县",
              "parent_id": 416
            },
            {
              "id": 2822,
              "name": "巍山自治县",
              "parent_id": 416
            },
            {
              "id": 2823,
              "name": "永平县",
              "parent_id": 416
            },
            {
              "id": 2824,
              "name": "云龙县",
              "parent_id": 416
            },
            {
              "id": 2825,
              "name": "洱源县",
              "parent_id": 416
            },
            {
              "id": 2826,
              "name": "剑川县",
              "parent_id": 416
            },
            {
              "id": 2827,
              "name": "鹤庆县",
              "parent_id": 416
            }
          ]
        },
        {
          "id": 417,
          "name": "德宏自治州",
          "parent_id": 25,
          "child": [
            {
              "id": 2828,
              "name": "瑞丽市",
              "parent_id": 417
            },
            {
              "id": 2829,
              "name": "芒市",
              "parent_id": 417
            },
            {
              "id": 2830,
              "name": "梁河县",
              "parent_id": 417
            },
            {
              "id": 2831,
              "name": "盈江县",
              "parent_id": 417
            },
            {
              "id": 2832,
              "name": "陇川县",
              "parent_id": 417
            }
          ]
        },
        {
          "id": 418,
          "name": "怒江自治州",
          "parent_id": 25,
          "child": [
            {
              "id": 2833,
              "name": "泸水县",
              "parent_id": 418
            },
            {
              "id": 2834,
              "name": "福贡县",
              "parent_id": 418
            },
            {
              "id": 2835,
              "name": "贡山县",
              "parent_id": 418
            },
            {
              "id": 2836,
              "name": "兰坪县",
              "parent_id": 418
            }
          ]
        },
        {
          "id": 419,
          "name": "迪庆自治州",
          "parent_id": 25,
          "child": [
            {
              "id": 2837,
              "name": "香格里拉县",
              "parent_id": 419
            },
            {
              "id": 2838,
              "name": "德钦县",
              "parent_id": 419
            },
            {
              "id": 2839,
              "name": "维西县",
              "parent_id": 419
            }
          ]
        },
        {
          "id": 420,
          "name": "保山市",
          "parent_id": 25,
          "child": [
            {
              "id": 2840,
              "name": "隆阳区",
              "parent_id": 420
            },
            {
              "id": 2841,
              "name": "施甸县",
              "parent_id": 420
            },
            {
              "id": 2842,
              "name": "腾冲县",
              "parent_id": 420
            },
            {
              "id": 2843,
              "name": "龙陵县",
              "parent_id": 420
            },
            {
              "id": 2844,
              "name": "昌宁县",
              "parent_id": 420
            }
          ]
        }
      ]
    },
    {
      "id": 26,
      "name": "西藏自治区",
      "parent_id": 0,
      "child": [
        {
          "id": 421,
          "name": "拉萨市",
          "parent_id": 26,
          "child": [
            {
              "id": 2845,
              "name": "城关区",
              "parent_id": 421
            },
            {
              "id": 2846,
              "name": "林周县",
              "parent_id": 421
            },
            {
              "id": 2847,
              "name": "当雄县",
              "parent_id": 421
            },
            {
              "id": 2848,
              "name": "尼木县",
              "parent_id": 421
            },
            {
              "id": 2849,
              "name": "曲水县",
              "parent_id": 421
            },
            {
              "id": 2850,
              "name": "堆龙德庆县",
              "parent_id": 421
            },
            {
              "id": 2851,
              "name": "达孜县",
              "parent_id": 421
            },
            {
              "id": 2852,
              "name": "墨竹工卡县",
              "parent_id": 421
            }
          ]
        },
        {
          "id": 422,
          "name": "昌都市",
          "parent_id": 26,
          "child": [
            {
              "id": 2853,
              "name": "卡若区",
              "parent_id": 422
            },
            {
              "id": 2854,
              "name": "江达县",
              "parent_id": 422
            },
            {
              "id": 2855,
              "name": "贡觉县",
              "parent_id": 422
            },
            {
              "id": 2856,
              "name": "类乌齐县",
              "parent_id": 422
            },
            {
              "id": 2857,
              "name": "丁青县",
              "parent_id": 422
            },
            {
              "id": 2858,
              "name": "察雅县",
              "parent_id": 422
            },
            {
              "id": 2859,
              "name": "八宿县",
              "parent_id": 422
            },
            {
              "id": 2860,
              "name": "左贡县",
              "parent_id": 422
            },
            {
              "id": 2861,
              "name": "芒康县",
              "parent_id": 422
            },
            {
              "id": 2862,
              "name": "洛隆县",
              "parent_id": 422
            },
            {
              "id": 2863,
              "name": "边坝县",
              "parent_id": 422
            }
          ]
        },
        {
          "id": 423,
          "name": "山南地区",
          "parent_id": 26,
          "child": [
            {
              "id": 2864,
              "name": "乃东县",
              "parent_id": 423
            },
            {
              "id": 2865,
              "name": "扎囊县",
              "parent_id": 423
            },
            {
              "id": 2866,
              "name": "贡嘎县",
              "parent_id": 423
            },
            {
              "id": 2867,
              "name": "桑日县",
              "parent_id": 423
            },
            {
              "id": 2868,
              "name": "琼结县",
              "parent_id": 423
            },
            {
              "id": 2869,
              "name": "曲松县",
              "parent_id": 423
            },
            {
              "id": 2870,
              "name": "措美县",
              "parent_id": 423
            },
            {
              "id": 2871,
              "name": "洛扎县",
              "parent_id": 423
            },
            {
              "id": 2872,
              "name": "加查县",
              "parent_id": 423
            },
            {
              "id": 2873,
              "name": "隆子县",
              "parent_id": 423
            },
            {
              "id": 2874,
              "name": "错那县",
              "parent_id": 423
            },
            {
              "id": 2875,
              "name": "浪卡子县",
              "parent_id": 423
            }
          ]
        },
        {
          "id": 424,
          "name": "日喀则市",
          "parent_id": 26,
          "child": [
            {
              "id": 2876,
              "name": "桑珠孜区",
              "parent_id": 424
            },
            {
              "id": 2877,
              "name": "南木林县",
              "parent_id": 424
            },
            {
              "id": 2878,
              "name": "江孜县",
              "parent_id": 424
            },
            {
              "id": 2879,
              "name": "定日县",
              "parent_id": 424
            },
            {
              "id": 2880,
              "name": "萨迦县",
              "parent_id": 424
            },
            {
              "id": 2881,
              "name": "拉孜县",
              "parent_id": 424
            },
            {
              "id": 2882,
              "name": "昂仁县",
              "parent_id": 424
            },
            {
              "id": 2883,
              "name": "谢通门县",
              "parent_id": 424
            },
            {
              "id": 2884,
              "name": "白朗县",
              "parent_id": 424
            },
            {
              "id": 2885,
              "name": "仁布县",
              "parent_id": 424
            },
            {
              "id": 2886,
              "name": "康马县",
              "parent_id": 424
            },
            {
              "id": 2887,
              "name": "定结县",
              "parent_id": 424
            },
            {
              "id": 2888,
              "name": "仲巴县",
              "parent_id": 424
            },
            {
              "id": 2889,
              "name": "亚东县",
              "parent_id": 424
            },
            {
              "id": 2890,
              "name": "吉隆县",
              "parent_id": 424
            },
            {
              "id": 2891,
              "name": "聂拉木县",
              "parent_id": 424
            },
            {
              "id": 2892,
              "name": "萨嘎县",
              "parent_id": 424
            },
            {
              "id": 2893,
              "name": "岗巴县",
              "parent_id": 424
            }
          ]
        },
        {
          "id": 425,
          "name": "那曲地区",
          "parent_id": 26,
          "child": [
            {
              "id": 2894,
              "name": "双湖县",
              "parent_id": 425
            },
            {
              "id": 2895,
              "name": "那曲县",
              "parent_id": 425
            },
            {
              "id": 2896,
              "name": "嘉黎县",
              "parent_id": 425
            },
            {
              "id": 2897,
              "name": "比如县",
              "parent_id": 425
            },
            {
              "id": 2898,
              "name": "聂荣县",
              "parent_id": 425
            },
            {
              "id": 2899,
              "name": "安多县",
              "parent_id": 425
            },
            {
              "id": 2900,
              "name": "申扎县",
              "parent_id": 425
            },
            {
              "id": 2901,
              "name": "索县",
              "parent_id": 425
            },
            {
              "id": 2902,
              "name": "班戈县",
              "parent_id": 425
            },
            {
              "id": 2903,
              "name": "巴青县",
              "parent_id": 425
            },
            {
              "id": 2904,
              "name": "尼玛县",
              "parent_id": 425
            }
          ]
        },
        {
          "id": 426,
          "name": "阿里地区",
          "parent_id": 26,
          "child": [
            {
              "id": 2905,
              "name": "普兰县",
              "parent_id": 426
            },
            {
              "id": 2906,
              "name": "札达县",
              "parent_id": 426
            },
            {
              "id": 2907,
              "name": "噶尔县",
              "parent_id": 426
            },
            {
              "id": 2908,
              "name": "日土县",
              "parent_id": 426
            },
            {
              "id": 2909,
              "name": "革吉县",
              "parent_id": 426
            },
            {
              "id": 2910,
              "name": "改则县",
              "parent_id": 426
            },
            {
              "id": 2911,
              "name": "措勤县",
              "parent_id": 426
            }
          ]
        },
        {
          "id": 427,
          "name": "林芝地区",
          "parent_id": 26,
          "child": [
            {
              "id": 2912,
              "name": "林芝县",
              "parent_id": 427
            },
            {
              "id": 2913,
              "name": "工布江达县",
              "parent_id": 427
            },
            {
              "id": 2914,
              "name": "米林县",
              "parent_id": 427
            },
            {
              "id": 2915,
              "name": "墨脱县",
              "parent_id": 427
            },
            {
              "id": 2916,
              "name": "波密县",
              "parent_id": 427
            },
            {
              "id": 2917,
              "name": "察隅县",
              "parent_id": 427
            },
            {
              "id": 2918,
              "name": "朗县",
              "parent_id": 427
            }
          ]
        }
      ]
    },
    {
      "id": 27,
      "name": "陕西省",
      "parent_id": 0,
      "child": [
        {
          "id": 428,
          "name": "西安市",
          "parent_id": 27,
          "child": [
            {
              "id": 2919,
              "name": "新城区",
              "parent_id": 428
            },
            {
              "id": 2920,
              "name": "碑林区",
              "parent_id": 428
            },
            {
              "id": 2921,
              "name": "莲湖区",
              "parent_id": 428
            },
            {
              "id": 2922,
              "name": "灞桥区",
              "parent_id": 428
            },
            {
              "id": 2923,
              "name": "未央区",
              "parent_id": 428
            },
            {
              "id": 2924,
              "name": "雁塔区",
              "parent_id": 428
            },
            {
              "id": 2925,
              "name": "阎良区",
              "parent_id": 428
            },
            {
              "id": 2926,
              "name": "临潼区",
              "parent_id": 428
            },
            {
              "id": 2927,
              "name": "长安区",
              "parent_id": 428
            },
            {
              "id": 2928,
              "name": "蓝田县",
              "parent_id": 428
            },
            {
              "id": 2929,
              "name": "周至县",
              "parent_id": 428
            },
            {
              "id": 2930,
              "name": "户县",
              "parent_id": 428
            },
            {
              "id": 2931,
              "name": "高陵县",
              "parent_id": 428
            }
          ]
        },
        {
          "id": 429,
          "name": "铜川市",
          "parent_id": 27,
          "child": [
            {
              "id": 2932,
              "name": "王益区",
              "parent_id": 429
            },
            {
              "id": 2933,
              "name": "印台区",
              "parent_id": 429
            },
            {
              "id": 2934,
              "name": "耀州区",
              "parent_id": 429
            },
            {
              "id": 2935,
              "name": "宜君县",
              "parent_id": 429
            }
          ]
        },
        {
          "id": 430,
          "name": "宝鸡市",
          "parent_id": 27,
          "child": [
            {
              "id": 2936,
              "name": "渭滨区",
              "parent_id": 430
            },
            {
              "id": 2937,
              "name": "金台区",
              "parent_id": 430
            },
            {
              "id": 2938,
              "name": "陈仓区",
              "parent_id": 430
            },
            {
              "id": 2939,
              "name": "凤翔县",
              "parent_id": 430
            },
            {
              "id": 2940,
              "name": "岐山县",
              "parent_id": 430
            },
            {
              "id": 2941,
              "name": "扶风县",
              "parent_id": 430
            },
            {
              "id": 2942,
              "name": "眉县",
              "parent_id": 430
            },
            {
              "id": 2943,
              "name": "陇县",
              "parent_id": 430
            },
            {
              "id": 2944,
              "name": "千阳县",
              "parent_id": 430
            },
            {
              "id": 2945,
              "name": "麟游县",
              "parent_id": 430
            },
            {
              "id": 2946,
              "name": "凤县",
              "parent_id": 430
            },
            {
              "id": 2947,
              "name": "太白县",
              "parent_id": 430
            }
          ]
        },
        {
          "id": 431,
          "name": "咸阳市",
          "parent_id": 27,
          "child": [
            {
              "id": 2948,
              "name": "秦都区",
              "parent_id": 431
            },
            {
              "id": 2949,
              "name": "杨陵区",
              "parent_id": 431
            },
            {
              "id": 2950,
              "name": "渭城区",
              "parent_id": 431
            },
            {
              "id": 2951,
              "name": "三原县",
              "parent_id": 431
            },
            {
              "id": 2952,
              "name": "泾阳县",
              "parent_id": 431
            },
            {
              "id": 2953,
              "name": "乾县",
              "parent_id": 431
            },
            {
              "id": 2954,
              "name": "礼泉县",
              "parent_id": 431
            },
            {
              "id": 2955,
              "name": "永寿县",
              "parent_id": 431
            },
            {
              "id": 2956,
              "name": "彬县",
              "parent_id": 431
            },
            {
              "id": 2957,
              "name": "长武县",
              "parent_id": 431
            },
            {
              "id": 2958,
              "name": "旬邑县",
              "parent_id": 431
            },
            {
              "id": 2959,
              "name": "淳化县",
              "parent_id": 431
            },
            {
              "id": 2960,
              "name": "武功县",
              "parent_id": 431
            },
            {
              "id": 2961,
              "name": "兴平市",
              "parent_id": 431
            }
          ]
        },
        {
          "id": 432,
          "name": "渭南市",
          "parent_id": 27,
          "child": [
            {
              "id": 2962,
              "name": "临渭区",
              "parent_id": 432
            },
            {
              "id": 2963,
              "name": "华县",
              "parent_id": 432
            },
            {
              "id": 2964,
              "name": "潼关县",
              "parent_id": 432
            },
            {
              "id": 2965,
              "name": "大荔县",
              "parent_id": 432
            },
            {
              "id": 2966,
              "name": "合阳县",
              "parent_id": 432
            },
            {
              "id": 2967,
              "name": "澄城县",
              "parent_id": 432
            },
            {
              "id": 2968,
              "name": "蒲城县",
              "parent_id": 432
            },
            {
              "id": 2969,
              "name": "白水县",
              "parent_id": 432
            },
            {
              "id": 2970,
              "name": "富平县",
              "parent_id": 432
            },
            {
              "id": 2971,
              "name": "韩城市",
              "parent_id": 432
            },
            {
              "id": 2972,
              "name": "华阴市",
              "parent_id": 432
            }
          ]
        },
        {
          "id": 433,
          "name": "延安市",
          "parent_id": 27,
          "child": [
            {
              "id": 2973,
              "name": "宝塔区",
              "parent_id": 433
            },
            {
              "id": 2974,
              "name": "延长县",
              "parent_id": 433
            },
            {
              "id": 2975,
              "name": "延川县",
              "parent_id": 433
            },
            {
              "id": 2976,
              "name": "子长县",
              "parent_id": 433
            },
            {
              "id": 2977,
              "name": "安塞县",
              "parent_id": 433
            },
            {
              "id": 2978,
              "name": "志丹县",
              "parent_id": 433
            },
            {
              "id": 2979,
              "name": "吴起县",
              "parent_id": 433
            },
            {
              "id": 2980,
              "name": "甘泉县",
              "parent_id": 433
            },
            {
              "id": 2981,
              "name": "富县",
              "parent_id": 433
            },
            {
              "id": 2982,
              "name": "洛川县",
              "parent_id": 433
            },
            {
              "id": 2983,
              "name": "宜川县",
              "parent_id": 433
            },
            {
              "id": 2984,
              "name": "黄龙县",
              "parent_id": 433
            },
            {
              "id": 2985,
              "name": "黄陵县",
              "parent_id": 433
            }
          ]
        },
        {
          "id": 434,
          "name": "汉中市",
          "parent_id": 27,
          "child": [
            {
              "id": 2986,
              "name": "汉台区",
              "parent_id": 434
            },
            {
              "id": 2987,
              "name": "南郑县",
              "parent_id": 434
            },
            {
              "id": 2988,
              "name": "城固县",
              "parent_id": 434
            },
            {
              "id": 2989,
              "name": "洋县",
              "parent_id": 434
            },
            {
              "id": 2990,
              "name": "西乡县",
              "parent_id": 434
            },
            {
              "id": 2991,
              "name": "勉县",
              "parent_id": 434
            },
            {
              "id": 2992,
              "name": "宁强县",
              "parent_id": 434
            },
            {
              "id": 2993,
              "name": "略阳县",
              "parent_id": 434
            },
            {
              "id": 2994,
              "name": "镇巴县",
              "parent_id": 434
            },
            {
              "id": 2995,
              "name": "留坝县",
              "parent_id": 434
            },
            {
              "id": 2996,
              "name": "佛坪县",
              "parent_id": 434
            }
          ]
        },
        {
          "id": 435,
          "name": "榆林市",
          "parent_id": 27,
          "child": [
            {
              "id": 2997,
              "name": "榆阳区",
              "parent_id": 435
            },
            {
              "id": 2998,
              "name": "神木县",
              "parent_id": 435
            },
            {
              "id": 2999,
              "name": "府谷县",
              "parent_id": 435
            },
            {
              "id": 3000,
              "name": "横山县",
              "parent_id": 435
            },
            {
              "id": 3001,
              "name": "靖边县",
              "parent_id": 435
            },
            {
              "id": 3002,
              "name": "定边县",
              "parent_id": 435
            },
            {
              "id": 3003,
              "name": "绥德县",
              "parent_id": 435
            },
            {
              "id": 3004,
              "name": "米脂县",
              "parent_id": 435
            },
            {
              "id": 3005,
              "name": "佳县",
              "parent_id": 435
            },
            {
              "id": 3006,
              "name": "吴堡县",
              "parent_id": 435
            },
            {
              "id": 3007,
              "name": "清涧县",
              "parent_id": 435
            },
            {
              "id": 3008,
              "name": "子洲县",
              "parent_id": 435
            }
          ]
        },
        {
          "id": 436,
          "name": "安康市",
          "parent_id": 27,
          "child": [
            {
              "id": 3009,
              "name": "汉滨区",
              "parent_id": 436
            },
            {
              "id": 3010,
              "name": "汉阴县",
              "parent_id": 436
            },
            {
              "id": 3011,
              "name": "石泉县",
              "parent_id": 436
            },
            {
              "id": 3012,
              "name": "宁陕县",
              "parent_id": 436
            },
            {
              "id": 3013,
              "name": "紫阳县",
              "parent_id": 436
            },
            {
              "id": 3014,
              "name": "岚皋县",
              "parent_id": 436
            },
            {
              "id": 3015,
              "name": "平利县",
              "parent_id": 436
            },
            {
              "id": 3016,
              "name": "镇坪县",
              "parent_id": 436
            },
            {
              "id": 3017,
              "name": "旬阳县",
              "parent_id": 436
            },
            {
              "id": 3018,
              "name": "白河县",
              "parent_id": 436
            }
          ]
        },
        {
          "id": 437,
          "name": "商洛市",
          "parent_id": 27,
          "child": [
            {
              "id": 3019,
              "name": "商州区",
              "parent_id": 437
            },
            {
              "id": 3020,
              "name": "洛南县",
              "parent_id": 437
            },
            {
              "id": 3021,
              "name": "丹凤县",
              "parent_id": 437
            },
            {
              "id": 3022,
              "name": "商南县",
              "parent_id": 437
            },
            {
              "id": 3023,
              "name": "山阳县",
              "parent_id": 437
            },
            {
              "id": 3024,
              "name": "镇安县",
              "parent_id": 437
            },
            {
              "id": 3025,
              "name": "柞水县",
              "parent_id": 437
            }
          ]
        }
      ]
    },
    {
      "id": 28,
      "name": "甘肃省",
      "parent_id": 0,
      "child": [
        {
          "id": 438,
          "name": "兰州市",
          "parent_id": 28,
          "child": [
            {
              "id": 3026,
              "name": "城关区",
              "parent_id": 438
            },
            {
              "id": 3027,
              "name": "七里河区",
              "parent_id": 438
            },
            {
              "id": 3028,
              "name": "西固区",
              "parent_id": 438
            },
            {
              "id": 3029,
              "name": "安宁区",
              "parent_id": 438
            },
            {
              "id": 3030,
              "name": "红古区",
              "parent_id": 438
            },
            {
              "id": 3031,
              "name": "永登县",
              "parent_id": 438
            },
            {
              "id": 3032,
              "name": "皋兰县",
              "parent_id": 438
            },
            {
              "id": 3033,
              "name": "榆中县",
              "parent_id": 438
            }
          ]
        },
        {
          "id": 439,
          "name": "嘉峪关市",
          "parent_id": 28,
          "child": [
            {
              "id": 3034,
              "name": "镜铁区",
              "parent_id": 439
            },
            {
              "id": 3035,
              "name": "长城区",
              "parent_id": 439
            },
            {
              "id": 3036,
              "name": "雄关区",
              "parent_id": 439
            }
          ]
        },
        {
          "id": 440,
          "name": "金昌市",
          "parent_id": 28,
          "child": [
            {
              "id": 3037,
              "name": "金川区",
              "parent_id": 440
            },
            {
              "id": 3038,
              "name": "永昌县",
              "parent_id": 440
            }
          ]
        },
        {
          "id": 441,
          "name": "白银市",
          "parent_id": 28,
          "child": [
            {
              "id": 3039,
              "name": "白银区",
              "parent_id": 441
            },
            {
              "id": 3040,
              "name": "平川区",
              "parent_id": 441
            },
            {
              "id": 3041,
              "name": "靖远县",
              "parent_id": 441
            },
            {
              "id": 3042,
              "name": "会宁县",
              "parent_id": 441
            },
            {
              "id": 3043,
              "name": "景泰县",
              "parent_id": 441
            }
          ]
        },
        {
          "id": 442,
          "name": "天水市",
          "parent_id": 28,
          "child": [
            {
              "id": 3044,
              "name": "秦州区",
              "parent_id": 442
            },
            {
              "id": 3045,
              "name": "麦积区",
              "parent_id": 442
            },
            {
              "id": 3046,
              "name": "清水县",
              "parent_id": 442
            },
            {
              "id": 3047,
              "name": "秦安县",
              "parent_id": 442
            },
            {
              "id": 3048,
              "name": "甘谷县",
              "parent_id": 442
            },
            {
              "id": 3049,
              "name": "武山县",
              "parent_id": 442
            },
            {
              "id": 3050,
              "name": "张家川自治县",
              "parent_id": 442
            }
          ]
        },
        {
          "id": 443,
          "name": "武威市",
          "parent_id": 28,
          "child": [
            {
              "id": 3051,
              "name": "凉州区",
              "parent_id": 443
            },
            {
              "id": 3052,
              "name": "民勤县",
              "parent_id": 443
            },
            {
              "id": 3053,
              "name": "古浪县",
              "parent_id": 443
            },
            {
              "id": 3054,
              "name": "天祝自治县",
              "parent_id": 443
            }
          ]
        },
        {
          "id": 444,
          "name": "张掖市",
          "parent_id": 28,
          "child": [
            {
              "id": 3055,
              "name": "甘州区",
              "parent_id": 444
            },
            {
              "id": 3056,
              "name": "肃南自治县",
              "parent_id": 444
            },
            {
              "id": 3057,
              "name": "民乐县",
              "parent_id": 444
            },
            {
              "id": 3058,
              "name": "临泽县",
              "parent_id": 444
            },
            {
              "id": 3059,
              "name": "高台县",
              "parent_id": 444
            },
            {
              "id": 3060,
              "name": "山丹县",
              "parent_id": 444
            }
          ]
        },
        {
          "id": 445,
          "name": "平凉市",
          "parent_id": 28,
          "child": [
            {
              "id": 3061,
              "name": "崆峒区",
              "parent_id": 445
            },
            {
              "id": 3062,
              "name": "泾川县",
              "parent_id": 445
            },
            {
              "id": 3063,
              "name": "灵台县",
              "parent_id": 445
            },
            {
              "id": 3064,
              "name": "崇信县",
              "parent_id": 445
            },
            {
              "id": 3065,
              "name": "华亭县",
              "parent_id": 445
            },
            {
              "id": 3066,
              "name": "庄浪县",
              "parent_id": 445
            },
            {
              "id": 3067,
              "name": "静宁县",
              "parent_id": 445
            }
          ]
        },
        {
          "id": 446,
          "name": "酒泉市",
          "parent_id": 28,
          "child": [
            {
              "id": 3068,
              "name": "肃州区",
              "parent_id": 446
            },
            {
              "id": 3069,
              "name": "金塔县",
              "parent_id": 446
            },
            {
              "id": 3070,
              "name": "瓜州县",
              "parent_id": 446
            },
            {
              "id": 3071,
              "name": "肃北自治县",
              "parent_id": 446
            },
            {
              "id": 3072,
              "name": "阿克塞自治县",
              "parent_id": 446
            },
            {
              "id": 3073,
              "name": "玉门市",
              "parent_id": 446
            },
            {
              "id": 3074,
              "name": "敦煌市",
              "parent_id": 446
            }
          ]
        },
        {
          "id": 447,
          "name": "庆阳市",
          "parent_id": 28,
          "child": [
            {
              "id": 3075,
              "name": "西峰区",
              "parent_id": 447
            },
            {
              "id": 3076,
              "name": "庆城县",
              "parent_id": 447
            },
            {
              "id": 3077,
              "name": "环县",
              "parent_id": 447
            },
            {
              "id": 3078,
              "name": "华池县",
              "parent_id": 447
            },
            {
              "id": 3079,
              "name": "合水县",
              "parent_id": 447
            },
            {
              "id": 3080,
              "name": "正宁县",
              "parent_id": 447
            },
            {
              "id": 3081,
              "name": "宁县",
              "parent_id": 447
            },
            {
              "id": 3082,
              "name": "镇原县",
              "parent_id": 447
            }
          ]
        },
        {
          "id": 448,
          "name": "定西市",
          "parent_id": 28,
          "child": [
            {
              "id": 3083,
              "name": "安定区",
              "parent_id": 448
            },
            {
              "id": 3084,
              "name": "通渭县",
              "parent_id": 448
            },
            {
              "id": 3085,
              "name": "陇西县",
              "parent_id": 448
            },
            {
              "id": 3086,
              "name": "渭源县",
              "parent_id": 448
            },
            {
              "id": 3087,
              "name": "临洮县",
              "parent_id": 448
            },
            {
              "id": 3088,
              "name": "漳县",
              "parent_id": 448
            },
            {
              "id": 3089,
              "name": "岷县",
              "parent_id": 448
            }
          ]
        },
        {
          "id": 449,
          "name": "陇南市",
          "parent_id": 28,
          "child": [
            {
              "id": 3090,
              "name": "武都区",
              "parent_id": 449
            },
            {
              "id": 3091,
              "name": "成县",
              "parent_id": 449
            },
            {
              "id": 3092,
              "name": "文县",
              "parent_id": 449
            },
            {
              "id": 3093,
              "name": "宕昌县",
              "parent_id": 449
            },
            {
              "id": 3094,
              "name": "康县",
              "parent_id": 449
            },
            {
              "id": 3095,
              "name": "西和县",
              "parent_id": 449
            },
            {
              "id": 3096,
              "name": "礼县",
              "parent_id": 449
            },
            {
              "id": 3097,
              "name": "徽县",
              "parent_id": 449
            },
            {
              "id": 3098,
              "name": "两当县",
              "parent_id": 449
            }
          ]
        },
        {
          "id": 450,
          "name": "临夏自治州",
          "parent_id": 28,
          "child": [
            {
              "id": 3099,
              "name": "临夏市",
              "parent_id": 450
            },
            {
              "id": 3100,
              "name": "临夏县",
              "parent_id": 450
            },
            {
              "id": 3101,
              "name": "康乐县",
              "parent_id": 450
            },
            {
              "id": 3102,
              "name": "永靖县",
              "parent_id": 450
            },
            {
              "id": 3103,
              "name": "广河县",
              "parent_id": 450
            },
            {
              "id": 3104,
              "name": "和政县",
              "parent_id": 450
            },
            {
              "id": 3105,
              "name": "东乡族自治县",
              "parent_id": 450
            },
            {
              "id": 3106,
              "name": "积石山自治县",
              "parent_id": 450
            }
          ]
        },
        {
          "id": 451,
          "name": "甘南自治州",
          "parent_id": 28,
          "child": [
            {
              "id": 3107,
              "name": "合作市",
              "parent_id": 451
            },
            {
              "id": 3108,
              "name": "临潭县",
              "parent_id": 451
            },
            {
              "id": 3109,
              "name": "卓尼县",
              "parent_id": 451
            },
            {
              "id": 3110,
              "name": "舟曲县",
              "parent_id": 451
            },
            {
              "id": 3111,
              "name": "迭部县",
              "parent_id": 451
            },
            {
              "id": 3112,
              "name": "玛曲县",
              "parent_id": 451
            },
            {
              "id": 3113,
              "name": "碌曲县",
              "parent_id": 451
            },
            {
              "id": 3114,
              "name": "夏河县",
              "parent_id": 451
            }
          ]
        }
      ]
    },
    {
      "id": 29,
      "name": "青海省",
      "parent_id": 0,
      "child": [
        {
          "id": 452,
          "name": "西宁市",
          "parent_id": 29,
          "child": [
            {
              "id": 3115,
              "name": "城东区",
              "parent_id": 452
            },
            {
              "id": 3116,
              "name": "城中区",
              "parent_id": 452
            },
            {
              "id": 3117,
              "name": "城西区",
              "parent_id": 452
            },
            {
              "id": 3118,
              "name": "城北区",
              "parent_id": 452
            },
            {
              "id": 3119,
              "name": "大通自治县",
              "parent_id": 452
            },
            {
              "id": 3120,
              "name": "湟中县",
              "parent_id": 452
            },
            {
              "id": 3121,
              "name": "湟源县",
              "parent_id": 452
            }
          ]
        },
        {
          "id": 453,
          "name": "海东市",
          "parent_id": 29,
          "child": [
            {
              "id": 3122,
              "name": "乐都区",
              "parent_id": 453
            },
            {
              "id": 3123,
              "name": "平安县",
              "parent_id": 453
            },
            {
              "id": 3124,
              "name": "民和自治县",
              "parent_id": 453
            },
            {
              "id": 3125,
              "name": "互助自治县",
              "parent_id": 453
            },
            {
              "id": 3126,
              "name": "化隆自治县",
              "parent_id": 453
            },
            {
              "id": 3127,
              "name": "循化自治县",
              "parent_id": 453
            }
          ]
        },
        {
          "id": 454,
          "name": "海北自治州",
          "parent_id": 29,
          "child": [
            {
              "id": 3128,
              "name": "门源自治县",
              "parent_id": 454
            },
            {
              "id": 3129,
              "name": "祁连县",
              "parent_id": 454
            },
            {
              "id": 3130,
              "name": "海晏县",
              "parent_id": 454
            },
            {
              "id": 3131,
              "name": "刚察县",
              "parent_id": 454
            }
          ]
        },
        {
          "id": 455,
          "name": "黄南自治州",
          "parent_id": 29,
          "child": [
            {
              "id": 3132,
              "name": "同仁县",
              "parent_id": 455
            },
            {
              "id": 3133,
              "name": "尖扎县",
              "parent_id": 455
            },
            {
              "id": 3134,
              "name": "泽库县",
              "parent_id": 455
            },
            {
              "id": 3135,
              "name": "河南自治县",
              "parent_id": 455
            }
          ]
        },
        {
          "id": 456,
          "name": "海南自治州",
          "parent_id": 29,
          "child": [
            {
              "id": 3136,
              "name": "共和县",
              "parent_id": 456
            },
            {
              "id": 3137,
              "name": "同德县",
              "parent_id": 456
            },
            {
              "id": 3138,
              "name": "贵德县",
              "parent_id": 456
            },
            {
              "id": 3139,
              "name": "兴海县",
              "parent_id": 456
            },
            {
              "id": 3140,
              "name": "贵南县",
              "parent_id": 456
            }
          ]
        },
        {
          "id": 457,
          "name": "果洛自治州",
          "parent_id": 29,
          "child": [
            {
              "id": 3141,
              "name": "玛沁县",
              "parent_id": 457
            },
            {
              "id": 3142,
              "name": "班玛县",
              "parent_id": 457
            },
            {
              "id": 3143,
              "name": "甘德县",
              "parent_id": 457
            },
            {
              "id": 3144,
              "name": "达日县",
              "parent_id": 457
            },
            {
              "id": 3145,
              "name": "久治县",
              "parent_id": 457
            },
            {
              "id": 3146,
              "name": "玛多县",
              "parent_id": 457
            }
          ]
        },
        {
          "id": 458,
          "name": "玉树自治州",
          "parent_id": 29,
          "child": [
            {
              "id": 3147,
              "name": "玉树市",
              "parent_id": 458
            },
            {
              "id": 3148,
              "name": "杂多县",
              "parent_id": 458
            },
            {
              "id": 3149,
              "name": "治多县",
              "parent_id": 458
            },
            {
              "id": 3150,
              "name": "囊谦县",
              "parent_id": 458
            },
            {
              "id": 3151,
              "name": "曲麻莱县",
              "parent_id": 458
            }
          ]
        },
        {
          "id": 459,
          "name": "海西自治州",
          "parent_id": 29,
          "child": [
            {
              "id": 3152,
              "name": "大柴旦行委",
              "parent_id": 459
            },
            {
              "id": 3153,
              "name": "冷湖行委",
              "parent_id": 459
            },
            {
              "id": 3154,
              "name": "茫崖行委",
              "parent_id": 459
            },
            {
              "id": 3155,
              "name": "格尔木市",
              "parent_id": 459
            },
            {
              "id": 3156,
              "name": "德令哈市",
              "parent_id": 459
            },
            {
              "id": 3157,
              "name": "乌兰县",
              "parent_id": 459
            },
            {
              "id": 3158,
              "name": "都兰县",
              "parent_id": 459
            },
            {
              "id": 3159,
              "name": "天峻县",
              "parent_id": 459
            }
          ]
        }
      ]
    },
    {
      "id": 30,
      "name": "宁夏自治区",
      "parent_id": 0,
      "child": [
        {
          "id": 460,
          "name": "银川市",
          "parent_id": 30,
          "child": [
            {
              "id": 3160,
              "name": "兴庆区",
              "parent_id": 460
            },
            {
              "id": 3161,
              "name": "西夏区",
              "parent_id": 460
            },
            {
              "id": 3162,
              "name": "金凤区",
              "parent_id": 460
            },
            {
              "id": 3163,
              "name": "永宁县",
              "parent_id": 460
            },
            {
              "id": 3164,
              "name": "贺兰县",
              "parent_id": 460
            },
            {
              "id": 3165,
              "name": "灵武市",
              "parent_id": 460
            }
          ]
        },
        {
          "id": 461,
          "name": "石嘴山市",
          "parent_id": 30,
          "child": [
            {
              "id": 3166,
              "name": "大武口区",
              "parent_id": 461
            },
            {
              "id": 3167,
              "name": "惠农区",
              "parent_id": 461
            },
            {
              "id": 3168,
              "name": "平罗县",
              "parent_id": 461
            }
          ]
        },
        {
          "id": 462,
          "name": "吴忠市",
          "parent_id": 30,
          "child": [
            {
              "id": 3169,
              "name": "红寺堡区",
              "parent_id": 462
            },
            {
              "id": 3170,
              "name": "利通区",
              "parent_id": 462
            },
            {
              "id": 3171,
              "name": "盐池县",
              "parent_id": 462
            },
            {
              "id": 3172,
              "name": "同心县",
              "parent_id": 462
            },
            {
              "id": 3173,
              "name": "青铜峡市",
              "parent_id": 462
            }
          ]
        },
        {
          "id": 463,
          "name": "固原市",
          "parent_id": 30,
          "child": [
            {
              "id": 3174,
              "name": "原州区",
              "parent_id": 463
            },
            {
              "id": 3175,
              "name": "西吉县",
              "parent_id": 463
            },
            {
              "id": 3176,
              "name": "隆德县",
              "parent_id": 463
            },
            {
              "id": 3177,
              "name": "泾源县",
              "parent_id": 463
            },
            {
              "id": 3178,
              "name": "彭阳县",
              "parent_id": 463
            }
          ]
        },
        {
          "id": 464,
          "name": "中卫市",
          "parent_id": 30,
          "child": [
            {
              "id": 3179,
              "name": "沙坡头区",
              "parent_id": 464
            },
            {
              "id": 3180,
              "name": "中宁县",
              "parent_id": 464
            },
            {
              "id": 3181,
              "name": "海原县",
              "parent_id": 464
            }
          ]
        }
      ]
    },
    {
      "id": 31,
      "name": "新疆自治区",
      "parent_id": 0,
      "child": [
        {
          "id": 465,
          "name": "乌鲁木齐市",
          "parent_id": 31,
          "child": [
            {
              "id": 3182,
              "name": "天山区",
              "parent_id": 465
            },
            {
              "id": 3183,
              "name": "沙依巴克区",
              "parent_id": 465
            },
            {
              "id": 3184,
              "name": "新市区",
              "parent_id": 465
            },
            {
              "id": 3185,
              "name": "水磨沟区",
              "parent_id": 465
            },
            {
              "id": 3186,
              "name": "头屯河区",
              "parent_id": 465
            },
            {
              "id": 3187,
              "name": "达坂城区",
              "parent_id": 465
            },
            {
              "id": 3188,
              "name": "米东区",
              "parent_id": 465
            },
            {
              "id": 3189,
              "name": "乌鲁木齐县",
              "parent_id": 465
            }
          ]
        },
        {
          "id": 466,
          "name": "克拉玛依市",
          "parent_id": 31,
          "child": [
            {
              "id": 3190,
              "name": "独山子区",
              "parent_id": 466
            },
            {
              "id": 3191,
              "name": "克拉玛依区",
              "parent_id": 466
            },
            {
              "id": 3192,
              "name": "白碱滩区",
              "parent_id": 466
            },
            {
              "id": 3193,
              "name": "乌尔禾区",
              "parent_id": 466
            }
          ]
        },
        {
          "id": 467,
          "name": "吐鲁番地区",
          "parent_id": 31,
          "child": [
            {
              "id": 3194,
              "name": "吐鲁番市",
              "parent_id": 467
            },
            {
              "id": 3195,
              "name": "鄯善县",
              "parent_id": 467
            },
            {
              "id": 3196,
              "name": "托克逊县",
              "parent_id": 467
            }
          ]
        },
        {
          "id": 468,
          "name": "哈密地区",
          "parent_id": 31,
          "child": [
            {
              "id": 3197,
              "name": "哈密市",
              "parent_id": 468
            },
            {
              "id": 3198,
              "name": "巴里坤自治县",
              "parent_id": 468
            },
            {
              "id": 3199,
              "name": "伊吾县",
              "parent_id": 468
            }
          ]
        },
        {
          "id": 469,
          "name": "昌吉自治州",
          "parent_id": 31,
          "child": [
            {
              "id": 3200,
              "name": "昌吉市",
              "parent_id": 469
            },
            {
              "id": 3201,
              "name": "阜康市",
              "parent_id": 469
            },
            {
              "id": 3202,
              "name": "呼图壁县",
              "parent_id": 469
            },
            {
              "id": 3203,
              "name": "玛纳斯县",
              "parent_id": 469
            },
            {
              "id": 3204,
              "name": "奇台县",
              "parent_id": 469
            },
            {
              "id": 3205,
              "name": "吉木萨尔县",
              "parent_id": 469
            },
            {
              "id": 3206,
              "name": "木垒自治县",
              "parent_id": 469
            }
          ]
        },
        {
          "id": 470,
          "name": "博尔塔拉自治州",
          "parent_id": 31,
          "child": [
            {
              "id": 3207,
              "name": "阿拉山口市",
              "parent_id": 470
            },
            {
              "id": 3208,
              "name": "博乐市",
              "parent_id": 470
            },
            {
              "id": 3209,
              "name": "精河县",
              "parent_id": 470
            },
            {
              "id": 3210,
              "name": "温泉县",
              "parent_id": 470
            }
          ]
        },
        {
          "id": 471,
          "name": "巴音郭楞自治州",
          "parent_id": 31,
          "child": [
            {
              "id": 3211,
              "name": "库尔勒市",
              "parent_id": 471
            },
            {
              "id": 3212,
              "name": "轮台县",
              "parent_id": 471
            },
            {
              "id": 3213,
              "name": "尉犁县",
              "parent_id": 471
            },
            {
              "id": 3214,
              "name": "若羌县",
              "parent_id": 471
            },
            {
              "id": 3215,
              "name": "且末县",
              "parent_id": 471
            },
            {
              "id": 3216,
              "name": "焉耆自治县",
              "parent_id": 471
            },
            {
              "id": 3217,
              "name": "和静县",
              "parent_id": 471
            },
            {
              "id": 3218,
              "name": "和硕县",
              "parent_id": 471
            },
            {
              "id": 3219,
              "name": "博湖县",
              "parent_id": 471
            }
          ]
        },
        {
          "id": 472,
          "name": "阿克苏地区",
          "parent_id": 31,
          "child": [
            {
              "id": 3220,
              "name": "阿克苏市",
              "parent_id": 472
            },
            {
              "id": 3221,
              "name": "温宿县",
              "parent_id": 472
            },
            {
              "id": 3222,
              "name": "库车县",
              "parent_id": 472
            },
            {
              "id": 3223,
              "name": "沙雅县",
              "parent_id": 472
            },
            {
              "id": 3224,
              "name": "新和县",
              "parent_id": 472
            },
            {
              "id": 3225,
              "name": "拜城县",
              "parent_id": 472
            },
            {
              "id": 3226,
              "name": "乌什县",
              "parent_id": 472
            },
            {
              "id": 3227,
              "name": "阿瓦提县",
              "parent_id": 472
            },
            {
              "id": 3228,
              "name": "柯坪县",
              "parent_id": 472
            }
          ]
        },
        {
          "id": 473,
          "name": "克孜勒苏自治州",
          "parent_id": 31,
          "child": [
            {
              "id": 3229,
              "name": "阿图什市",
              "parent_id": 473
            },
            {
              "id": 3230,
              "name": "阿克陶县",
              "parent_id": 473
            },
            {
              "id": 3231,
              "name": "阿合奇县",
              "parent_id": 473
            },
            {
              "id": 3232,
              "name": "乌恰县",
              "parent_id": 473
            }
          ]
        },
        {
          "id": 474,
          "name": "喀什地区",
          "parent_id": 31,
          "child": [
            {
              "id": 3233,
              "name": "喀什市",
              "parent_id": 474
            },
            {
              "id": 3234,
              "name": "疏附县",
              "parent_id": 474
            },
            {
              "id": 3235,
              "name": "疏勒县",
              "parent_id": 474
            },
            {
              "id": 3236,
              "name": "英吉沙县",
              "parent_id": 474
            },
            {
              "id": 3237,
              "name": "泽普县",
              "parent_id": 474
            },
            {
              "id": 3238,
              "name": "莎车县",
              "parent_id": 474
            },
            {
              "id": 3239,
              "name": "叶城县",
              "parent_id": 474
            },
            {
              "id": 3240,
              "name": "麦盖提县",
              "parent_id": 474
            },
            {
              "id": 3241,
              "name": "岳普湖县",
              "parent_id": 474
            },
            {
              "id": 3242,
              "name": "伽师县",
              "parent_id": 474
            },
            {
              "id": 3243,
              "name": "巴楚县",
              "parent_id": 474
            },
            {
              "id": 3244,
              "name": "塔什库尔干自治县",
              "parent_id": 474
            }
          ]
        },
        {
          "id": 475,
          "name": "和田地区",
          "parent_id": 31,
          "child": [
            {
              "id": 3245,
              "name": "和田市",
              "parent_id": 475
            },
            {
              "id": 3246,
              "name": "和田县",
              "parent_id": 475
            },
            {
              "id": 3247,
              "name": "墨玉县",
              "parent_id": 475
            },
            {
              "id": 3248,
              "name": "皮山县",
              "parent_id": 475
            },
            {
              "id": 3249,
              "name": "洛浦县",
              "parent_id": 475
            },
            {
              "id": 3250,
              "name": "策勒县",
              "parent_id": 475
            },
            {
              "id": 3251,
              "name": "于田县",
              "parent_id": 475
            },
            {
              "id": 3252,
              "name": "民丰县",
              "parent_id": 475
            }
          ]
        },
        {
          "id": 476,
          "name": "伊犁自治州",
          "parent_id": 31,
          "child": [
            {
              "id": 3253,
              "name": "伊宁市",
              "parent_id": 476
            },
            {
              "id": 3254,
              "name": "奎屯市",
              "parent_id": 476
            },
            {
              "id": 3255,
              "name": "伊宁县",
              "parent_id": 476
            },
            {
              "id": 3256,
              "name": "察布查尔锡伯自治县",
              "parent_id": 476
            },
            {
              "id": 3257,
              "name": "霍城县",
              "parent_id": 476
            },
            {
              "id": 3258,
              "name": "巩留县",
              "parent_id": 476
            },
            {
              "id": 3259,
              "name": "新源县",
              "parent_id": 476
            },
            {
              "id": 3260,
              "name": "昭苏县",
              "parent_id": 476
            },
            {
              "id": 3261,
              "name": "特克斯县",
              "parent_id": 476
            },
            {
              "id": 3262,
              "name": "尼勒克县",
              "parent_id": 476
            },
            {
              "id": 3582,
              "name": "霍尔果斯市",
              "parent_id": 476
            }
          ]
        },
        {
          "id": 477,
          "name": "塔城地区",
          "parent_id": 31,
          "child": [
            {
              "id": 3263,
              "name": "塔城市",
              "parent_id": 477
            },
            {
              "id": 3264,
              "name": "乌苏市",
              "parent_id": 477
            },
            {
              "id": 3265,
              "name": "额敏县",
              "parent_id": 477
            },
            {
              "id": 3266,
              "name": "沙湾县",
              "parent_id": 477
            },
            {
              "id": 3267,
              "name": "托里县",
              "parent_id": 477
            },
            {
              "id": 3268,
              "name": "裕民县",
              "parent_id": 477
            },
            {
              "id": 3269,
              "name": "和布克赛尔自治县",
              "parent_id": 477
            }
          ]
        },
        {
          "id": 478,
          "name": "阿勒泰地区",
          "parent_id": 31,
          "child": [
            {
              "id": 3270,
              "name": "阿勒泰市",
              "parent_id": 478
            },
            {
              "id": 3271,
              "name": "布尔津县",
              "parent_id": 478
            },
            {
              "id": 3272,
              "name": "富蕴县",
              "parent_id": 478
            },
            {
              "id": 3273,
              "name": "福海县",
              "parent_id": 478
            },
            {
              "id": 3274,
              "name": "哈巴河县",
              "parent_id": 478
            },
            {
              "id": 3275,
              "name": "青河县",
              "parent_id": 478
            },
            {
              "id": 3276,
              "name": "吉木乃县",
              "parent_id": 478
            }
          ]
        },
        {
          "id": 479,
          "name": "石河子市",
          "parent_id": 31,
          "child": []
        },
        {
          "id": 480,
          "name": "阿拉尔市",
          "parent_id": 31,
          "child": []
        },
        {
          "id": 481,
          "name": "图木舒克市",
          "parent_id": 31,
          "child": []
        },
        {
          "id": 482,
          "name": "五家渠市",
          "parent_id": 31,
          "child": []
        },
        {
          "id": 483,
          "name": "北屯市",
          "parent_id": 31,
          "child": []
        },
        {
          "id": 484,
          "name": "铁门关市",
          "parent_id": 31,
          "child": []
        },
        {
          "id": 3577,
          "name": "双河市",
          "parent_id": 31,
          "child": []
        }
      ]
    },
    {
      "id": 32,
      "name": "台湾省",
      "parent_id": 0,
      "child": [
        {
          "id": 485,
          "name": "台北市",
          "parent_id": 32,
          "child": [
            {
              "id": 3277,
              "name": "松山区",
              "parent_id": 485
            },
            {
              "id": 3278,
              "name": "信义区",
              "parent_id": 485
            },
            {
              "id": 3279,
              "name": "大安区",
              "parent_id": 485
            },
            {
              "id": 3280,
              "name": "中山区",
              "parent_id": 485
            },
            {
              "id": 3281,
              "name": "中正区",
              "parent_id": 485
            },
            {
              "id": 3282,
              "name": "大同区",
              "parent_id": 485
            },
            {
              "id": 3283,
              "name": "万华区",
              "parent_id": 485
            },
            {
              "id": 3284,
              "name": "文山区",
              "parent_id": 485
            },
            {
              "id": 3285,
              "name": "南港区",
              "parent_id": 485
            },
            {
              "id": 3286,
              "name": "内湖区",
              "parent_id": 485
            },
            {
              "id": 3287,
              "name": "士林区",
              "parent_id": 485
            },
            {
              "id": 3288,
              "name": "北投区",
              "parent_id": 485
            }
          ]
        },
        {
          "id": 486,
          "name": "高雄市",
          "parent_id": 32,
          "child": [
            {
              "id": 3289,
              "name": "盐埕区",
              "parent_id": 486
            },
            {
              "id": 3290,
              "name": "鼓山区",
              "parent_id": 486
            },
            {
              "id": 3291,
              "name": "左营区",
              "parent_id": 486
            },
            {
              "id": 3292,
              "name": "楠梓区",
              "parent_id": 486
            },
            {
              "id": 3293,
              "name": "三民区",
              "parent_id": 486
            },
            {
              "id": 3294,
              "name": "新兴区",
              "parent_id": 486
            },
            {
              "id": 3295,
              "name": "前金区",
              "parent_id": 486
            },
            {
              "id": 3296,
              "name": "苓雅区",
              "parent_id": 486
            },
            {
              "id": 3297,
              "name": "前镇区",
              "parent_id": 486
            },
            {
              "id": 3298,
              "name": "旗津区",
              "parent_id": 486
            },
            {
              "id": 3299,
              "name": "小港区",
              "parent_id": 486
            }
          ]
        },
        {
          "id": 487,
          "name": "基隆市",
          "parent_id": 32,
          "child": [
            {
              "id": 3300,
              "name": "中正区",
              "parent_id": 487
            },
            {
              "id": 3301,
              "name": "七堵区",
              "parent_id": 487
            },
            {
              "id": 3302,
              "name": "暖暖区",
              "parent_id": 487
            },
            {
              "id": 3303,
              "name": "仁爱区",
              "parent_id": 487
            },
            {
              "id": 3304,
              "name": "中山区",
              "parent_id": 487
            },
            {
              "id": 3305,
              "name": "安乐区",
              "parent_id": 487
            },
            {
              "id": 3306,
              "name": "信义区",
              "parent_id": 487
            }
          ]
        },
        {
          "id": 488,
          "name": "台中市",
          "parent_id": 32,
          "child": [
            {
              "id": 3307,
              "name": "大安区",
              "parent_id": 488
            },
            {
              "id": 3308,
              "name": "神冈区",
              "parent_id": 488
            },
            {
              "id": 3309,
              "name": "石冈区",
              "parent_id": 488
            },
            {
              "id": 3310,
              "name": "东势区",
              "parent_id": 488
            },
            {
              "id": 3311,
              "name": "新社区",
              "parent_id": 488
            },
            {
              "id": 3312,
              "name": "和平区",
              "parent_id": 488
            },
            {
              "id": 3313,
              "name": "大肚区",
              "parent_id": 488
            },
            {
              "id": 3314,
              "name": "沙鹿区",
              "parent_id": 488
            },
            {
              "id": 3315,
              "name": "龙井区",
              "parent_id": 488
            },
            {
              "id": 3316,
              "name": "梧栖区",
              "parent_id": 488
            },
            {
              "id": 3317,
              "name": "清水区",
              "parent_id": 488
            },
            {
              "id": 3318,
              "name": "大甲区",
              "parent_id": 488
            },
            {
              "id": 3319,
              "name": "外埔区",
              "parent_id": 488
            },
            {
              "id": 3320,
              "name": "大雅区",
              "parent_id": 488
            },
            {
              "id": 3321,
              "name": "潭子区",
              "parent_id": 488
            },
            {
              "id": 3322,
              "name": "后里区",
              "parent_id": 488
            },
            {
              "id": 3323,
              "name": "丰原区",
              "parent_id": 488
            },
            {
              "id": 3324,
              "name": "乌日区",
              "parent_id": 488
            },
            {
              "id": 3325,
              "name": "雾峰区",
              "parent_id": 488
            },
            {
              "id": 3326,
              "name": "大里区",
              "parent_id": 488
            },
            {
              "id": 3327,
              "name": "太平区",
              "parent_id": 488
            },
            {
              "id": 3328,
              "name": "中区",
              "parent_id": 488
            },
            {
              "id": 3329,
              "name": "东区",
              "parent_id": 488
            },
            {
              "id": 3330,
              "name": "南区",
              "parent_id": 488
            },
            {
              "id": 3331,
              "name": "西区",
              "parent_id": 488
            },
            {
              "id": 3332,
              "name": "北区",
              "parent_id": 488
            },
            {
              "id": 3333,
              "name": "西屯区",
              "parent_id": 488
            },
            {
              "id": 3334,
              "name": "南屯区",
              "parent_id": 488
            },
            {
              "id": 3335,
              "name": "北屯区",
              "parent_id": 488
            }
          ]
        },
        {
          "id": 489,
          "name": "台南市",
          "parent_id": 32,
          "child": [
            {
              "id": 3336,
              "name": "东区",
              "parent_id": 489
            },
            {
              "id": 3337,
              "name": "南区",
              "parent_id": 489
            },
            {
              "id": 3338,
              "name": "北区",
              "parent_id": 489
            },
            {
              "id": 3339,
              "name": "安南区",
              "parent_id": 489
            },
            {
              "id": 3340,
              "name": "安平区",
              "parent_id": 489
            },
            {
              "id": 3341,
              "name": "中西区",
              "parent_id": 489
            }
          ]
        },
        {
          "id": 490,
          "name": "新竹市",
          "parent_id": 32,
          "child": [
            {
              "id": 3342,
              "name": "东区",
              "parent_id": 490
            },
            {
              "id": 3343,
              "name": "北区",
              "parent_id": 490
            },
            {
              "id": 3344,
              "name": "香山区",
              "parent_id": 490
            }
          ]
        },
        {
          "id": 491,
          "name": "嘉义市",
          "parent_id": 32,
          "child": [
            {
              "id": 3345,
              "name": "东区",
              "parent_id": 491
            },
            {
              "id": 3346,
              "name": "西区",
              "parent_id": 491
            }
          ]
        },
        {
          "id": 492,
          "name": "新北市",
          "parent_id": 32,
          "child": [
            {
              "id": 3347,
              "name": "板桥区",
              "parent_id": 492
            },
            {
              "id": 3348,
              "name": "瑞芳区",
              "parent_id": 492
            },
            {
              "id": 3349,
              "name": "八里区",
              "parent_id": 492
            },
            {
              "id": 3350,
              "name": "深坑区",
              "parent_id": 492
            },
            {
              "id": 3351,
              "name": "三芝区",
              "parent_id": 492
            },
            {
              "id": 3352,
              "name": "金山区",
              "parent_id": 492
            },
            {
              "id": 3353,
              "name": "万里区",
              "parent_id": 492
            },
            {
              "id": 3354,
              "name": "贡寮区",
              "parent_id": 492
            },
            {
              "id": 3355,
              "name": "石门区",
              "parent_id": 492
            },
            {
              "id": 3356,
              "name": "双溪区",
              "parent_id": 492
            },
            {
              "id": 3357,
              "name": "石碇区",
              "parent_id": 492
            },
            {
              "id": 3358,
              "name": "坪林区",
              "parent_id": 492
            },
            {
              "id": 3359,
              "name": "乌来区",
              "parent_id": 492
            },
            {
              "id": 3360,
              "name": "泰山区",
              "parent_id": 492
            },
            {
              "id": 3361,
              "name": "五股区",
              "parent_id": 492
            },
            {
              "id": 3362,
              "name": "莺歌区",
              "parent_id": 492
            },
            {
              "id": 3363,
              "name": "中和区",
              "parent_id": 492
            },
            {
              "id": 3364,
              "name": "新庄区",
              "parent_id": 492
            },
            {
              "id": 3365,
              "name": "三重区",
              "parent_id": 492
            },
            {
              "id": 3366,
              "name": "新店区",
              "parent_id": 492
            },
            {
              "id": 3367,
              "name": "土城区",
              "parent_id": 492
            },
            {
              "id": 3368,
              "name": "永和区",
              "parent_id": 492
            },
            {
              "id": 3369,
              "name": "芦洲区",
              "parent_id": 492
            },
            {
              "id": 3370,
              "name": "汐止区",
              "parent_id": 492
            },
            {
              "id": 3371,
              "name": "树林区",
              "parent_id": 492
            },
            {
              "id": 3372,
              "name": "淡水区",
              "parent_id": 492
            },
            {
              "id": 3373,
              "name": "三峡区",
              "parent_id": 492
            },
            {
              "id": 3374,
              "name": "林口区",
              "parent_id": 492
            },
            {
              "id": 3375,
              "name": "平溪区",
              "parent_id": 492
            }
          ]
        },
        {
          "id": 493,
          "name": "宜兰县",
          "parent_id": 32,
          "child": [
            {
              "id": 3376,
              "name": "宜兰市",
              "parent_id": 493
            },
            {
              "id": 3377,
              "name": "罗东镇",
              "parent_id": 493
            },
            {
              "id": 3378,
              "name": "苏澳镇",
              "parent_id": 493
            },
            {
              "id": 3379,
              "name": "头城乡",
              "parent_id": 493
            },
            {
              "id": 3380,
              "name": "礁溪乡",
              "parent_id": 493
            },
            {
              "id": 3381,
              "name": "壮围乡",
              "parent_id": 493
            },
            {
              "id": 3382,
              "name": "员山乡",
              "parent_id": 493
            },
            {
              "id": 3383,
              "name": "冬山乡",
              "parent_id": 493
            },
            {
              "id": 3384,
              "name": "五结乡",
              "parent_id": 493
            },
            {
              "id": 3385,
              "name": "三星乡",
              "parent_id": 493
            },
            {
              "id": 3386,
              "name": "大同乡",
              "parent_id": 493
            },
            {
              "id": 3387,
              "name": "南澳乡",
              "parent_id": 493
            }
          ]
        },
        {
          "id": 494,
          "name": "桃园县",
          "parent_id": 32,
          "child": [
            {
              "id": 3388,
              "name": "桃园市",
              "parent_id": 494
            },
            {
              "id": 3389,
              "name": "中坜市",
              "parent_id": 494
            },
            {
              "id": 3390,
              "name": "大溪镇",
              "parent_id": 494
            },
            {
              "id": 3391,
              "name": "杨梅镇",
              "parent_id": 494
            },
            {
              "id": 3392,
              "name": "芦竹乡",
              "parent_id": 494
            },
            {
              "id": 3393,
              "name": "大园乡",
              "parent_id": 494
            },
            {
              "id": 3394,
              "name": "龟山乡",
              "parent_id": 494
            },
            {
              "id": 3395,
              "name": "八德市",
              "parent_id": 494
            },
            {
              "id": 3396,
              "name": "龙潭乡",
              "parent_id": 494
            },
            {
              "id": 3397,
              "name": "平镇市",
              "parent_id": 494
            },
            {
              "id": 3398,
              "name": "新屋乡",
              "parent_id": 494
            },
            {
              "id": 3399,
              "name": "观音乡",
              "parent_id": 494
            },
            {
              "id": 3400,
              "name": "复兴乡",
              "parent_id": 494
            }
          ]
        },
        {
          "id": 495,
          "name": "新竹县",
          "parent_id": 32,
          "child": [
            {
              "id": 3401,
              "name": "竹北市",
              "parent_id": 495
            },
            {
              "id": 3402,
              "name": "竹东镇",
              "parent_id": 495
            },
            {
              "id": 3403,
              "name": "新埔镇",
              "parent_id": 495
            },
            {
              "id": 3404,
              "name": "关西镇",
              "parent_id": 495
            },
            {
              "id": 3405,
              "name": "湖口乡",
              "parent_id": 495
            },
            {
              "id": 3406,
              "name": "新丰乡",
              "parent_id": 495
            },
            {
              "id": 3407,
              "name": "芎林乡",
              "parent_id": 495
            },
            {
              "id": 3408,
              "name": "横山乡",
              "parent_id": 495
            },
            {
              "id": 3409,
              "name": "北埔乡",
              "parent_id": 495
            },
            {
              "id": 3410,
              "name": "宝山乡",
              "parent_id": 495
            },
            {
              "id": 3411,
              "name": "峨眉乡",
              "parent_id": 495
            },
            {
              "id": 3412,
              "name": "尖石乡",
              "parent_id": 495
            },
            {
              "id": 3413,
              "name": "五峰乡",
              "parent_id": 495
            }
          ]
        },
        {
          "id": 496,
          "name": "苗栗县",
          "parent_id": 32,
          "child": [
            {
              "id": 3414,
              "name": "苗栗市",
              "parent_id": 496
            },
            {
              "id": 3415,
              "name": "苑里镇",
              "parent_id": 496
            },
            {
              "id": 3416,
              "name": "通霄镇",
              "parent_id": 496
            },
            {
              "id": 3417,
              "name": "竹南镇",
              "parent_id": 496
            },
            {
              "id": 3418,
              "name": "头份镇",
              "parent_id": 496
            },
            {
              "id": 3419,
              "name": "后龙镇",
              "parent_id": 496
            },
            {
              "id": 3420,
              "name": "卓兰镇",
              "parent_id": 496
            },
            {
              "id": 3421,
              "name": "大湖乡",
              "parent_id": 496
            },
            {
              "id": 3422,
              "name": "公馆乡",
              "parent_id": 496
            },
            {
              "id": 3423,
              "name": "铜锣乡",
              "parent_id": 496
            },
            {
              "id": 3424,
              "name": "南庄乡",
              "parent_id": 496
            },
            {
              "id": 3425,
              "name": "头屋乡",
              "parent_id": 496
            },
            {
              "id": 3426,
              "name": "三义乡",
              "parent_id": 496
            },
            {
              "id": 3427,
              "name": "西湖乡",
              "parent_id": 496
            },
            {
              "id": 3428,
              "name": "造桥乡",
              "parent_id": 496
            },
            {
              "id": 3429,
              "name": "三湾乡",
              "parent_id": 496
            },
            {
              "id": 3430,
              "name": "狮潭乡",
              "parent_id": 496
            },
            {
              "id": 3431,
              "name": "泰安乡",
              "parent_id": 496
            }
          ]
        },
        {
          "id": 497,
          "name": "彰化县",
          "parent_id": 32,
          "child": [
            {
              "id": 3432,
              "name": "彰化市",
              "parent_id": 497
            },
            {
              "id": 3433,
              "name": "鹿港镇",
              "parent_id": 497
            },
            {
              "id": 3434,
              "name": "和美镇",
              "parent_id": 497
            },
            {
              "id": 3435,
              "name": "线西乡",
              "parent_id": 497
            },
            {
              "id": 3436,
              "name": "伸港乡",
              "parent_id": 497
            },
            {
              "id": 3437,
              "name": "福兴乡",
              "parent_id": 497
            },
            {
              "id": 3438,
              "name": "秀水乡",
              "parent_id": 497
            },
            {
              "id": 3439,
              "name": "花坛乡",
              "parent_id": 497
            },
            {
              "id": 3440,
              "name": "芬园乡",
              "parent_id": 497
            },
            {
              "id": 3441,
              "name": "员林镇",
              "parent_id": 497
            },
            {
              "id": 3442,
              "name": "溪湖镇",
              "parent_id": 497
            },
            {
              "id": 3443,
              "name": "田中镇",
              "parent_id": 497
            },
            {
              "id": 3444,
              "name": "大村乡",
              "parent_id": 497
            },
            {
              "id": 3445,
              "name": "埔盐乡",
              "parent_id": 497
            },
            {
              "id": 3446,
              "name": "埔心乡",
              "parent_id": 497
            },
            {
              "id": 3447,
              "name": "永靖乡",
              "parent_id": 497
            },
            {
              "id": 3448,
              "name": "社头乡",
              "parent_id": 497
            },
            {
              "id": 3449,
              "name": "二水乡",
              "parent_id": 497
            },
            {
              "id": 3450,
              "name": "北斗镇",
              "parent_id": 497
            },
            {
              "id": 3451,
              "name": "二林镇",
              "parent_id": 497
            },
            {
              "id": 3452,
              "name": "田尾乡",
              "parent_id": 497
            },
            {
              "id": 3453,
              "name": "埤头乡",
              "parent_id": 497
            },
            {
              "id": 3454,
              "name": "芳苑乡",
              "parent_id": 497
            },
            {
              "id": 3455,
              "name": "大城乡",
              "parent_id": 497
            },
            {
              "id": 3456,
              "name": "竹塘乡",
              "parent_id": 497
            },
            {
              "id": 3457,
              "name": "溪州乡",
              "parent_id": 497
            }
          ]
        },
        {
          "id": 498,
          "name": "南投县",
          "parent_id": 32,
          "child": [
            {
              "id": 3458,
              "name": "南投市",
              "parent_id": 498
            },
            {
              "id": 3459,
              "name": "南投镇",
              "parent_id": 498
            },
            {
              "id": 3460,
              "name": "草屯镇",
              "parent_id": 498
            },
            {
              "id": 3461,
              "name": "竹山镇",
              "parent_id": 498
            },
            {
              "id": 3462,
              "name": "集集镇",
              "parent_id": 498
            },
            {
              "id": 3463,
              "name": "名间乡",
              "parent_id": 498
            },
            {
              "id": 3464,
              "name": "鹿谷乡",
              "parent_id": 498
            },
            {
              "id": 3465,
              "name": "中寮乡",
              "parent_id": 498
            },
            {
              "id": 3466,
              "name": "鱼池乡",
              "parent_id": 498
            },
            {
              "id": 3467,
              "name": "国姓乡",
              "parent_id": 498
            },
            {
              "id": 3468,
              "name": "水里乡",
              "parent_id": 498
            },
            {
              "id": 3469,
              "name": "信义乡",
              "parent_id": 498
            },
            {
              "id": 3470,
              "name": "仁爱乡",
              "parent_id": 498
            }
          ]
        },
        {
          "id": 499,
          "name": "云林县",
          "parent_id": 32,
          "child": [
            {
              "id": 3471,
              "name": "斗六市",
              "parent_id": 499
            },
            {
              "id": 3472,
              "name": "斗南镇",
              "parent_id": 499
            },
            {
              "id": 3473,
              "name": "虎尾镇",
              "parent_id": 499
            },
            {
              "id": 3474,
              "name": "西螺镇",
              "parent_id": 499
            },
            {
              "id": 3475,
              "name": "土库镇",
              "parent_id": 499
            },
            {
              "id": 3476,
              "name": "北港镇",
              "parent_id": 499
            },
            {
              "id": 3477,
              "name": "古坑乡",
              "parent_id": 499
            },
            {
              "id": 3478,
              "name": "大埤乡",
              "parent_id": 499
            },
            {
              "id": 3479,
              "name": "莿桐乡",
              "parent_id": 499
            },
            {
              "id": 3480,
              "name": "林内乡",
              "parent_id": 499
            },
            {
              "id": 3481,
              "name": "二仑乡",
              "parent_id": 499
            },
            {
              "id": 3482,
              "name": "仑背乡",
              "parent_id": 499
            },
            {
              "id": 3483,
              "name": "麦寮乡",
              "parent_id": 499
            },
            {
              "id": 3484,
              "name": "东势乡",
              "parent_id": 499
            },
            {
              "id": 3485,
              "name": "褒忠乡",
              "parent_id": 499
            },
            {
              "id": 3486,
              "name": "台西乡",
              "parent_id": 499
            },
            {
              "id": 3487,
              "name": "元长乡",
              "parent_id": 499
            },
            {
              "id": 3488,
              "name": "四湖乡",
              "parent_id": 499
            },
            {
              "id": 3489,
              "name": "口湖乡",
              "parent_id": 499
            },
            {
              "id": 3490,
              "name": "水林乡",
              "parent_id": 499
            }
          ]
        },
        {
          "id": 500,
          "name": "嘉义县",
          "parent_id": 32,
          "child": [
            {
              "id": 3491,
              "name": "太保市",
              "parent_id": 500
            },
            {
              "id": 3492,
              "name": "朴子市",
              "parent_id": 500
            },
            {
              "id": 3493,
              "name": "布袋镇",
              "parent_id": 500
            },
            {
              "id": 3494,
              "name": "大林镇",
              "parent_id": 500
            },
            {
              "id": 3495,
              "name": "民雄乡",
              "parent_id": 500
            },
            {
              "id": 3496,
              "name": "溪口乡",
              "parent_id": 500
            },
            {
              "id": 3497,
              "name": "新港乡",
              "parent_id": 500
            },
            {
              "id": 3498,
              "name": "六脚乡",
              "parent_id": 500
            },
            {
              "id": 3499,
              "name": "东石乡",
              "parent_id": 500
            },
            {
              "id": 3500,
              "name": "义竹乡",
              "parent_id": 500
            },
            {
              "id": 3501,
              "name": "鹿草乡",
              "parent_id": 500
            },
            {
              "id": 3502,
              "name": "水上乡",
              "parent_id": 500
            },
            {
              "id": 3503,
              "name": "中埔乡",
              "parent_id": 500
            },
            {
              "id": 3504,
              "name": "竹崎乡",
              "parent_id": 500
            },
            {
              "id": 3505,
              "name": "梅山乡",
              "parent_id": 500
            },
            {
              "id": 3506,
              "name": "番路乡",
              "parent_id": 500
            },
            {
              "id": 3507,
              "name": "大埔乡",
              "parent_id": 500
            },
            {
              "id": 3508,
              "name": "阿里山乡",
              "parent_id": 500
            }
          ]
        },
        {
          "id": 501,
          "name": "屏东县",
          "parent_id": 32,
          "child": [
            {
              "id": 3509,
              "name": "屏东市",
              "parent_id": 501
            },
            {
              "id": 3510,
              "name": "潮州镇",
              "parent_id": 501
            },
            {
              "id": 3511,
              "name": "东港镇",
              "parent_id": 501
            },
            {
              "id": 3512,
              "name": "恒春镇",
              "parent_id": 501
            },
            {
              "id": 3513,
              "name": "万丹乡",
              "parent_id": 501
            },
            {
              "id": 3514,
              "name": "长治乡",
              "parent_id": 501
            },
            {
              "id": 3515,
              "name": "麟洛乡",
              "parent_id": 501
            },
            {
              "id": 3516,
              "name": "九如乡",
              "parent_id": 501
            },
            {
              "id": 3517,
              "name": "里港乡",
              "parent_id": 501
            },
            {
              "id": 3518,
              "name": "盐埔乡",
              "parent_id": 501
            },
            {
              "id": 3519,
              "name": "高树乡",
              "parent_id": 501
            },
            {
              "id": 3520,
              "name": "万峦乡",
              "parent_id": 501
            },
            {
              "id": 3521,
              "name": "内埔乡",
              "parent_id": 501
            },
            {
              "id": 3522,
              "name": "竹田乡",
              "parent_id": 501
            },
            {
              "id": 3523,
              "name": "新埤乡",
              "parent_id": 501
            },
            {
              "id": 3524,
              "name": "枋寮乡",
              "parent_id": 501
            },
            {
              "id": 3525,
              "name": "新园乡",
              "parent_id": 501
            },
            {
              "id": 3526,
              "name": "崁顶乡",
              "parent_id": 501
            },
            {
              "id": 3527,
              "name": "林边乡",
              "parent_id": 501
            },
            {
              "id": 3528,
              "name": "南州乡",
              "parent_id": 501
            },
            {
              "id": 3529,
              "name": "佳冬乡",
              "parent_id": 501
            },
            {
              "id": 3530,
              "name": "琉球乡",
              "parent_id": 501
            },
            {
              "id": 3531,
              "name": "车城乡",
              "parent_id": 501
            },
            {
              "id": 3532,
              "name": "满州乡",
              "parent_id": 501
            },
            {
              "id": 3533,
              "name": "枋山乡",
              "parent_id": 501
            },
            {
              "id": 3534,
              "name": "三地门乡",
              "parent_id": 501
            },
            {
              "id": 3535,
              "name": "雾台乡",
              "parent_id": 501
            },
            {
              "id": 3536,
              "name": "玛家乡",
              "parent_id": 501
            },
            {
              "id": 3537,
              "name": "泰武乡",
              "parent_id": 501
            },
            {
              "id": 3538,
              "name": "来义乡",
              "parent_id": 501
            },
            {
              "id": 3539,
              "name": "春日乡",
              "parent_id": 501
            },
            {
              "id": 3540,
              "name": "狮子乡",
              "parent_id": 501
            },
            {
              "id": 3541,
              "name": "牡丹乡",
              "parent_id": 501
            }
          ]
        },
        {
          "id": 502,
          "name": "台东县",
          "parent_id": 32,
          "child": [
            {
              "id": 3542,
              "name": "卑南乡",
              "parent_id": 502
            },
            {
              "id": 3543,
              "name": "台东市",
              "parent_id": 502
            },
            {
              "id": 3544,
              "name": "成功镇",
              "parent_id": 502
            },
            {
              "id": 3545,
              "name": "关山镇",
              "parent_id": 502
            },
            {
              "id": 3546,
              "name": "鹿野乡",
              "parent_id": 502
            },
            {
              "id": 3547,
              "name": "池上乡",
              "parent_id": 502
            },
            {
              "id": 3548,
              "name": "东河乡",
              "parent_id": 502
            },
            {
              "id": 3549,
              "name": "长滨乡",
              "parent_id": 502
            },
            {
              "id": 3550,
              "name": "太麻里乡",
              "parent_id": 502
            },
            {
              "id": 3551,
              "name": "大武乡",
              "parent_id": 502
            },
            {
              "id": 3552,
              "name": "绿岛乡",
              "parent_id": 502
            },
            {
              "id": 3553,
              "name": "海端乡",
              "parent_id": 502
            },
            {
              "id": 3554,
              "name": "延平乡",
              "parent_id": 502
            },
            {
              "id": 3555,
              "name": "金峰乡",
              "parent_id": 502
            },
            {
              "id": 3556,
              "name": "达仁乡",
              "parent_id": 502
            },
            {
              "id": 3557,
              "name": "兰屿乡",
              "parent_id": 502
            }
          ]
        },
        {
          "id": 503,
          "name": "花莲县",
          "parent_id": 32,
          "child": [
            {
              "id": 3558,
              "name": "花莲市",
              "parent_id": 503
            },
            {
              "id": 3559,
              "name": "凤林镇",
              "parent_id": 503
            },
            {
              "id": 3560,
              "name": "玉里镇",
              "parent_id": 503
            },
            {
              "id": 3561,
              "name": "新城乡",
              "parent_id": 503
            },
            {
              "id": 3562,
              "name": "吉安乡",
              "parent_id": 503
            },
            {
              "id": 3563,
              "name": "寿丰乡",
              "parent_id": 503
            },
            {
              "id": 3564,
              "name": "光复乡",
              "parent_id": 503
            },
            {
              "id": 3565,
              "name": "丰滨乡",
              "parent_id": 503
            },
            {
              "id": 3566,
              "name": "瑞穗乡",
              "parent_id": 503
            },
            {
              "id": 3567,
              "name": "富里乡",
              "parent_id": 503
            },
            {
              "id": 3568,
              "name": "秀林乡",
              "parent_id": 503
            },
            {
              "id": 3569,
              "name": "万荣乡",
              "parent_id": 503
            },
            {
              "id": 3570,
              "name": "卓溪乡",
              "parent_id": 503
            }
          ]
        },
        {
          "id": 504,
          "name": "澎湖县",
          "parent_id": 32,
          "child": [
            {
              "id": 3571,
              "name": "马公市",
              "parent_id": 504
            },
            {
              "id": 3572,
              "name": "湖西乡",
              "parent_id": 504
            },
            {
              "id": 3573,
              "name": "白沙乡",
              "parent_id": 504
            },
            {
              "id": 3574,
              "name": "西屿乡",
              "parent_id": 504
            },
            {
              "id": 3575,
              "name": "望安乡",
              "parent_id": 504
            },
            {
              "id": 3576,
              "name": "七美乡",
              "parent_id": 504
            }
          ]
        },
        {
          "id": 505,
          "name": "连江县",
          "parent_id": 32,
          "child": []
        },
        {
          "id": 506,
          "name": "金门县",
          "parent_id": 32,
          "child": []
        }
      ]
    },
    {
      "id": 33,
      "name": "香港特别行政区",
      "parent_id": 0,
      "child": [
        {
          "id": 507,
          "name": "中西区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 508,
          "name": "葵青区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 509,
          "name": "元朗区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 510,
          "name": "屯门区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 511,
          "name": "荃湾区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 512,
          "name": "西贡区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 513,
          "name": "沙田区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 514,
          "name": "大埔区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 515,
          "name": "北区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 516,
          "name": "观塘区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 517,
          "name": "黄大仙区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 518,
          "name": "深水埗区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 519,
          "name": "油尖旺区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 520,
          "name": "九龙城区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 521,
          "name": "南区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 522,
          "name": "东区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 523,
          "name": "湾仔区",
          "parent_id": 33,
          "child": []
        },
        {
          "id": 524,
          "name": "离岛区",
          "parent_id": 33,
          "child": []
        }
      ]
    },
    {
      "id": 34,
      "name": "澳门特别行政区",
      "parent_id": 0,
      "child": [
        {
          "id": 525,
          "name": "花地玛堂区",
          "parent_id": 34,
          "child": []
        },
        {
          "id": 526,
          "name": "圣安多堂区",
          "parent_id": 34,
          "child": []
        },
        {
          "id": 527,
          "name": "大堂区堂区",
          "parent_id": 34,
          "child": []
        },
        {
          "id": 528,
          "name": "望德堂区",
          "parent_id": 34,
          "child": []
        },
        {
          "id": 529,
          "name": "风顺堂区",
          "parent_id": 34,
          "child": []
        },
        {
          "id": 530,
          "name": "嘉模堂区",
          "parent_id": 34,
          "child": []
        },
        {
          "id": 531,
          "name": "圣方济各堂区",
          "parent_id": 34,
          "child": []
        },
        {
          "id": 532,
          "name": "路氹城",
          "parent_id": 34,
          "child": []
        }
      ]
    },
    {
      "id": 35,
      "name": "海外",
      "parent_id": 0,
      "child": []
    }
  ];

  constructor(public http: Http) {

  }

  //获取一级地区
  getTopLevel(){
    let result=[];
    let len=this.districts.length;
    for(let i=0;i<len;i++){
      let d=this.districts[i];
      let item={
        "id": d.id,
        "name": d.name,
        "parent_id": d.parent_id
      };
      result.push(item);
    }
    return result;
  }

  //根据id获取子级
  getChildById(id:number){
    let result=[];
    let len=this.districts.length;
    for(let i=0;i<len;i++){
      let d=this.districts[i];
      if(d.id==id){
        d.child&&(result=d.child);
        break;
      }
    }
    return result;
  }

}

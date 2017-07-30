
    function AZGridBaseCell(val) {
        this.text = val;
    }

    AZGridBaseCell.prototype.cellContent = function() {
        return "<div style='color:black'>" + this.text + "</div>"
    }

    function AZGridOptions() {
        this.highlightColor = '#F00';
        this.backgroundColor = '#FFF';
        this.odds = 0;
        this.dataGroupIndex = 0;
    }

    function generateData1(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = i + '' + j + 'XX';
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData2(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = i + 'X' + j + 'X';
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData3(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = i + 'X' + 'X' + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData4(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = 'X' + i + 'X' + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData5(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = 'X' + i + j + 'X';
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData6(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = 'X' + 'X' + i + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData7(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = 'X' + 'X' + 'X' + i + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData8(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = i + 'X' + 'X' + 'X' + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function chooseAll(index) {
        var cells = $("div[id*='-" + index + "']");
        var newChooseStatus = false;
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var isHighlight = $(cell).hasClass("header-col-highlight");
            if (!isHighlight) {
                newChooseStatus = true;
            }
        }
        if (!newChooseStatus) {
            cells.removeClass("header-col-highlight");
        } else {
            cells.addClass("header-col-highlight");
        }
    }

    function chooseHortAll(index) {
        var cells = $("div[id*='" + index + "-']");
        var newChooseStatus = false;
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var isHighlight = $(cell).hasClass("header-col-highlight");
            if (!isHighlight) {
                newChooseStatus = true;
            }
        }
        if (!newChooseStatus) {
            cells.removeClass("header-col-highlight");
        } else {
            cells.addClass("header-col-highlight");
        }
    }

    function numberCellClick(event) {
        alert("c");
    }

    function test() {
        alert('vvv');
    }

    Array.prototype.S = String.fromCharCode(2);
    Array.prototype.in_array = function(e) {
        var r = new RegExp(this.S+e+this.S);
        return (r.test(this.S+this.join(this.S)+this.S));
    }

    Array.prototype.removeByValue = function(val) {
        for(var i=0; i<this.length; i++) {
            if(this[i] == val) {
            this.splice(i, 1);
            break;
            }
        }
    }

    function AZGridControl(container, options) {
        this.quickSelectedRows1 = new Array();
        this.quickSelectedRows2 = new Array();
        this.options = options;

        var contentNode = $("<div class='container' style='border:1px solid black'></div>")
        $(container).empty();
        $(contentNode).css("background-color", options.backgroundColor);

        
        var dataGroupBar = $("<div class='row'></div>");
        var dataGroupBarCell1 = $("<div class='col-md-12'></div>");
        $(dataGroupBar).append(dataGroupBarCell1);

        $(dataGroupBarCell1).append('<span>类别</span>');
        
        for (var i = 0; i < 8; i++) {
            var dataGroupIndex = Number(i);
            var groupBar = $("<span class='data-group-item' click='changeDataGroup'><a>data" + (Number(i) + Number(1)) + "</a></span>");
            (function(index) {
                $(groupBar).click(function() {
                var newOptions = options;
                newOptions.dataGroupIndex = index;
                AZGridControl(container, newOptions);
                });
            })(dataGroupIndex);
            
            $(dataGroupBarCell1).append(groupBar);
        }
        $(contentNode).append(dataGroupBar);

        var height = 26;
        var headerItem = $("<div class='row'></div>");
        $(headerItem).append($("<div class='left-side-bar'></div>"));
        var headerRow = $("<div class='col-md-12 col-offset-20'><div class='row'></div></div>");
        for (var i = 0; i < 10; i++) {
            (function(index) {
                var cell = $("<div class='col-xs-1-10 col-sm-1-10 col-md-1-10 col-lg-1-10 header-col'> \
                            <i class='header-icon icon icon-sort-down' style='vertical-align: middle;'></i> \
                            </div>");
                cell.click(function() {
                    chooseAll(Number(index));
                });
                $(headerRow).append(cell);
            })(i);
        }
        $(headerItem).append(headerRow);
        $(contentNode).append(headerItem);

        var titleRow = $("<div class='row'></div>");
        $(titleRow).append($("<div class='left-side-bar'></div>"));
        var titleSubRow = $("<div class='col-md-12 col-offset-20'><div class='row'></div></div>");
        for (var i = 0; i < 10; i++) {
            $(titleSubRow).append($("<div class='col-xs-1-10 col-sm-1-10 col-md-1-10 col-lg-1-10 normalcell'>" +
                                "<div class='header-title'>" +
                                    "<span class='number'>号码</span>" +
                                    "<span class='odds'>赔率</span>" +
                                "</div>" +
                           "</div>"));
        }
        $(titleRow).append(titleSubRow);
        $(contentNode).append(titleRow);

        var data = null;
        switch (options.dataGroupIndex ) {
            case 0:
                data = generateData1(options.odds);
                this.quickSelectBtnRow1 = 1000; // 快速选择行1是仟位
                this.quickSelectBtnRow2 = 100; // 快速选择行1是佰位
                break;
            case 1:
                data = generateData2(options.odds);
                this.quickSelectBtnRow1 = 1000; // 快速选择行1是仟位
                this.quickSelectBtnRow2 = 10; // 快速选择行1是拾位
                break;
            case 2:
                data = generateData3(options.odds);
                this.quickSelectBtnRow1 = 1000; // 快速选择行1是仟位
                this.quickSelectBtnRow2 = 1; // 快速选择行1是个位
                break;
            case 3:
                data = generateData4(options.odds);
                this.quickSelectBtnRow1 = 100; // 快速选择行1是佰位
                this.quickSelectBtnRow2 = 1; // 快速选择行1是个位
                break;
            case 4:
                data = generateData5(options.odds);
                this.quickSelectBtnRow1 = 100; // 快速选择行1是佰位
                this.quickSelectBtnRow2 = 10; // 快速选择行1是拾位
                break;
            case 5:
                data = generateData6(options.odds);
                this.quickSelectBtnRow1 = 10; // 快速选择行1是拾位
                this.quickSelectBtnRow2 = 1; // 快速选择行1是个位
                break;
            case 6:
                data = generateData7(options.odds);
                this.quickSelectBtnRow1 = 10; // 快速选择行1是拾位
                this.quickSelectBtnRow2 = 1; // 快速选择行1是个位
                break;
            case 7:
                data = generateData8(options.odds);
                this.quickSelectBtnRow1 = 10000; // 快速选择行1是万位
                this.quickSelectBtnRow2 = 1; // 快速选择行1是个位
                break;
        }

        for (var i = 0; i < data.length; i++) {
            var rowData = data[i];
            var row = $("<div class='row'></div>");
            var leftSideBar = $("<div class='left-side-bar'><i class='icon icon-caret-right' aria-hidden='true'></i></div>");
            $(row).append(leftSideBar);
            (function(index) {
                leftSideBar.click(function() {
                        chooseHortAll(Number(index));
                });
            })(i);

            var subRow = $("<div class='col-md-12 col-offset-20'><div class='row'></div></div>");
            for (var j = 0; j < rowData.length; j++) {
                var cellData = rowData[j];
                var cell = $("<div id='numberCell" + i + "-" + j + "' class='col-xs-1-10 col-sm-1-10 col-md-1-10 col-lg-1-10 header-col'>" + 
                        "</div>");
                var cellContent = $("<div style='color:black'>" +
                        "<span class='number'>" + cellData.number + "</span>" +
                        "<span class='odds'>" + cellData.odds + "</span>" + 
                        "</div>");

                $(cell).bind("click", function(e) {
                    $(event.currentTarget).toggleClass("header-col-highlight");
                });

                $(cell).append(cellContent);
                $(subRow).append(cell);
            }
            $(row).append(subRow);
            $(contentNode).append(row);
        }

        // 添加快速选择条
        var quickSearchBarRow = $("<div class='row'></div>");
        var quickSearchLeftSideBar = $("<div class='left-side-bar'></div>");
        // $(quickSearchBarRow).append(quickSearchLeftSideBar);
        var quickSearchBarSubRow = $("<div class='col-md-12 col-offset-20'>");
        var quickSelectBar = $(
        "<div class='col-md-1 quick-search-bar' style='height:54px;verticle-align:center;text-align:center;'>定位置</div>" +
        "<div class='col-md-6 quick-search-bar'>" +
            "<div class='container'>" + 
                "<div class='row'>" +
                    "<span id='quick-select-1-tip' class='quick-select-tip'>仟</span>" +
                    "<button id='quick-select-button-1-zero' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>0</button>" +
                    "<button id='quick-select-button-1-one' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>1</button>" +
                    "<button id='quick-select-button-1-two' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>2</button>" +
                    "<button id='quick-select-button-1-three' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>3</button>" +
                    "<button id='quick-select-button-1-four' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>4</button>" +
                    "<button id='quick-select-button-1-five' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>5</button>" +
                    "<button id='quick-select-button-1-six' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>6</button>" +
                    "<button id='quick-select-button-1-seven' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>7</button>" +
                    "<button id='quick-select-button-1-eight' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>8</button>" +
                    "<button id='quick-select-button-1-nine' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>9</button>" +
                    "<button id='quick-select-button-1-single' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>单</button>" +
                    "<button id='quick-select-button-1-double' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>双</button>" +
                    "<button id='quick-select-button-1-big' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>大</button>" +
                    "<button id='quick-select-button-1-small' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>小</button>" +
                "</div>" +
                "<div class='row'>" +
                    "<span id='quick-select-2-tip' class='quick-select-tip'>佰</span>" +
                    "<button id='quick-select-button-2-zero' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>0</button>" +
                    "<button id='quick-select-button-2-one' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>1</button>" +
                    "<button id='quick-select-button-2-two' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>2</button>" +
                    "<button id='quick-select-button-2-three' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>3</button>" +
                    "<button id='quick-select-button-2-four' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>4</button>" +
                    "<button id='quick-select-button-2-five' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>5</button>" +
                    "<button id='quick-select-button-2-six' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>6</button>" +
                    "<button id='quick-select-button-2-seven' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>7</button>" +
                    "<button id='quick-select-button-2-eight' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>8</button>" +
                    "<button id='quick-select-button-2-nine' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>9</button>" +
                    "<button id='quick-select-button-2-single' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>单</button>" +
                    "<button id='quick-select-button-2-double' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>双</button>" +
                    "<button id='quick-select-button-2-big' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>大</button>" +
                    "<button id='quick-select-button-2-small' type='button' class='btnCustom btnCustom-default quick-select-button btn-xs'>小</button>" +
                "</div>" +
            "</div>" +
        "</div>" +
        "<div class='col-md-5 quick-search-bar' style='height:54px'>" +
            "<span>金额</span>" +
            "<input style='width:60px'></input>" +
            "<input type='check' title='除重'>除重</input>" +
            "<button type='button'>确定</button>" +
            "<button type='button'>取消</button>" +
        "</div>");

        $(quickSearchBarSubRow).append(quickSelectBar);
        // $(quickSearchBarSubRow).css("height", 80 + "px");
        $(quickSearchBarRow).append(quickSearchBarSubRow);
        $(contentNode).append(quickSearchBarRow);

        $(container).append(contentNode);

        if (this.options.dataGroupIndex == 7) {
            $("#quick-select-1-tip").text('首');
            $("#quick-select-2-tip").text('尾');
        } else if (this.options.dataGroupIndex == 6) {
            $("#quick-select-1-tip").text('四');
            $("#quick-select-2-tip").text('五');
        } else {
            if (this.quickSelectBtnRow1 == 1000)
                $("#quick-select-1-tip").text('仟');
            else if (this.quickSelectBtnRow1 == 100)
                $("#quick-select-1-tip").text('佰');
            else if (this.quickSelectBtnRow1 == 10)
                $("#quick-select-1-tip").text('拾');
            else if (this.quickSelectBtnRow1 == 1)
                $("#quick-select-1-tip").text('个');

            if (this.quickSelectBtnRow2 == 1000)
                $("#quick-select-2-tip").text('仟');
            else if (this.quickSelectBtnRow2 == 100)
                $("#quick-select-2-tip").text('佰');
            else if (this.quickSelectBtnRow2 == 10)
                $("#quick-select-2-tip").text('拾');
            else if (this.quickSelectBtnRow2 == 1)
                $("#quick-select-2-tip").text('个');
        }

        

        var buttons = $("button[id^='quick-select-button']");
        for (var i = 0; i < buttons.length; i++) {
            var btn = buttons[i];
            var weakThis = this;
            $(btn).bind('click', function(event) {
                if (event.currentTarget.id.indexOf("quick-select-button-2") == 0) {
                    if (weakThis.quickSelectedRows2.in_array(event.currentTarget.innerText)) {
                        weakThis.quickSelectedRows2.removeByValue(event.currentTarget.innerText);
                    } else {
                        weakThis.quickSelectedRows2.push(event.currentTarget.innerText);
                    }

                    // 更新行2的按钮状态
                    var row2Buttons = $("button[id^='quick-select-button-2']");
                    for (var j = 0; j < row2Buttons.length; j++) {
                        var btn = row2Buttons[j];
                        if (weakThis.quickSelectedRows2.in_array(btn.innerText)) {
                            $(btn).addClass("quick-select-button-highlight");
                        } else {
                            $(btn).removeClass("quick-select-button-highlight");
                        }
                    }
                } else if (event.currentTarget.id.indexOf("quick-select-button-1") == 0) {
                    if (weakThis.quickSelectedRows1.in_array(event.currentTarget.innerText)) {
                        weakThis.quickSelectedRows1.removeByValue(event.currentTarget.innerText);
                    } else {
                        weakThis.quickSelectedRows1.push(event.currentTarget.innerText);
                    }

                    // 更新行1的按钮状态
                    var row1Buttons = $("button[id^='quick-select-button-1']");
                    for (var j = 0; j < row1Buttons.length; j++) {
                        var btn = row1Buttons[j];
                        if (weakThis.quickSelectedRows1.in_array(btn.innerText)) {
                            $(btn).addClass("quick-select-button-highlight");
                        } else {
                            $(btn).removeClass("quick-select-button-highlight");
                        }
                    }
                }

                // 将界面上所有符合条件的高亮，其他的则去除高亮
                var setCellHighlightedWithValue = function(innerTexts) {

                }

                var generateTextWithCondition = function(val) {
                    var results = new Array();
                    if (val == '单') {
                        for (var i = 1; i <= 9; i += 2) {
                            results.push(i);
                        }
                    } else if (val == '双') {
                        for (var i = 0; i <= 8; i += 2) {
                            results.push(i);
                        }
                    } else if (val == '大') {
                        for (var i = 5; i <= 9; i++) {
                            results.push(i);
                        }
                    } else if (val == '小') {
                        for (var i = 0; i <= 4; i++) {
                            results.push(i);
                        }
                    } else {
                        results.push(val);
                    }

                    return results;
                }

                var replaceChat = function (source,pos,newChar){  
                    if(pos<0||pos>=source.length||source.length==0){  
                        return "invalid parameters...";  
                    }  
                    var iBeginPos= 0, iEndPos=source.length;  
                    var sFrontPart=source.substr(iBeginPos,pos);  
                    var sTailPart=source.substr(pos+1,source.length);  
                    var sRet=sFrontPart+newChar+sTailPart;  
                    return sRet;  
                }  

                var cells = $("div[id^='numberCell']");
                $(cells).removeClass('header-col-highlight');
                var innerTexts = new Array();
                for (var k = 0; k < weakThis.quickSelectedRows1.length; k++) {
                    var row1Val = weakThis.quickSelectedRows1[k];
                    for (var l = 0; l < weakThis.quickSelectedRows2.length; l++) {
                        var row2Val = weakThis.quickSelectedRows2[l];
                        
                        var adjustVal1s = generateTextWithCondition(row1Val);
                        var adjustVal2s = generateTextWithCondition(row2Val);

                        
                        for (var m = 0; m < adjustVal1s.length; m++) {
                            var v1 = adjustVal1s[m];
                            for (var n = 0; n < adjustVal2s.length; n++) {
                                var v2 = adjustVal2s[n];
                                var txt = '';
                                if (weakThis.options.dataGroupIndex != 6 && 
                                    weakThis.options.dataGroupIndex != 7) {
                                    txt = 'XXXX';
                                        if (weakThis.quickSelectBtnRow1 == 1000) {
                                        txt = replaceChat(txt, 0, v1);
                                    } else if (weakThis.quickSelectBtnRow1 == 100) {
                                        txt = replaceChat(txt, 1, v1);
                                    } else if (weakThis.quickSelectBtnRow1 == 10) {
                                        txt = replaceChat(txt, 2, v1);
                                    } else if (weakThis.quickSelectBtnRow1 == 1) {
                                        txt = replaceChat(txt, 3, v1);
                                    }

                                    if (weakThis.quickSelectBtnRow2 == 1000) {
                                        txt = replaceChat(txt, 0, v2);
                                    } else if (weakThis.quickSelectBtnRow2 == 100) {
                                        txt = replaceChat(txt, 1, v2);
                                    } else if (weakThis.quickSelectBtnRow2 == 10) {
                                        txt = replaceChat(txt, 2, v2);
                                    } else if (weakThis.quickSelectBtnRow2 == 1) {
                                        txt = replaceChat(txt, 3, v2);
                                    }
                                } else {
                                    txt = 'XXXXX';
                                    if (weakThis.quickSelectBtnRow1 == 10000) {
                                        txt = replaceChat(txt, 0, v1);
                                    } else if (weakThis.quickSelectBtnRow1 == 1000) {
                                        txt = replaceChat(txt, 1, v1);
                                    } else if (weakThis.quickSelectBtnRow1 == 100) {
                                        txt = replaceChat(txt, 2, v1);
                                    } else if (weakThis.quickSelectBtnRow1 == 10) {
                                        txt = replaceChat(txt, 3, v1);
                                    } else if (weakThis.quickSelectBtnRow1 == 1) {
                                        txt = replaceChat(txt, 4, v1);
                                    }

                                    if (weakThis.quickSelectBtnRow2 == 10000) {
                                        txt = replaceChat(txt, 0, v2);
                                    } else if (weakThis.quickSelectBtnRow2 == 1000) {
                                        txt = replaceChat(txt, 1, v2);
                                    } else if (weakThis.quickSelectBtnRow2 == 100) {
                                        txt = replaceChat(txt, 2, v2);
                                    } else if (weakThis.quickSelectBtnRow2 == 10) {
                                        txt = replaceChat(txt, 3, v2);
                                    } else if (weakThis.quickSelectBtnRow2 == 1) {
                                        txt = replaceChat(txt, 4, v2);
                                    }
                                }

                                innerTexts.push(txt);
                            }
                        }
                    }
                }  
                
                for (var p = 0; p < innerTexts.length; p++) {
                    var spanItem = $('span:contains("' + innerTexts[p] + '")');
                    if (spanItem != undefined) {
                        var c =  $(spanItem).parent().parent();
                        var isHighlight = $(c).hasClass("header-col-highlight");
                        if (!isHighlight)
                            $(c).addClass('header-col-highlight');
                    }
                }
            });
        }
    }

    AZGridControl.prototype.setHightlightColor = function(color) {
        this.color = color;
    };

    AZGridControl.prototype.generateData1 = function(odds) {
        var data = new Array;
        for (var i = 0; i < 10; i++) {
            var tmp = new Array;
            for (var j = 0; j < 10; j ++) {
                tmp[0].number = i + '' + j + 'XX';
                tmp[0].odds = odds;
            }
            data[i] = tmp;
        }

        return data;
    };

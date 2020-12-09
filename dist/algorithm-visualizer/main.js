(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/R0n":
/*!******************************************!*\
  !*** ./src/app/shared/algorithm.enum.ts ***!
  \******************************************/
/*! exports provided: AlgorithmEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmEnum", function() { return AlgorithmEnum; });
var AlgorithmEnum;
(function (AlgorithmEnum) {
    AlgorithmEnum["SELECTED_ALGORITHM"] = "Algorithms";
    AlgorithmEnum["BUBBLE"] = "Bubble Sort";
    AlgorithmEnum["NAIVE"] = "Naive";
    AlgorithmEnum["KMP"] = "Knuth-Morris-Pratt";
    AlgorithmEnum["BM"] = "Boyer-Moore";
    AlgorithmEnum["RK"] = "Rabin-Karp";
    AlgorithmEnum["TWSM"] = "Two-way String Matching";
    // RED_BAR = 'Selected Index',
    // ORANGE_BAR = 'Pivot Index',
    // GREEN_BAR = 'Swapped Values'
})(AlgorithmEnum || (AlgorithmEnum = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/codespace/workspace/string-matching-algo/src/main.ts */"zUnb");


/***/ }),

/***/ "6Mwx":
/*!****************************************************************!*\
  !*** ./src/app/algorithm-visualizer/algorithms/bubble-sort.ts ***!
  \****************************************************************/
/*! exports provided: BubbleSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleSort", function() { return BubbleSort; });
class BubbleSort {
    constructor(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    bubbleSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                this.animations.push({ leftIndex: null, rightIndex: null, index: j });
                if (array[j].value > array[j + 1].value) {
                    this.animations.push({ leftIndex: j, rightIndex: j + 1, index: null });
                    this.arrService.swap(array, j, j + 1);
                }
            }
        }
    }
    bubbleSortAnimation() {
        this.arrService.sortingAnimationsMax = this.animations.length;
        const timer = setInterval(() => {
            const action = this.animations.shift();
            this.arrService.sortingAnimationsLeft = this.animations.length;
            if (action) {
                this.arrService.numbers.map((num) => (num.colour = this.arrService.$primaryBars));
                if (action.index != null) {
                    this.arrService.numbers[action.index].colour = this.arrService.$selectedIndex;
                }
                else {
                    this.arrService.numbers[action.leftIndex].colour = this.arrService.$swappedIndex;
                    this.arrService.numbers[action.rightIndex].colour = this.arrService.$swappedIndex;
                    this.arrService.swap(this.arrService.numbers, action.leftIndex, action.rightIndex);
                }
            }
            else {
                clearInterval(timer);
                if (this.arrService.isArraySorted(this.arrService.numbers)) {
                    this.arrService.animateSortedArray();
                    this.arrService.sorting = false;
                }
            }
        }, this.arrService.animationSpeed);
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ru8x":
/*!******************************************!*\
  !*** ./src/app/shared/arrays.service.ts ***!
  \******************************************/
/*! exports provided: ArraysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraysService", function() { return ArraysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ArraysService {
    constructor() {
        this.arrayLength = 10;
        this.animationSpeed = 0;
        this.barWidth = 32;
        this.sorting = false;
        this.isSorted = false;
        this.isPaused = false;
        this.$primaryBars = '#0F5257';
        this.$finishedBars = '#9C92A3';
        this.$selectedIndex = 'red';
        this.$swappedIndex = 'green';
        this.$targetIndex = 'orange';
        this.completedAnimation = []; // Iterating the array once last time, to show it is completed
    }
    resetArray() {
        this.numbers = [];
        for (let i = 0; i < this.arrayLength; i++) {
            const randInt = this.randomInteger(20, 200);
            this.numbers.push({ value: randInt, colour: this.$primaryBars, width: this.barWidth });
        }
        this.sortingAnimationsMax = this.sortingAnimationsLeft = this.numbers.length;
        this.isSorted = this.sorting = false;
    }
    resetArrayNoDups() {
        this.numbers = [];
        let i = 0;
        while (i++ < this.arrayLength) {
            const randInt = this.randomInteger(20, 200);
            const foundDuplicates = this.numbers.filter((row) => row.value === randInt);
            if (foundDuplicates.length > 0)
                continue;
            this.numbers.push({ value: randInt, colour: this.$primaryBars, width: this.barWidth });
        }
        this.sortingAnimationsMax = this.sortingAnimationsLeft = this.numbers.length;
        this.isSorted = this.sorting = false;
    }
    randomInteger(min, max) {
        //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    swap(arr, left, right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    sortArray() {
        this.numbers.sort((a, b) => a.value - b.value);
    }
    isArraySorted(array) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i].value > array[i + 1].value) {
                return false;
            }
            this.completedAnimation.push({ index: i });
        }
        this.completedAnimation.push({ index: array.length - 1 }); // Append last index
        this.isSorted = true;
        return true;
    }
    animateSortedArray() {
        const timer = setInterval(() => {
            const action = this.completedAnimation.shift();
            if (action) {
                this.numbers[action.index].colour = this.$finishedBars;
            }
            else {
                clearInterval(timer);
            }
        }, 20);
    }
    setBarWidth() {
        const arrSize = this.arrayLength;
        if (arrSize < 20)
            return this.barWidth = 32;
        if (arrSize >= 20 && arrSize < 30)
            return this.barWidth = 22;
        if (arrSize >= 30 && arrSize < 40)
            return this.barWidth = 18;
        if (arrSize >= 40 && arrSize < 50)
            return this.barWidth = 16;
        if (arrSize >= 50 && arrSize < 60)
            return this.barWidth = 12;
        if (arrSize >= 60 && arrSize < 70)
            return this.barWidth = 10;
        if (arrSize >= 70 && arrSize < 80)
            return this.barWidth = 8;
        if (arrSize >= 80 && arrSize < 90)
            return this.barWidth = 6;
        if (arrSize >= 90 && arrSize < 120)
            return this.barWidth = 5;
        if (arrSize >= 120 && arrSize < 150)
            return this.barWidth = 4;
        if (arrSize >= 150 && arrSize < 180)
            return this.barWidth = 3;
        if (arrSize >= 190)
            return this.barWidth = 2;
    }
    formatLabel(value) {
        value /= 1000;
        if (value.toString().length > 1)
            return value.toString().substring(0, 4) + 's';
        return value + 's';
    }
}
ArraysService.ɵfac = function ArraysService_Factory(t) { return new (t || ArraysService)(); };
ArraysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArraysService, factory: ArraysService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArraysService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() {
        this.title = 'algorithm-visualizer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Z/Mt":
/*!************************************************************************!*\
  !*** ./src/app/algorithm-visualizer/algorithm-visualizer.component.ts ***!
  \************************************************************************/
/*! exports provided: AlgorithmVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmVisualizerComponent", function() { return AlgorithmVisualizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/algorithm.enum */ "/R0n");
/* harmony import */ var _algorithms_bubble_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/bubble-sort */ "6Mwx");
/* harmony import */ var _algorithms_NaiveSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/NaiveSearch */ "bxY4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_arrays_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/arrays.service */ "Ru8x");
/* harmony import */ var _shared_string_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/string.service */ "s8vG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
















function AlgorithmVisualizerComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.displayInfo(ctx_r3.algoEnum.BUBBLE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.displayInfo(ctx_r5.algoEnum.NAIVE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.displayInfo(ctx_r6.algoEnum.KMP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.displayInfo(ctx_r7.algoEnum.BM); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.displayInfo(ctx_r8.algoEnum.RK); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.displayInfo(ctx_r9.algoEnum.TWSM); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.BUBBLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.NAIVE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.KMP);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.BM);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.RK);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.TWSM);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function AlgorithmVisualizerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, letter_r10.colour));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", letter_r10.character, " ");
} }
function AlgorithmVisualizerComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, letter_r11.colour));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", letter_r11.character, " ");
} }
class AlgorithmVisualizerComponent {
    constructor(arrService, stringService) {
        this.arrService = arrService;
        this.stringService = stringService;
        this.selectedAlgorithm = _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_2__["AlgorithmEnum"].NAIVE;
        this.inputs = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            needle: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.stringService.needle),
            stack: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.stringService.stack),
        });
    }
    ngOnInit() {
        // this.arrService.resetArray();
        this.stringService;
    }
    resetArray() {
        // this.arrService.resetArray();
    }
    updateStrings() {
        this.stringService.needle = this.inputs.get('needle').value;
        this.stringService.stack = this.inputs.get('stack').value;
        this.stringService.createStringsArrays();
    }
    pitchSize(event) {
        this.arrService.arrayLength = event.value;
        this.arrService.setBarWidth();
        this.arrService.resetArray();
    }
    pitchSpeed(event) {
        this.stringService.animationSpeed = event.value;
    }
    displayInfo(pickedAlgo) {
        this.selectedAlgorithm = pickedAlgo;
    }
    startSorting() {
        this.stringService.isSorting = true;
        if (this.selectedAlgorithm === _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_2__["AlgorithmEnum"].BUBBLE) {
            this.bubbleSort();
        }
        if (this.selectedAlgorithm === _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_2__["AlgorithmEnum"].NAIVE) {
            this.naiveSearch();
        }
    }
    bubbleSort() {
        const bs = new _algorithms_bubble_sort__WEBPACK_IMPORTED_MODULE_3__["BubbleSort"](this.arrService);
        const numbersCopy = [...this.arrService.numbers];
        bs.bubbleSort(numbersCopy);
        bs.bubbleSortAnimation();
    }
    naiveSearch() {
        const ns = new _algorithms_NaiveSearch__WEBPACK_IMPORTED_MODULE_4__["NaiveSearch"](this.stringService);
        let needleCopy = [...this.stringService.needleArr];
        let stackCopy = [...this.stringService.stackArr];
        ns.naiveSearch(stackCopy, needleCopy);
        ns.naiveSearchAnimation();
    }
}
AlgorithmVisualizerComponent.ɵfac = function AlgorithmVisualizerComponent_Factory(t) { return new (t || AlgorithmVisualizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_arrays_service__WEBPACK_IMPORTED_MODULE_6__["ArraysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_string_service__WEBPACK_IMPORTED_MODULE_7__["StringService"])); };
AlgorithmVisualizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlgorithmVisualizerComponent, selectors: [["app-algorithm-visualizer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"],
                useValue: { isAnimated: true, autoClose: true },
            },
        ])], decls: 27, vars: 13, consts: [[1, "array-container"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["dropdown", "", 1, "btn-group", 3, "insideClick"], ["id", "button-animated", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-animated", 1, "btn", "btn-primary", "dropdown-toggle", 3, "disabled"], [1, "caret"], ["id", "dropdown-animated", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["thumbLabel", "", "tickInterval", "auto", "min", "4", "max", "200", 3, "disabled", "value", "input"], ["id", "speedSlider", "thumbLabel", "", "tickInterval", "auto", "min", "0", "max", "1000", 3, "disabled", "displayWith", "value", "input"], [1, "container-fluid"], [1, "row"], [1, "array-container", "col-12"], [1, "example-form", 3, "formGroup", "keyup"], [1, "inputField"], ["formControlName", "needle", "matInput", "", "placeholder", "Needle", "value", "ABC"], ["formControlName", "stack", "matInput", "", "placeholder", "Haystack", "value", "ABCDE"], ["class", "array-body array-bar", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], [1, "array-body", "array-bar", 3, "ngStyle"]], template: function AlgorithmVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_Template_button_click_1_listener() { return ctx.resetArray(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Generate New String ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlgorithmVisualizerComponent_ul_7_Template, 14, 6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_Template_button_click_8_listener() { return ctx.startSorting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "String Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AlgorithmVisualizerComponent_Template_mat_slider_input_12_listener($event) { return ctx.pitchSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Iteration Speed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AlgorithmVisualizerComponent_Template_mat_slider_input_15_listener($event) { return ctx.pitchSpeed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AlgorithmVisualizerComponent_Template_form_keyup_19_listener() { return ctx.updateStrings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AlgorithmVisualizerComponent_div_24_Template, 2, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AlgorithmVisualizerComponent_div_26_Template, 2, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.stringService.isSorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("insideClick", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.stringService.isSorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedAlgorithm, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.stringService.isSorting || ctx.stringService.isSorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.arrService.arrayLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.stringService.isSorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.stringService.animationSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.stringService.isSorting)("displayWith", ctx.arrService.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stringService.stackArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stringService.needleArr);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownMenuDirective"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"]], styles: [".inputField[_ngcontent-%COMP%] {\n  height: 10px;\n  margin: 10px 10px 30px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXZpc3VhbGl6ZXIvYWxnb3JpdGhtLXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS12aXN1YWxpemVyL2FsZ29yaXRobS12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXRGaWVsZCB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDMwcHggMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgorithmVisualizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-algorithm-visualizer',
                templateUrl: './algorithm-visualizer.component.html',
                styleUrls: ['./algorithm-visualizer.component.scss'],
                providers: [
                    {
                        provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"],
                        useValue: { isAnimated: true, autoClose: true },
                    },
                ],
            }]
    }], function () { return [{ type: _shared_arrays_service__WEBPACK_IMPORTED_MODULE_6__["ArraysService"] }, { type: _shared_string_service__WEBPACK_IMPORTED_MODULE_7__["StringService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _algorithm_visualizer_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./algorithm-visualizer/algorithm-visualizer.component */ "Z/Mt");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "38Bd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");


















const routes = [
    { path: 'algorithm', component: _algorithm_visualizer_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_7__["AlgorithmVisualizerComponent"] },
    { path: '', redirectTo: '/algorithm', pathMatch: 'full' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _algorithm_visualizer_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_7__["AlgorithmVisualizerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _algorithm_visualizer_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_7__["AlgorithmVisualizerComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bxY4":
/*!****************************************************************!*\
  !*** ./src/app/algorithm-visualizer/algorithms/NaiveSearch.ts ***!
  \****************************************************************/
/*! exports provided: NaiveSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaiveSearch", function() { return NaiveSearch; });
class NaiveSearch {
    constructor(stringService) {
        this.stringService = stringService;
        this.animations = [];
    }
    naiveSearch(stack, needle) {
        for (let i = 0; i <= stack.length - needle.length; i++) {
            let j = 0;
            for (j; j < needle.length; j++) {
                if (stack[i + j].character != needle[j].character) {
                    this.animations.push({ isMatch: false, stackIndex: i, needleIndex: j });
                    break;
                }
                else {
                    this.animations.push({ isMatch: true, stackIndex: i, needleIndex: j });
                }
            }
            if (j == needle.length) {
                console.log('match found! At index: ', i);
            }
        }
    }
    naiveSearchAnimation() {
        let resetToWhite = false;
        const timer = setInterval(() => {
            const action = this.animations.shift();
            if (action) {
                if (resetToWhite) {
                    this.setToWhite();
                    resetToWhite = false;
                }
                if (action.isMatch) {
                    this.stringService.needleArr[action.needleIndex].colour = '#b2ff59';
                    this.stringService.stackArr[action.stackIndex + action.needleIndex].colour = '#b2ff59';
                    if (action.needleIndex == this.stringService.needleArr.length - 1) {
                        resetToWhite = true;
                    }
                }
                else {
                    this.stringService.needleArr[action.needleIndex].colour = 'red';
                    this.stringService.stackArr[action.stackIndex + action.needleIndex].colour = 'red';
                    resetToWhite = true;
                }
            }
            else {
                clearInterval(timer);
                this.stringService.isSorting = false;
                this.setToWhite();
            }
        }, this.stringService.animationSpeed);
    }
    setToWhite() {
        this.stringService.stackArr.map((chr) => (chr.colour = 'white'));
        this.stringService.needleArr.map((chr) => (chr.colour = 'white'));
    }
}


/***/ }),

/***/ "s8vG":
/*!******************************************!*\
  !*** ./src/app/shared/string.service.ts ***!
  \******************************************/
/*! exports provided: StringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringService", function() { return StringService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class StringService {
    constructor() {
        this.isSorting = false;
        this.animationSpeed = 1000;
        this.reset();
        this.createStringsArrays();
    }
    reset() {
        [this.stack, this.needle, this.stackArr, this.needleArr] = ['ABCDE', 'ABC', [], []];
    }
    createStringsArrays() {
        let splitStack = this.stack.split(''); // Will always be unchanged!
        let splitNeedle = this.needle.split('');
        this.stackArr = [];
        this.needleArr = [];
        for (let i = 0; i < splitStack.length; i++) {
            this.stackArr.push({ character: splitStack[i], colour: 'white', index: i });
        }
        for (let i = 0; i < splitNeedle.length; i++) {
            this.needleArr.push({ character: splitNeedle[i], colour: 'white', index: i });
        }
    }
}
StringService.ɵfac = function StringService_Factory(t) { return new (t || StringService)(); };
StringService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StringService, factory: StringService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StringService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+EF1":
/*!******************************************************!*\
  !*** ./src/app/binary-tree/binary-tree.component.ts ***!
  \******************************************************/
/*! exports provided: BinaryTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryTreeComponent", function() { return BinaryTreeComponent; });
/* harmony import */ var _algorithms_postorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/postorder */ "45s0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _algorithms_preorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/preorder */ "U+aZ");
/* harmony import */ var _algorithms_inorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/inorder */ "UiAC");
/* harmony import */ var _shared_tree_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tree.enum */ "EOJO");
/* harmony import */ var _shared_binary_tree_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/binary-tree.service */ "O9c7");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = ["canvas"];
function BinaryTreeComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BinaryTreeComponent_ul_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.displayInfo(ctx_r3.treeEnum.PRE_ORDER); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BinaryTreeComponent_ul_7_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.displayInfo(ctx_r5.treeEnum.IN_ORDER); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BinaryTreeComponent_ul_7_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.displayInfo(ctx_r6.treeEnum.POST_ORDER); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BinaryTreeComponent_ul_7_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.displayInfo(ctx_r7.treeEnum.BFS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.treeEnum.PRE_ORDER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.treeEnum.IN_ORDER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.treeEnum.POST_ORDER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.treeEnum.BFS);
} }
function BinaryTreeComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[", node_r8.data, "] ");
} }
class BinaryTreeComponent {
    constructor(binTreeService) {
        this.binTreeService = binTreeService;
        this.treeEnum = _shared_tree_enum__WEBPACK_IMPORTED_MODULE_4__["TreeEnum"];
        this.selectedAlgorithm = _shared_tree_enum__WEBPACK_IMPORTED_MODULE_4__["TreeEnum"].PRE_ORDER;
        this.nodes = [];
        this.visitedNodes = [];
        this.root = null;
        this.pitchSpeed = (event) => this.binTreeService.animationSpeed = event.value;
        this.clearCanvas = () => this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }
    ngOnInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.initBinaryTree();
    }
    initBinaryTree() {
        this.clearCanvas();
        this.root = this.binTreeService.initTree();
        this.createNodes(this.root);
        this.displayNodes();
    }
    resetNodes() {
        this.visitedNodes = [];
        this.binTreeService.generateNewNodes();
        this.initBinaryTree();
    }
    displayInfo(selectedTraversal) {
        this.selectedAlgorithm = selectedTraversal;
    }
    pitchSize(event) {
        this.binTreeService.nodeAmount = event.value;
        this.resetNodes();
    }
    startSorting() {
        if (this.selectedAlgorithm == _shared_tree_enum__WEBPACK_IMPORTED_MODULE_4__["TreeEnum"].PRE_ORDER)
            this.preOrder();
        if (this.selectedAlgorithm == _shared_tree_enum__WEBPACK_IMPORTED_MODULE_4__["TreeEnum"].IN_ORDER)
            this.inOrder();
        if (this.selectedAlgorithm == _shared_tree_enum__WEBPACK_IMPORTED_MODULE_4__["TreeEnum"].POST_ORDER)
            this.postOrder();
    }
    preOrder() {
        const obj = new _algorithms_preorder__WEBPACK_IMPORTED_MODULE_2__["PreOrder"](this.binTreeService, this.ctx, this.canvas, this.visitedNodes);
        obj.preOrderTraversal(this.root);
    }
    inOrder() {
        const obj = new _algorithms_inorder__WEBPACK_IMPORTED_MODULE_3__["InOrder"](this.binTreeService, this.ctx, this.canvas, this.visitedNodes);
        obj.inOrderTraversal(this.root);
    }
    postOrder() {
        const obj = new _algorithms_postorder__WEBPACK_IMPORTED_MODULE_0__["PostOrder"](this.binTreeService, this.ctx, this.canvas, this.visitedNodes);
        obj.postOrderTraversal(this.root);
    }
    displayNodes() {
        this.binTreeService.nodes.forEach((node) => {
            this.highlightNode(node);
        });
    }
    highlightNode(node) {
        // create nodes 
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = node.colour;
        // this.ctx.strokeStyle = 'blue';
        this.ctx.arc(node.xAxis, node.yAxis, 30, 0, 90);
        this.ctx.stroke();
        this.ctx.fill();
        // fill node data/style
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'black';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(node.data.toString(), node.xAxis, node.yAxis + 10);
    }
    createNodes(root) {
        let stack = []; // dfs
        root.xAxis = 400;
        root.yAxis = 50;
        stack.push(root);
        while (stack.length > 0) {
            let pop = stack.pop();
            if (pop != null) {
                let xAxis = pop.level === 0 ? 150 : 75;
                if (pop.right) {
                    pop.right.xAxis = pop.xAxis + xAxis;
                    pop.right.yAxis = pop.yAxis + 75;
                    this.setLines(pop, pop.right);
                }
                if (pop.left) {
                    pop.left.xAxis = pop.xAxis - xAxis;
                    pop.left.yAxis = pop.yAxis + 75;
                    this.setLines(pop, pop.left);
                }
                stack.push(pop.right);
                stack.push(pop.left);
            }
        }
    }
    setLines(parentNode, childNode) {
        // set lines
        this.ctx.beginPath(); // Reset the current path
        this.ctx.lineWidth = 1;
        this.ctx.moveTo(childNode.xAxis, childNode.yAxis); // Staring point
        this.ctx.lineTo(parentNode.xAxis, parentNode.yAxis); // End point
        this.ctx.stroke(); // Make the line visible
    }
}
BinaryTreeComponent.ɵfac = function BinaryTreeComponent_Factory(t) { return new (t || BinaryTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_binary_tree_service__WEBPACK_IMPORTED_MODULE_5__["BinaryTreeService"])); };
BinaryTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BinaryTreeComponent, selectors: [["app-binary-tree"]], viewQuery: function BinaryTreeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 22, vars: 5, consts: [[1, "array-container"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["dropdown", "", 1, "btn-group", 3, "insideClick"], ["id", "button-animated", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-animated", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-animated", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["thumbLabel", "", "tickInterval", "auto", "min", "4", "max", "30", 3, "value", "input"], ["id", "speedSlider", "thumbLabel", "", "tickInterval", "auto", "min", "0", "max", "1000", 3, "value", "input"], [4, "ngFor", "ngForOf"], ["width", "1000", "height", "1000"], ["canvas", ""], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"]], template: function BinaryTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BinaryTreeComponent_Template_button_click_1_listener() { return ctx.resetNodes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Generate New Array ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BinaryTreeComponent_ul_7_Template, 13, 4, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BinaryTreeComponent_Template_button_click_8_listener() { return ctx.startSorting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Traverse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Array Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function BinaryTreeComponent_Template_mat_slider_input_12_listener($event) { return ctx.pitchSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Iteration Speed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function BinaryTreeComponent_Template_mat_slider_input_15_listener($event) { return ctx.pitchSpeed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Github CodeSpace");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, BinaryTreeComponent_span_19_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "canvas", 10, 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("insideClick", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedAlgorithm, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.binTreeService.nodeAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.binTreeService.animationSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.visitedNodes);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownMenuDirective"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbmFyeS10cmVlL2JpbmFyeS10cmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BinaryTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-binary-tree',
                templateUrl: './binary-tree.component.html',
                styleUrls: ['./binary-tree.component.scss']
            }]
    }], function () { return [{ type: _shared_binary_tree_service__WEBPACK_IMPORTED_MODULE_5__["BinaryTreeService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas', { static: true }]
        }] }); })();


/***/ }),

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
    AlgorithmEnum["INSERTION"] = "Insertion Sort";
    AlgorithmEnum["MERGE"] = "Merge Sort";
    AlgorithmEnum["QUICK"] = "Quick Sort";
    AlgorithmEnum["LINEAR"] = "Linear Search";
    AlgorithmEnum["BINARY"] = "Binary Search";
    AlgorithmEnum["RED_BAR"] = "Selected Index";
    AlgorithmEnum["ORANGE_BAR"] = "Pivot Index";
    AlgorithmEnum["GREEN_BAR"] = "Swapped Values";
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

/***/ "45s0":
/*!*****************************************************!*\
  !*** ./src/app/binary-tree/algorithms/postorder.ts ***!
  \*****************************************************/
/*! exports provided: PostOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostOrder", function() { return PostOrder; });
/* harmony import */ var _shared_colours_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/colours.enum */ "cb/x");

class PostOrder {
    constructor(treeService, ctx, canvas, visitedNodes) {
        this.treeService = treeService;
        this.animationNodes = [];
        this.visitedNodes = [];
        this.coloursEnum = _shared_colours_enum__WEBPACK_IMPORTED_MODULE_0__["Colours"];
        this.ctx = ctx;
        this.canvas = canvas;
        this.visitedNodes = visitedNodes;
    }
    postOrderTraversal(root) {
        let stack = [];
        stack.push(root);
        while (stack.length > 0) {
            let pop = stack.pop();
            if (pop) {
                stack.push(pop.left);
                stack.push(pop.right);
                this.animationNodes.unshift(pop);
            }
        }
        this.postOrderAnimation();
    }
    postOrderAnimation() {
        let timer = setInterval(() => {
            let action = this.animationNodes.shift();
            if (action) {
                this.treeService.nodes.forEach((node) => {
                    if (this.animationNodes.length <= 0) {
                        node.colour = 'green';
                        this.highlightNode(node);
                    }
                    else if (node.data === action.data) {
                        node.colour = this.coloursEnum.SELECTED;
                        this.highlightNode(node);
                        this.visitedNodes.push(node);
                    }
                    else if (this.visitedNodes.includes(node)) {
                        node.colour = 'green';
                        this.highlightNode(node);
                    }
                    else {
                        node.colour = 'white';
                        this.highlightNode(node);
                    }
                });
            }
            else {
                clearInterval(timer);
            }
        }, this.treeService.animationSpeed);
    }
    highlightNode(node) {
        // create nodes 
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = node.colour;
        // this.ctx.strokeStyle = 'blue';
        this.ctx.arc(node.xAxis, node.yAxis, 30, 0, 90);
        this.ctx.stroke();
        this.ctx.fill();
        // fill node data/style
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'black';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(node.data.toString(), node.xAxis, node.yAxis + 10);
    }
}


/***/ }),

/***/ "5nc0":
/*!******************************************************************!*\
  !*** ./src/app/searching-algorithms/algorithms/binary-search.ts ***!
  \******************************************************************/
/*! exports provided: BinarySearch, AnimationValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinarySearch", function() { return BinarySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationValues", function() { return AnimationValues; });
class BinarySearch {
    constructor(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    // param = [arr];
    binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + (right - left) / 2));
            this.animations.push({ selectedIndex: mid, disabledIndexs: null });
            if (arr[mid].value === target) {
                this.animations.push({ selectedIndex: mid, disabledIndexs: null });
                return mid;
            }
            if (arr[mid].value < target) { // Values is on the right side, ignore the left side
                this.animations.push({ selectedIndex: null, disabledIndexs: this.getIndexRange(left, mid) });
                left = mid + 1;
            }
            else {
                this.animations.push({ selectedIndex: null, disabledIndexs: this.getIndexRange(mid, right) });
                right = mid - 1;
            }
        }
        console.log('cannot find target');
        return -1; // Cannot find target
    }
    getIndexRange(left, right) {
        const indexes = [];
        for (let i = left; i <= right; i++)
            indexes.push(i);
        return indexes;
    }
    binarySearchAnimation() {
        this.arrService.sortingAnimationsMax = this.animations.length;
        const timer = setInterval(() => {
            const action = this.animations.shift();
            this.arrService.sortingAnimationsLeft = this.animations.length;
            if (action) {
                if (action.selectedIndex && this.animations.length === 0) // Last index, animation is finished
                    this.arrService.numbers[action.selectedIndex].colour = this.arrService.$finishedBars;
                else if (action.selectedIndex)
                    this.arrService.numbers[action.selectedIndex].colour = this.arrService.$selectedIndex;
                else
                    action.disabledIndexs.map((num) => this.arrService.numbers[num].colour = '#DCDCDC');
            }
            else {
                clearInterval(timer);
                if (this.arrService.isArraySorted(this.arrService.numbers))
                    this.arrService.sorting = false;
            }
        }, this.arrService.animationSpeed);
    }
}
class AnimationValues {
}


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

/***/ "EOJO":
/*!*************************************!*\
  !*** ./src/app/shared/tree.enum.ts ***!
  \*************************************/
/*! exports provided: TreeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeEnum", function() { return TreeEnum; });
var TreeEnum;
(function (TreeEnum) {
    TreeEnum["SELECTED_ALGORITHM"] = "Algorithms";
    TreeEnum["PRE_ORDER"] = "Preorder";
    TreeEnum["IN_ORDER"] = "Inorder";
    TreeEnum["POST_ORDER"] = "Postorder";
    TreeEnum["BFS"] = "Breadth First Search";
})(TreeEnum || (TreeEnum = {}));


/***/ }),

/***/ "FA2c":
/*!***************************************************************!*\
  !*** ./src/app/algorithm-visualizer/algorithms/quick-sort.ts ***!
  \***************************************************************/
/*! exports provided: QuickSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSort", function() { return QuickSort; });
class QuickSort {
    constructor(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    quickSort(arr) {
        // Edge case:
        /*
        If the array is already sorted, then we do not need to perform quicksort.
        The reason this check is needed, is because quicksort will still be performed
        on the sorted array, thus making the time complexity o(N^2), but by performing
        a simple o(N) check condition, we can then get the average case: o(n log(n))
        */
        if (this.arrService.isArraySorted(arr))
            return;
        else
            this.sort(arr, 0, arr.length - 1);
    }
    sort(arr, left, right) {
        if (left < right) {
            // partitioning index, arr[pi] correct place?
            let pi = this.partition(arr, left, right);
            // Recursively sort elements before/after partition
            this.sort(arr, left, pi - 1);
            this.sort(arr, pi + 1, right);
        }
    }
    partition(arr, left, right) {
        const pivotValue = arr[right].value; // pivot set to last element
        let low = left - 1; // left/low index
        for (let i = left; i < right; i++) {
            this.animations.push({ leftIndex: i, rightIndex: i, pivot: right, isSwapping: false });
            if (arr[i].value < pivotValue) {
                low++;
                this.animations.push({ leftIndex: low, rightIndex: i, pivot: right, isSwapping: true });
                this.arrService.swap(arr, low, i);
            }
        }
        this.animations.push({ leftIndex: low + 1, rightIndex: right, pivot: right, isSwapping: true });
        this.arrService.swap(arr, low + 1, right);
        return low + 1;
    }
    quickSortAnimation() {
        this.arrService.sortingAnimationsMax = this.animations.length;
        const timer = setInterval(() => {
            const action = this.animations.shift();
            this.arrService.sortingAnimationsLeft = this.animations.length;
            if (action) {
                // Pivot
                this.arrService.numbers.map((num) => (num.colour = this.arrService.$primaryBars));
                this.arrService.numbers[action.pivot].colour = 'orange';
                if (action.isSwapping == false) {
                    this.arrService.numbers[action.leftIndex].colour = this.arrService.$selectedIndex;
                    this.arrService.numbers[action.rightIndex].colour = this.arrService.$selectedIndex;
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

/***/ "LmTy":
/*!*******************************************************************!*\
  !*** ./src/app/algorithm-visualizer/algorithms/insertion-sort.ts ***!
  \*******************************************************************/
/*! exports provided: InsertionSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertionSort", function() { return InsertionSort; });
class InsertionSort {
    constructor(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    insertionSort(arr) {
        for (let outer = 1; outer < arr.length; outer++) {
            let inner = outer;
            this.animations.push({ rightIndex: null, leftIndex: null, index: inner });
            while (inner > 0 && arr[inner - 1].value > arr[inner].value) { // If previous value is greater, cascasde the value back to its correct index.
                this.animations.push({ rightIndex: inner, leftIndex: inner - 1, index: null });
                this.arrService.swap(arr, inner, inner - 1);
                inner--;
            }
        }
    }
    insertionSortAnimation() {
        this.arrService.sortingAnimationsMax = this.animations.length;
        const timer = setInterval(() => {
            const action = this.animations.shift();
            this.arrService.sortingAnimationsLeft = this.animations.length;
            if (action) {
                this.arrService.numbers.map((num) => (num.colour = this.arrService.$primaryBars));
                if (action.index != null)
                    this.arrService.numbers[action.index].colour = this.arrService.$selectedIndex;
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

/***/ "MZ/T":
/*!************************************************************************!*\
  !*** ./src/app/searching-algorithms/searching-algorithms.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchingAlgorithmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchingAlgorithmsComponent", function() { return SearchingAlgorithmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/algorithm.enum */ "/R0n");
/* harmony import */ var _algorithms_binary_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/binary-search */ "5nc0");
/* harmony import */ var _algorithms_linear_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/linear-search */ "pX5D");
/* harmony import */ var _shared_arrays_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/arrays.service */ "Ru8x");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");











function SearchingAlgorithmsComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchingAlgorithmsComponent_ul_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.displayInfo(ctx_r4.algoEnum.BINARY); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchingAlgorithmsComponent_ul_7_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.displayInfo(ctx_r6.algoEnum.LINEAR); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.BINARY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.LINEAR);
} }
function SearchingAlgorithmsComponent_progressbar_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "progressbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("striped", true)("animate", true)("value", ctx_r1.arrService.arrayLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.arrService.arrayLength, " / 200 ");
} }
function SearchingAlgorithmsComponent_progressbar_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r2.arrService.sortingAnimationsMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("striped", true)("animate", true)("value", ctx_r2.arrService.sortingAnimationsLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.arrService.sortingAnimationsLeft, " / ", ctx_r2.arrService.sortingAnimationsMax, " ");
} }
function SearchingAlgorithmsComponent_div_31_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", "0", "px");
} }
function SearchingAlgorithmsComponent_div_31_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r7.value);
} }
const _c0 = function (a0, a1, a2) { return { "width.px": a0, "height.px": a1, "background-color": a2 }; };
function SearchingAlgorithmsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchingAlgorithmsComponent_div_31_p_1_Template, 2, 2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchingAlgorithmsComponent_div_31_p_2_Template, 2, 3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, num_r7.width, num_r7.value, num_r7.colour));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.arrService.arrayLength >= 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.arrService.arrayLength < 20);
} }
const _c1 = function () { return { "background-color": "red" }; };
class SearchingAlgorithmsComponent {
    constructor(arrService) {
        this.arrService = arrService;
        this.algoEnum = _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_1__["AlgorithmEnum"];
        this.selectedAlgorithm = _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_1__["AlgorithmEnum"].BINARY;
        this.targetIndex = 0;
    }
    ngOnInit() {
        this.arrService.resetArrayNoDups();
        this.arrService.sortArray();
        this.targetIndex = this.getRandomElement();
        this.arrService.numbers[this.targetIndex].colour = this.arrService.$targetIndex;
    }
    resetArray() {
        this.arrService.resetArrayNoDups();
        this.arrService.sortArray();
        this.targetIndex = this.getRandomElement();
        this.arrService.numbers[this.targetIndex].colour = this.arrService.$targetIndex;
    }
    pitchSize(event) {
        this.arrService.arrayLength = event.value;
        this.arrService.setBarWidth();
        this.resetArray();
    }
    pitchSpeed(event) {
        this.arrService.animationSpeed = event.value;
    }
    displayInfo(pickedAlgo) {
        this.selectedAlgorithm = pickedAlgo;
    }
    startSorting() {
        this.arrService.sorting = true;
        if (this.selectedAlgorithm === _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_1__["AlgorithmEnum"].LINEAR) {
            this.linearSearch();
        }
        if (this.selectedAlgorithm === _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_1__["AlgorithmEnum"].BINARY) {
            this.binarySearch();
        }
    }
    getRandomElement() {
        const min = 20;
        const max = 200;
        return Math.floor((Math.random() * (max - min + 1)) + min) % this.arrService.numbers.length;
    }
    linearSearch() {
        const ls = new _algorithms_linear_search__WEBPACK_IMPORTED_MODULE_3__["LinearSearch"](this.arrService);
        const numbersCopy = [...this.arrService.numbers];
        ls.linearSearch(numbersCopy, numbersCopy[this.targetIndex].value);
        ls.linearSearchAnimation();
    }
    binarySearch() {
        const bs = new _algorithms_binary_search__WEBPACK_IMPORTED_MODULE_2__["BinarySearch"](this.arrService);
        const numbersCopy = [...this.arrService.numbers];
        bs.binarySearch(numbersCopy, numbersCopy[this.targetIndex].value);
        bs.binarySearchAnimation();
    }
}
SearchingAlgorithmsComponent.ɵfac = function SearchingAlgorithmsComponent_Factory(t) { return new (t || SearchingAlgorithmsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_arrays_service__WEBPACK_IMPORTED_MODULE_4__["ArraysService"])); };
SearchingAlgorithmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchingAlgorithmsComponent, selectors: [["app-searching-algorithms"]], decls: 32, vars: 16, consts: [[1, "array-container"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["dropdown", "", 1, "btn-group", 3, "insideClick"], ["id", "button-animated", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-animated", 1, "btn", "btn-primary", "dropdown-toggle", 3, "disabled"], [1, "caret"], ["id", "dropdown-animated", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["thumbLabel", "", "tickInterval", "auto", "min", "4", "max", "200", 3, "disabled", "value", "input"], ["id", "speedSlider", "thumbLabel", "", "tickInterval", "auto", "min", "0", "max", "1000", 3, "disabled", "displayWith", "value", "input"], [1, "container-fluid"], [1, "row"], [1, "array-container", "col-12"], [1, "animation-slide-bar", "col-sm-6"], [1, "rectangle", 3, "ngStyle"], [1, "mb-2"], ["type", "primary", 3, "striped", "animate", "value", 4, "ngIf"], ["type", "danger", 3, "striped", "animate", "max", "value", 4, "ngIf"], ["class", "array-body", "class", "array-bar", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], ["type", "primary", 3, "striped", "animate", "value"], ["type", "danger", 3, "striped", "animate", "max", "value"], [1, "array-bar", 3, "ngStyle"], [3, "font-size", 4, "ngIf"], [3, "color", 4, "ngIf"]], template: function SearchingAlgorithmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchingAlgorithmsComponent_Template_button_click_1_listener() { return ctx.resetArray(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Generate New Array ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchingAlgorithmsComponent_ul_7_Template, 7, 2, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchingAlgorithmsComponent_Template_button_click_8_listener() { return ctx.startSorting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Array Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchingAlgorithmsComponent_Template_mat_slider_input_12_listener($event) { return ctx.pitchSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Iteration Speed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchingAlgorithmsComponent_Template_mat_slider_input_15_listener($event) { return ctx.pitchSpeed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SearchingAlgorithmsComponent_progressbar_28_Template, 3, 4, "progressbar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SearchingAlgorithmsComponent_progressbar_29_Template, 3, 6, "progressbar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SearchingAlgorithmsComponent_div_31_Template, 3, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("insideClick", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedAlgorithm, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.isSorted || ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.arrService.arrayLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.arrService.animationSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.sorting)("displayWith", ctx.arrService.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.algoEnum.RED_BAR, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrService.sorting == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrService.numbers);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_9__["ProgressbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGluZy1hbGdvcml0aG1zL3NlYXJjaGluZy1hbGdvcml0aG1zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchingAlgorithmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-searching-algorithms',
                templateUrl: './searching-algorithms.component.html',
                styleUrls: ['./searching-algorithms.component.scss']
            }]
    }], function () { return [{ type: _shared_arrays_service__WEBPACK_IMPORTED_MODULE_4__["ArraysService"] }]; }, null); })();


/***/ }),

/***/ "O9c7":
/*!***********************************************!*\
  !*** ./src/app/shared/binary-tree.service.ts ***!
  \***********************************************/
/*! exports provided: BinaryTreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryTreeService", function() { return BinaryTreeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_TreeNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/TreeNode */ "QR3+");



class BinaryTreeService {
    constructor() {
        this.animationSpeed = 500;
        this.nodeAmount = 10;
        this.nodes = [];
        this.nodeValues = [];
        this.root = null;
        this.randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        this.generateNewNodes();
    }
    initTree() {
        return this.root = this.sortedArrToBST(0, this.nodeValues.length - 1, 0);
    }
    sortedArrToBST(start, end, level) {
        // base case
        if (start > end)
            return null;
        let mid = Math.floor(start + (end - start) / 2);
        let newNode = new _shared_models_TreeNode__WEBPACK_IMPORTED_MODULE_1__["TreeNode"](this.nodeValues[mid]);
        newNode.level = level;
        newNode.left = this.sortedArrToBST(start, mid - 1, level + 1);
        newNode.right = this.sortedArrToBST(mid + 1, end, level + 1);
        this.nodes.push(newNode);
        return newNode;
    }
    generateNewNodes() {
        this.nodeValues = [];
        this.nodes = [];
        do {
            const randInt = this.randomInteger(1, 30);
            if (!this.nodeValues.includes(randInt))
                this.nodeValues.push(randInt);
        } while (this.nodeValues.length <= this.nodeAmount);
        this.nodeValues.sort((a, b) => a - b);
    }
}
BinaryTreeService.ɵfac = function BinaryTreeService_Factory(t) { return new (t || BinaryTreeService)(); };
BinaryTreeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BinaryTreeService, factory: BinaryTreeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BinaryTreeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QR3+":
/*!*******************************************!*\
  !*** ./src/app/shared/models/TreeNode.ts ***!
  \*******************************************/
/*! exports provided: TreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
// https://www.typescriptlang.org/docs/handbook/interfaces.html
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.xAxis = null;
        this.yAxis = null;
        this.level = null;
        this.colour = 'white';
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'algorithm-visualizer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "row"], [1, "col-2"], [1, "nav", "flex-column"], ["routerLink", "/algorithm", 1, "nav-link"], ["routerLink", "/searching", 1, "nav-link"], ["routerLink", "/binary", 1, "nav-link"], [1, "col-10"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sorting Algorithms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Searching Algorithms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Binary Trees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "U+aZ":
/*!****************************************************!*\
  !*** ./src/app/binary-tree/algorithms/preorder.ts ***!
  \****************************************************/
/*! exports provided: PreOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreOrder", function() { return PreOrder; });
/* harmony import */ var _shared_colours_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/colours.enum */ "cb/x");

class PreOrder {
    constructor(treeService, ctx, canvas, visitedNodes) {
        this.treeService = treeService;
        this.animationNodes = [];
        this.visitedNodes = [];
        this.coloursEnum = _shared_colours_enum__WEBPACK_IMPORTED_MODULE_0__["Colours"];
        this.ctx = ctx;
        this.canvas = canvas;
        this.visitedNodes = visitedNodes;
    }
    preOrderTraversal(root) {
        let stack = [];
        stack.push(root);
        while (stack.length > 0) {
            let pop = stack.pop();
            if (pop) {
                this.animationNodes.push(pop);
                stack.push(pop.right);
                stack.push(pop.left);
            }
        }
        this.preOrderAnimation();
    }
    preOrderAnimation() {
        let timer = setInterval(() => {
            let action = this.animationNodes.shift();
            if (action) {
                this.treeService.nodes.forEach((node) => {
                    if (this.animationNodes.length <= 0) {
                        node.colour = 'green';
                        this.highlightNode(node);
                    }
                    else if (node.data == action.data) {
                        node.colour = this.coloursEnum.SELECTED;
                        this.highlightNode(node);
                        this.visitedNodes.push(node);
                    }
                    else if (this.visitedNodes.includes(node)) {
                        node.colour = 'green';
                        this.highlightNode(node);
                    }
                    else {
                        node.colour = 'white';
                        this.highlightNode(node);
                    }
                });
            }
            else {
                clearInterval(timer);
            }
        }, this.treeService.animationSpeed);
    }
    highlightNode(node) {
        // create nodes 
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = node.colour;
        // this.ctx.strokeStyle = 'blue';
        this.ctx.arc(node.xAxis, node.yAxis, 30, 0, 90);
        this.ctx.stroke();
        this.ctx.fill();
        // fill node data/style
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'black';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(node.data.toString(), node.xAxis, node.yAxis + 10);
    }
}


/***/ }),

/***/ "UiAC":
/*!***************************************************!*\
  !*** ./src/app/binary-tree/algorithms/inorder.ts ***!
  \***************************************************/
/*! exports provided: InOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOrder", function() { return InOrder; });
/* harmony import */ var _shared_colours_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/colours.enum */ "cb/x");

class InOrder {
    constructor(treeService, ctx, canvas, visitedNodes) {
        this.treeService = treeService;
        this.animationNodes = [];
        this.visitedNodes = [];
        this.coloursEnum = _shared_colours_enum__WEBPACK_IMPORTED_MODULE_0__["Colours"];
        this.ctx = ctx;
        this.canvas = canvas;
        this.visitedNodes = visitedNodes;
    }
    inOrderTraversal(root) {
        let stack = [];
        while (stack.length > 0 || root != null) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            let pop = stack.pop();
            this.animationNodes.push(pop);
            root = pop.right;
        }
        this.inOrderAnimation();
    }
    inOrderAnimation() {
        let timer = setInterval(() => {
            let action = this.animationNodes.shift();
            if (action) {
                this.treeService.nodes.forEach((node) => {
                    if (this.animationNodes.length <= 0) {
                        node.colour = 'green';
                        this.highlightNode(node);
                    }
                    else if (node.data == action.data) {
                        node.colour = this.coloursEnum.SELECTED;
                        this.highlightNode(node);
                        this.visitedNodes.push(node);
                    }
                    else if (this.visitedNodes.includes(node)) {
                        node.colour = 'green';
                        this.highlightNode(node);
                    }
                    else {
                        node.colour = 'white';
                        this.highlightNode(node);
                    }
                });
            }
            else {
                clearInterval(timer);
            }
        }, this.treeService.animationSpeed);
    }
    highlightNode(node) {
        // create nodes 
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = node.colour;
        // this.ctx.strokeStyle = 'blue';
        this.ctx.arc(node.xAxis, node.yAxis, 30, 0, 90);
        this.ctx.stroke();
        this.ctx.fill();
        // fill node data/style
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'black';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(node.data.toString(), node.xAxis, node.yAxis + 10);
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _algorithms_merge_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/merge-sort */ "n+o6");
/* harmony import */ var _algorithms_bubble_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/bubble-sort */ "6Mwx");
/* harmony import */ var _algorithms_quick_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/quick-sort */ "FA2c");
/* harmony import */ var _algorithms_insertion_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/insertion-sort */ "LmTy");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/algorithm.enum */ "/R0n");
/* harmony import */ var _shared_arrays_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/arrays.service */ "Ru8x");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");














function AlgorithmVisualizerComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.displayInfo(ctx_r6.algoEnum.BUBBLE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.displayInfo(ctx_r8.algoEnum.INSERTION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.displayInfo(ctx_r9.algoEnum.MERGE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_ul_7_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.displayInfo(ctx_r10.algoEnum.QUICK); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.BUBBLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.INSERTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.MERGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.algoEnum.QUICK);
} }
const _c0 = function () { return { "background-color": "orange" }; };
function AlgorithmVisualizerComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function AlgorithmVisualizerComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.algoEnum.ORANGE_BAR, " ");
} }
function AlgorithmVisualizerComponent_progressbar_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "progressbar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("striped", true)("animate", true)("value", ctx_r3.arrService.arrayLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.arrService.arrayLength, " / 200 ");
} }
function AlgorithmVisualizerComponent_progressbar_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "progressbar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r4.arrService.sortingAnimationsMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("striped", true)("animate", true)("value", ctx_r4.arrService.sortingAnimationsLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.arrService.sortingAnimationsLeft, " / ", ctx_r4.arrService.sortingAnimationsMax, " ");
} }
function AlgorithmVisualizerComponent_div_37_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", "0", "px");
} }
function AlgorithmVisualizerComponent_div_37_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r11.value);
} }
const _c1 = function (a0, a1, a2) { return { "width.px": a0, "height.px": a1, "background-color": a2 }; };
function AlgorithmVisualizerComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlgorithmVisualizerComponent_div_37_p_1_Template, 2, 2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlgorithmVisualizerComponent_div_37_p_2_Template, 2, 3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, num_r11.width, num_r11.value, num_r11.colour));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.arrService.arrayLength > 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.arrService.arrayLength < 20);
} }
const _c2 = function () { return { "background-color": "red" }; };
const _c3 = function () { return { "background-color": "green" }; };
class AlgorithmVisualizerComponent {
    constructor(arrService) {
        this.arrService = arrService;
        this.algoEnum = _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_6__["AlgorithmEnum"];
        this.selectedAlgorithm = _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_6__["AlgorithmEnum"].MERGE;
    }
    ngOnInit() {
        this.arrService.resetArray();
    }
    resetArray() {
        this.arrService.resetArray();
    }
    pitchSize(event) {
        this.arrService.arrayLength = event.value;
        this.arrService.setBarWidth();
        this.arrService.resetArray();
    }
    pitchSpeed(event) {
        this.arrService.animationSpeed = event.value;
    }
    displayInfo(pickedAlgo) {
        this.selectedAlgorithm = pickedAlgo;
    }
    startSorting() {
        this.arrService.sorting = true;
        if (this.selectedAlgorithm === _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_6__["AlgorithmEnum"].BUBBLE) {
            this.bubbleSort();
        }
        if (this.selectedAlgorithm === _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_6__["AlgorithmEnum"].INSERTION) {
            this.insertionSort();
        }
        if (this.selectedAlgorithm === _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_6__["AlgorithmEnum"].MERGE) {
            this.mergeSort();
        }
        if (this.selectedAlgorithm === _shared_algorithm_enum__WEBPACK_IMPORTED_MODULE_6__["AlgorithmEnum"].QUICK) {
            this.quickSort();
        }
    }
    bubbleSort() {
        const bs = new _algorithms_bubble_sort__WEBPACK_IMPORTED_MODULE_2__["BubbleSort"](this.arrService);
        const numbersCopy = [...this.arrService.numbers];
        bs.bubbleSort(numbersCopy);
        bs.bubbleSortAnimation();
    }
    insertionSort() {
        const is = new _algorithms_insertion_sort__WEBPACK_IMPORTED_MODULE_4__["InsertionSort"](this.arrService);
        const numbersCopy = [...this.arrService.numbers];
        is.insertionSort(numbersCopy);
        is.insertionSortAnimation();
    }
    mergeSort() {
        const ms = new _algorithms_merge_sort__WEBPACK_IMPORTED_MODULE_1__["MergeSort"](this.arrService);
        const numbersCopy = [...this.arrService.numbers];
        ms.mergeSort(numbersCopy, 0, numbersCopy.length - 1);
        ms.mergeSortAnimation();
    }
    quickSort() {
        const qs = new _algorithms_quick_sort__WEBPACK_IMPORTED_MODULE_3__["QuickSort"](this.arrService);
        const numbersCopy = [...this.arrService.numbers];
        qs.quickSort(numbersCopy);
        qs.quickSortAnimation();
    }
}
AlgorithmVisualizerComponent.ɵfac = function AlgorithmVisualizerComponent_Factory(t) { return new (t || AlgorithmVisualizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_arrays_service__WEBPACK_IMPORTED_MODULE_7__["ArraysService"])); };
AlgorithmVisualizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlgorithmVisualizerComponent, selectors: [["app-algorithm-visualizer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownConfig"],
                useValue: { isAnimated: true, autoClose: true },
            },
        ])], decls: 38, vars: 21, consts: [[1, "array-container"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["dropdown", "", 1, "btn-group", 3, "insideClick"], ["id", "button-animated", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-animated", 1, "btn", "btn-primary", "dropdown-toggle", 3, "disabled"], [1, "caret"], ["id", "dropdown-animated", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["thumbLabel", "", "tickInterval", "auto", "min", "4", "max", "200", 3, "disabled", "value", "input"], ["id", "speedSlider", "thumbLabel", "", "tickInterval", "auto", "min", "0", "max", "1000", 3, "disabled", "displayWith", "value", "input"], [1, "container-fluid"], [1, "row"], [1, "array-container", "col-12"], [1, "animation-slide-bar", "col-sm-6"], ["id", "colorMeaning", 1, "array-container"], [1, "rectangle", 3, "ngStyle"], [4, "ngIf"], [1, "mb-2"], ["type", "primary", 3, "striped", "animate", "value", 4, "ngIf"], ["type", "danger", 3, "striped", "animate", "max", "value", 4, "ngIf"], ["class", "array-body", "class", "array-bar", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], ["type", "primary", 3, "striped", "animate", "value"], ["type", "danger", 3, "striped", "animate", "max", "value"], [1, "array-bar", 3, "ngStyle"], [3, "font-size", 4, "ngIf"], [3, "color", 4, "ngIf"]], template: function AlgorithmVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_Template_button_click_1_listener() { return ctx.resetArray(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Generate New Array ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlgorithmVisualizerComponent_ul_7_Template, 13, 4, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorithmVisualizerComponent_Template_button_click_8_listener() { return ctx.startSorting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Array Size");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AlgorithmVisualizerComponent_td_26_Template, 2, 2, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AlgorithmVisualizerComponent_td_27_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AlgorithmVisualizerComponent_progressbar_34_Template, 3, 4, "progressbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AlgorithmVisualizerComponent_progressbar_35_Template, 3, 6, "progressbar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AlgorithmVisualizerComponent_div_37_Template, 3, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("insideClick", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedAlgorithm, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.isSorted || ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.arrService.arrayLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.arrService.animationSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.arrService.sorting)("displayWith", ctx.arrService.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.algoEnum.RED_BAR, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedAlgorithm == ctx.algoEnum.QUICK);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedAlgorithm == ctx.algoEnum.QUICK);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.algoEnum.GREEN_BAR, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrService.sorting == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrService.sorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrService.numbers);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownMenuDirective"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS12aXN1YWxpemVyL2FsZ29yaXRobS12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgorithmVisualizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-algorithm-visualizer',
                templateUrl: './algorithm-visualizer.component.html',
                styleUrls: ['./algorithm-visualizer.component.scss'],
                providers: [
                    {
                        provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownConfig"],
                        useValue: { isAnimated: true, autoClose: true },
                    },
                ],
            }]
    }], function () { return [{ type: _shared_arrays_service__WEBPACK_IMPORTED_MODULE_7__["ArraysService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _algorithm_visualizer_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./algorithm-visualizer/algorithm-visualizer.component */ "Z/Mt");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _searching_algorithms_searching_algorithms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./searching-algorithms/searching-algorithms.component */ "MZ/T");
/* harmony import */ var _binary_tree_binary_tree_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./binary-tree/binary-tree.component */ "+EF1");


















const routes = [
    { path: 'algorithm', component: _algorithm_visualizer_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["AlgorithmVisualizerComponent"] },
    { path: 'searching', component: _searching_algorithms_searching_algorithms_component__WEBPACK_IMPORTED_MODULE_12__["SearchingAlgorithmsComponent"] },
    { path: 'binary', component: _binary_tree_binary_tree_component__WEBPACK_IMPORTED_MODULE_13__["BinaryTreeComponent"] },
    { path: '', redirectTo: '/algorithm', pathMatch: 'full' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _algorithm_visualizer_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["AlgorithmVisualizerComponent"], _searching_algorithms_searching_algorithms_component__WEBPACK_IMPORTED_MODULE_12__["SearchingAlgorithmsComponent"], _binary_tree_binary_tree_component__WEBPACK_IMPORTED_MODULE_13__["BinaryTreeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _algorithm_visualizer_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["AlgorithmVisualizerComponent"], _searching_algorithms_searching_algorithms_component__WEBPACK_IMPORTED_MODULE_12__["SearchingAlgorithmsComponent"], _binary_tree_binary_tree_component__WEBPACK_IMPORTED_MODULE_13__["BinaryTreeComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cb/x":
/*!****************************************!*\
  !*** ./src/app/shared/colours.enum.ts ***!
  \****************************************/
/*! exports provided: Colours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colours", function() { return Colours; });
var Colours;
(function (Colours) {
    Colours["PRIMARY"] = "#0F5257";
    Colours["FINISHED"] = "#9C92A3";
    Colours["SELECTED"] = "red";
    Colours["SWAPPED"] = "green";
    Colours["TARGET"] = "orange";
})(Colours || (Colours = {}));


/***/ }),

/***/ "n+o6":
/*!***************************************************************!*\
  !*** ./src/app/algorithm-visualizer/algorithms/merge-sort.ts ***!
  \***************************************************************/
/*! exports provided: MergeSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeSort", function() { return MergeSort; });
class MergeSort {
    constructor(arrService) {
        this.arrService = arrService;
        this.animations = []; // Stores array objects => { key, value }
    }
    mergeSort(array, left, right) {
        if (right <= left) {
            return;
        }
        let mid = Math.floor((left + right) / 2);
        this.mergeSort(array, left, mid); // Sort left side of the array, 0 to mid
        this.mergeSort(array, mid + 1, right); // mid to end
        this.merge(array, left, mid, right);
    }
    merge(array, left, mid, right) {
        let aux = [...array];
        let midIndex = mid + 1;
        let leftIndex = left;
        for (let k = leftIndex; k <= right; k++) {
            this.animations.push({ index: k, outerIndex: null, value: null });
            if (leftIndex > mid) {
                if (k !== midIndex)
                    this.animations.push({ index: k, outerIndex: midIndex, value: aux[midIndex] });
                array[k] = aux[midIndex++];
            }
            else if (midIndex > right) {
                if (k !== leftIndex)
                    this.animations.push({ index: k, outerIndex: leftIndex, value: aux[leftIndex] });
                array[k] = aux[leftIndex++];
            }
            else if (aux[leftIndex].value > aux[midIndex].value) {
                if (k !== midIndex)
                    this.animations.push({ index: k, outerIndex: midIndex, value: aux[midIndex] });
                array[k] = aux[midIndex++];
            }
            else {
                if (k !== leftIndex)
                    this.animations.push({ index: k, outerIndex: leftIndex, value: aux[leftIndex] });
                array[k] = aux[leftIndex++];
            }
        }
    }
    mergeSortAnimation() {
        this.arrService.sortingAnimationsMax = this.animations.length;
        let timer = setInterval(() => {
            const action = this.animations.shift();
            this.arrService.sortingAnimationsLeft = this.animations.length;
            if (action) {
                this.arrService.numbers.map((num) => (num.colour = this.arrService.$primaryBars));
                if (action.outerIndex == null) {
                    this.arrService.numbers[action.index].colour = this.arrService.$selectedIndex;
                }
                else {
                    this.arrService.numbers[action.index].colour = this.arrService.$swappedIndex;
                    this.arrService.numbers[action.outerIndex].colour = this.arrService.$swappedIndex;
                    this.arrService.numbers[action.index] = action.value;
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

/***/ "pX5D":
/*!******************************************************************!*\
  !*** ./src/app/searching-algorithms/algorithms/linear-search.ts ***!
  \******************************************************************/
/*! exports provided: LinearSearch, AnimationValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearSearch", function() { return LinearSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationValues", function() { return AnimationValues; });
class LinearSearch {
    constructor(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    linearSearch(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            this.animations.push({ selectedIndex: i });
            if (arr[i].value === target) {
                this.animations.push({ selectedIndex: i });
                return i;
            }
        }
    }
    linearSearchAnimation() {
        this.arrService.sortingAnimationsMax = this.animations.length;
        const timer = setInterval(() => {
            const action = this.animations.shift();
            this.arrService.sortingAnimationsLeft = this.animations.length;
            if (action) {
                this.arrService.numbers[action.selectedIndex].colour = this.arrService.$selectedIndex;
            }
            else {
                clearInterval(timer);
                if (this.arrService.isArraySorted(this.arrService.numbers)) {
                    this.arrService.sorting = false;
                }
            }
        }, this.arrService.animationSpeed);
    }
}
class AnimationValues {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




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
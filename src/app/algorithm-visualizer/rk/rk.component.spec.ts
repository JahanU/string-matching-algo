import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDataSourceEnum } from 'src/app/shared/enums/input-data-source.enum';

import { RkComponent } from './rk.component';

describe('RkComponent', () => {
    let component: RkComponent;
    let fixture: ComponentFixture<RkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RkComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });
    /* AAA
        Arrange -> Prepare code required for specific tests
        Act -> Invocation of the method to be tested
        Assert -> Check if result is expected
    */
    it('1 - should return 0, occurrences = 0', () => {
        component.needleArr = [{ character: 'A', colour: 'white', index: 0 }, { character: 'A', colour: 'white', index: 2 }];
        component.stackArr = [{ character: '', colour: 'white', index: 0 }];
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(0);
    });

    it('2 - should return 0, occurrences = 0', () => {
        component.needleArr = [{ character: '', colour: 'white', index: 0 }];
        component.stackArr = [{ character: 'A', colour: 'white', index: 0 }, { character: 'A', colour: 'white', index: 2 }];
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(0);
    });

    it('3 - should return 0, occurrences = 0', () => {
        component.needleArr = [];
        component.stackArr = [];
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(0);
    });

    it('4 - should return 0, occurrences = 0', () => {
        component.needleArr = [{ character: '', colour: 'white', index: 0 }];
        component.stackArr = [{ character: 'A', colour: 'white', index: 0 }, { character: 'A', colour: 'white', index: 2 }];
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(0);
    });

    it('5 - should return 0, occurrences = 0', () => {
        component.needleArr = [
            { character: 'A', colour: 'white', index: 1 },
            { character: 'B', colour: 'white', index: 2 },
            { character: 'C', colour: 'white', index: 3 }
        ];
        component.stackArr = [
            { character: 'A', colour: 'white', index: 0 },
            { character: 'B', colour: 'white', index: 2 },
        ];
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(0);
    });


    it('6 - should return 1, occurrences = 1', () => {
        component.needleArr = [
            { character: 'A', colour: 'white', index: 1 },
            { character: 'B', colour: 'white', index: 2 },
        ];
        component.stackArr = [
            { character: 'A', colour: 'white', index: 0 },
            { character: 'B', colour: 'white', index: 2 },
            { character: 'C', colour: 'white', index: 3 }
        ];
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(1);
    });

    it('7 - should return 2, occurrences = 2', () => {
        component.needleArr = [
            { character: 'A', colour: 'white', index: 1 },
            { character: 'B', colour: 'white', index: 2 },
        ];
        component.stackArr = [
            { character: 'A', colour: 'white', index: 0 },
            { character: 'B', colour: 'white', index: 2 },
            { character: 'A', colour: 'white', index: 3 },
            { character: 'B', colour: 'white', index: 4 },
        ];
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(2);
    });

    it('8, predefined User Input - should return correct: occurrences = 1', () => {
        component.needleArr = [
            { character: 'A', colour: null, index: 1 },
            { character: 'B', colour: null, index: 2 },
            { character: 'C', colour: null, index: 3 },
            { character: 'D', colour: null, index: 4 },
            { character: 'A', colour: null, index: 5 },
            { character: 'B', colour: null, index: 6 },
            { character: 'D', colour: null, index: 7 },
        ];

        component.stackArr = [
            { character: 'A', colour: null, index: 0 },
            { character: 'B', colour: null, index: 2 },
            { character: 'C', colour: null, index: 3 },
            { character: ' ', colour: null, index: 4 },
            { character: 'A', colour: null, index: 5 },
            { character: 'B', colour: null, index: 6 },
            { character: 'C', colour: null, index: 7 },
            { character: 'D', colour: null, index: 8 },
            { character: 'A', colour: null, index: 9 },
            { character: 'B', colour: null, index: 10 },
            { character: 'C', colour: null, index: 11 },
            { character: 'D', colour: null, index: 12 },
            { character: 'A', colour: null, index: 13 },
            { character: 'B', colour: null, index: 14 },
            { character: 'D', colour: null, index: 15 },
        ];
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(1);
    });

    it('9, DNA - should return 3', () => {
        for (let i = 0; i < InputDataSourceEnum.DNA_STACK.length; i++) {
            let char = InputDataSourceEnum.DNA_STACK.charAt(i);
            component.stackArr.push({ character: char, colour: null, index: i });
        }

        for (let i = 0; i < InputDataSourceEnum.DNA_NEEDLE.length; i++) {
            let char = InputDataSourceEnum.DNA_NEEDLE.charAt(i);
            component.needleArr.push({ character: char, colour: null, index: i });
        }

        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(3);
    });

    it('10, Story - should return 2', () => {
        for (let i = 0; i < InputDataSourceEnum.STORY_STACK.length; i++) {
            let char = InputDataSourceEnum.STORY_STACK.charAt(i);
            component.stackArr.push({ character: char, colour: null, index: i });
        }
        for (let i = 0; i < InputDataSourceEnum.STORY_NEEDLE.length; i++) {
            let char = InputDataSourceEnum.STORY_NEEDLE.charAt(i);
            component.needleArr.push({ character: char, colour: null, index: i });
        }
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(2);
    });

    it('11, Bible - should return 9', () => {
        for (let i = 0; i < InputDataSourceEnum.BIBLE_STACK.length; i++)
            component.stackArr.push({ character: InputDataSourceEnum.BIBLE_STACK.charAt(i), colour: null, index: i });
        for (let i = 0; i < InputDataSourceEnum.BIBLE_NEEDLE.length; i++)
            component.needleArr.push({ character: InputDataSourceEnum.BIBLE_NEEDLE.charAt(i), colour: null, index: i });

        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(9);
    });

    it('12, Stocks - should return 5', () => {
        for (let i = 0; i < InputDataSourceEnum.STOCKS_STACK.length; i++)
            component.stackArr.push({ character: InputDataSourceEnum.STOCKS_STACK.charAt(i), colour: null, index: i });
        for (let i = 0; i < InputDataSourceEnum.STOCKS_NEEDLE.length; i++)
            component.needleArr.push({ character: InputDataSourceEnum.STOCKS_NEEDLE.charAt(i), colour: null, index: i });

        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(5);
    });

    it('13, Movies - should return 3', () => {
        for (let i = 0; i < InputDataSourceEnum.MOVIES_STACK.length; i++)
            component.stackArr.push({ character: InputDataSourceEnum.MOVIES_STACK.charAt(i), colour: null, index: i });
        for (let i = 0; i < InputDataSourceEnum.MOVIES_NEEDLE.length; i++)
            component.needleArr.push({ character: InputDataSourceEnum.MOVIES_NEEDLE.charAt(i), colour: null, index: i });

        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(3);
    });
    it('14, interlinked needle in stack - should return 2', () => {

        component.needleArr = [
            { character: 'A', colour: null, index: 0 },
            { character: 'B', colour: null, index: 1 },
            { character: 'B', colour: null, index: 2 },
            { character: 'A', colour: null, index: 3 }
        ];

        component.stackArr = [
            { character: 'A', colour: null, index: 0 },
            { character: 'B', colour: null, index: 1 },
            { character: 'B', colour: null, index: 2 },
            { character: 'A', colour: null, index: 3 },
            { character: 'B', colour: null, index: 4 },
            { character: 'B', colour: null, index: 5 },
            { character: 'A', colour: null, index: 6 },

        ]
        component.setNeedleHash();
        const matches = component.rkSearch();
        expect(matches).toBe(2);
    });

});


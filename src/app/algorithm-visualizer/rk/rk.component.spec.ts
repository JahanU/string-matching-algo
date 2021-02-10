import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDataSourceEnum } from 'src/app/shared/input-data-source.enum';

import { RkComponent } from './rk.component';

describe('RkComponent', () => {
  let component: RkComponent;
  let fixture: ComponentFixture<RkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RkComponent ]
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
  component.needleArr = [ {character: 'A', colour: 'white', index: 0}, {character: 'A', colour: 'white', index: 2} ];
  component.stackArr = [ {character: '', colour: 'white', index: 0} ];
  component.setNeedleHash();
  const matches = component.rkSearch();
  expect(matches).toBe(0);
});

it('2 - should return 0, occurrences = 0', () => {
  component.needleArr = [ {character: '', colour: 'white', index: 0}  ];
  component.stackArr = [ {character: 'A', colour: 'white', index: 0}, {character: 'A', colour: 'white', index: 2} ];
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
  component.needleArr = [ {character: '', colour: 'white', index: 0}  ];
  component.stackArr = [ {character: 'A', colour: 'white', index: 0}, {character: 'A', colour: 'white', index: 2} ];
  component.setNeedleHash();
  const matches = component.rkSearch();
  expect(matches).toBe(0);
});

it('5 - should return 0, occurrences = 0', () => {
  component.needleArr = [ 
    {character: 'A', colour: 'white', index: 1},
    {character: 'B', colour: 'white', index: 2},
    {character: 'C', colour: 'white', index: 3}     
  ];
  component.stackArr = [ 
    {character: 'A', colour: 'white', index: 0},
    {character: 'B', colour: 'white', index: 2},
  ];
  component.setNeedleHash();
  const matches = component.rkSearch();
  expect(matches).toBe(0);
});


it('6 - should return 1, occurrences = 1', () => {
  component.needleArr = [ 
    {character: 'A', colour: 'white', index: 1},
    {character: 'B', colour: 'white', index: 2},
  ];
  component.stackArr = [ 
    {character: 'A', colour: 'white', index: 0},
    {character: 'B', colour: 'white', index: 2},
    {character: 'C', colour: 'white', index: 3}     
  ];
  component.setNeedleHash();
  const matches = component.rkSearch();
  expect(matches).toBe(1);
});

it('7 - should return 2, occurrences = 2', () => {
  component.needleArr = [ 
    {character: 'A', colour: 'white', index: 1},
    {character: 'B', colour: 'white', index: 2},
  ];
  component.stackArr = [ 
    {character: 'A', colour: 'white', index: 0},
    {character: 'B', colour: 'white', index: 2},
    {character: 'A', colour: 'white', index: 3},
    {character: 'B', colour: 'white', index: 4},
  ];
  component.setNeedleHash();
  const matches = component.rkSearch();
  expect(matches).toBe(2);
});


it('8 - should return correct: occurrences = 6', () => {
  for (let i = 0; i < InputDataSourceEnum.DNA.length; i++) {
    let char = InputDataSourceEnum.DNA.charAt(i);
    component.stackArr.push({character: char, colour: 'white', index: i});
  }

  component.needleArr = [ 
    {character: 'A', colour: 'white', index: 1},
    {character: 'T', colour: 'white', index: 2},
    {character: 'G', colour: 'white', index: 3},
  ];
  
  component.setNeedleHash();
  const matches = component.rkSearch();
  expect(matches).toBe(6);
});

it('9 - should return correct: occurrences = 1', () => {
  component.needleArr = [ 
    {character: 'A', colour: 'white', index: 1},
    {character: 'B', colour: 'white', index: 2},
    {character: 'C', colour: 'white', index: 3},
    {character: 'D', colour: 'white', index: 4},
    {character: 'A', colour: 'white', index: 5},
    {character: 'B', colour: 'white', index: 6},
    {character: 'D', colour: 'white', index: 7},
  ];

  component.stackArr = [ 
    {character: 'A', colour: 'white', index: 0},
    {character: 'B', colour: 'white', index: 2},
    {character: 'C', colour: 'white', index: 3},
    {character: ' ', colour: 'white', index: 4},
    {character: 'A', colour: 'white', index: 5},
    {character: 'B', colour: 'white', index: 6},
    {character: 'C', colour: 'white', index: 7},
    {character: 'D', colour: 'white', index: 8},
    {character: 'A', colour: 'white', index: 9},
    {character: 'B', colour: 'white', index: 10},
    {character: 'C', colour: 'white', index: 11},
    {character: 'D', colour: 'white', index: 12},
    {character: 'A', colour: 'white', index: 13},
    {character: 'B', colour: 'white', index: 14},
    {character: 'D', colour: 'white', index: 15},
  ];
  component.setNeedleHash();
  const matches = component.rkSearch();
  expect(matches).toBe(1);
});

it('9 - should return correct: occurrences = 1', () => {
  component.needleArr = [ 
    {character: 'A', colour: 'white', index: 1},
  ];

  component.stackArr = [ 
    {character: 'A', colour: 'white', index: 0},
    {character: 'A', colour: 'white', index: 1},
    {character: 'A', colour: 'white', index: 2},
    {character: 'A', colour: 'white', index: 3},
  ];
  component.setNeedleHash();
  const matches = component.rkSearch();
  expect(matches).toBe(4);
});
});

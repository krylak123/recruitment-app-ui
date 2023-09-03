import 'jest-preset-angular/setup-jest';

jest.mock('primeng/splitbutton', () => ({
  SplitButtonModule: jest.fn(),
}));

import FakeEndpointInterface from "../Common/FakeEndpointInterface";

export default class CalculatePredictiveTextFakeEndpoint implements FakeEndpointInterface {
  static KEYBOARD_CONFIG = [
      ['.',',','?'],
      ['A','B','C'],
      ['D','E','F'],
      ['G','H','I'],
      ['J','K','L'],
      ['M','N','O'],
      ['P','Q','R', 'S'],
      ['T','U','V'],
      ['W','X','Y', 'Z'],
    ];

  // with input: 23
  // output: ad, ae, af, bd, be, bf, cd, ce, cf
  handle(data: string): any {
    const numbersToCreateRecommendations = data.split('');

    const arrayOfLettersToCombine = numbersToCreateRecommendations.map(each => {
      const stringNumberified = +each;
      return CalculatePredictiveTextFakeEndpoint.KEYBOARD_CONFIG[stringNumberified-1];
    });

    if (arrayOfLettersToCombine.length < 2) { return { total:0, data:[] }; }

    let i = 0;
    let recommendations = [];
    while(this.thereIsNext(arrayOfLettersToCombine, i)) {
      for (let j=0; j < arrayOfLettersToCombine[i].length; j++) {
        for (let z=0; z < arrayOfLettersToCombine[i+1].length; z++) {
          recommendations.push(`${arrayOfLettersToCombine[i][j]}${arrayOfLettersToCombine[i+1][z]}`);
        }
      }

      i++;
    }

    return {
      total: recommendations.length,
      data: recommendations,
    }
  }

  thereIsNext = (array: Array<any>, index: number) => index + 1 < array.length;

}
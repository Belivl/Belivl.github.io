
 // Define Card type
export type Card = -2 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// Mapping of card values to hue values
export const hueMap: { [key in Card]: number } = {
        "-2": 0, // Red
        "0": 30, // Yellow
        "1": 60, // Green
        "2": 90, // Cyan
        "3": 120, // Blue
        "4": 150, // Purple
        "5": 180, // Pink
        "6": 210, // Reddish Pink
        "7": 240, // Orange
        "8": 270, // Yellow (same as 0)
      };

      // Function to get the hue value for a card
export function getHueValue(card: Card): number {
        return hueMap[card];
      }
      // Function to generate HSL color string based on hue value
export function generateColor(
        hue: number,
        saturation: number = 80,
        lightness: number = 60
      ): string {
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      }
     export function colorCard1(card) {
        const hueValue: number = getHueValue(card);
        const color: string = generateColor(hueValue);
        return color;
      }
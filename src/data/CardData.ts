import { Card } from "../Card";
import { cardSize } from "../Constants";
import { Coordinate } from "../Coordinate";

export class CardData {

    public x : number;
    public y : number;
    public z : number;
    public isDragging : boolean; 
    public image : HTMLImageElement;
    public card : Card;

    constructor(x : number, y : number, z : number, isDragging : boolean, image : HTMLImageElement, card : Card) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.isDragging = isDragging;
        this.image = image;
        this.card = card;
    }

    public setCardPosition(x : number, y : number, z : number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    isCardAboveObject(objectData : Coordinate) {
        return !(this.x > objectData.x + cardSize.width ||
            objectData.x > this.x + cardSize.width ||
            this.y > objectData.y + cardSize.height ||
            objectData.y > this.y + cardSize.height);
    }

    isMouseInsideCard(x : number, y : number) {
        return x > this.x && x < this.x + cardSize.width &&
            y > this.y && y < this.y + cardSize.height;
    }
}
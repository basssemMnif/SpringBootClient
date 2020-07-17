import { Categorie } from './categorie';

export class Post {
    id: number;
    titre: string;
    description: string;
    dateajout: Date;
    localisation: string;
    prix: number;
    nbLikes: number;
    categorie:Categorie
}
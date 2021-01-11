import { Mongo } from 'meteor/mongo';

export const DevelopersCol = new  Mongo.Collection('developers');
export const DevelopersDetailsCol = new  Mongo.Collection('developersDetails');

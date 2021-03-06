export default interface IMeals {
  id?: number,
  user_id?: number,
  type_meals: string,
  date: Date,
  protein?: string,
  protein_qtd?: number,
  carbohydrate?: string,
  carbohydrate_qtd?: number,
  vegetable?: string,
  vegetable_qtd?: number
}
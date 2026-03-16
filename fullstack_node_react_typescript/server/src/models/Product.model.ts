/* Modelo para tablas en base de datos */
import { Table, Column, Model, DataType, Default} from "sequelize-typescript";

// Decoradores
@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100) // Max length 100
    })
    name: string

     @Column({
        type: DataType.FLOAT(10, 2) // Max length 10, Decimals 2
    })
    price: number

    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
    availability: boolean
}

export default Product;
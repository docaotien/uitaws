import express, { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send(`Welcome, we are GROUP II,
    Our Member:
    Name & S_ID: Đỗ Cao Tiến - 19522333
                 Khương Viết Tài - 19522151
                 Nguyễn Ngọc Hoàn - 19521452`)
})

app.listen(port, () => {
    console.log(`App listening on the port ${port}`);  
})

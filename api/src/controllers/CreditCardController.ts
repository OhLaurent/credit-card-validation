import { Request, Response } from "express";

export function createCreditCardController() {

    const luhn = (digits: number[]) => {
        const transform = digits.map((value, index) => {
            if (index % 2 === 0) return value

            if (value * 2 < 10) return value * 2

            return value % 10 + 1
        })

        if (transform.reduce((prev, current) => { return prev + current }) % 10) {
            return false
        }

        return true
    }

    const validate = (req: Request, res: Response) => {
        const pan: string = req.body.pan
        const cvv: string = req.body.cvv
        const expiryDate = new Date(req.body.expiryDate)

        if (expiryDate < new Date()) {
            return res.status(200).json({
                "valid": false,
                "message": "Error: the card is expired."
            })
        }

        if (pan.substring(0, 2) === "34" || pan.substring(0, 2) === "37") {
            if (cvv.length !== 4) {
                return res.status(200).json({
                    "valid": false,
                    "message": "Error: invalid CVV."
                })
            }
        } else {
            if (cvv.length !== 3) {
                return res.status(200).json({
                    "valid": false,
                    "message": "Error: invalid CVV."
                })
            }
        }

        if (pan.length < 16 || pan.length > 19) {
            return res.status(200).json({
                "valid": false,
                "message": "Error: invalid credit card number."
            })
        }

        const arrPan = pan.split('')
        const arrPanInt = arrPan.map((value, index) => {
            return parseInt(value)
        })

        if (!luhn(arrPanInt)) {
            return res.status(200).json({
                "valid": false,
                "message": "Error: invalid credit card number."
            })
        }

        return res.status(200).json({
            "valid": true,
            "message": "The credit card is valid!"
        })

    }

    return { validate: validate }
}
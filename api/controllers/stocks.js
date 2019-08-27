const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /stocks:
 *   get:
 *     description: Retrieve the full list of stocks
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: stocks
 */
router.get('/', (req, res, next) => {
  res.send(response)
})

/**
 * @swagger
 * /stocks/{id}:
 *   get:
 *     description: Retrieve an specific stock
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the stock to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: stock
 */
router.get('/:id', (req, res, next) => {
  res.send(response)
})

/**
 * @swagger
 * definitions:
 *   TimeStamp:
 *     type: object
 *     required:
 *       - lastUpdate
 *     properties:
 *       lastUpdate:
 *         type: number
 */

/**
 * @swagger
 * /stocks/{id}:
 *   put:
 *     description: Update lastUpdate field of an stock
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the stock to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as stock's lastUpdate field
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/TimeStamp'
 *     responses:
 *       200:
 *         description: updated stock
 */
router.put('/:id', (req, res, next) => {
  res.send(response)
})

/**
 * @swagger
 * /stocks:
 *   post:
 *     description: Create a new stock
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stock
 *         description: Stock object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Stock'
 *     responses:
 *       200:
 *         description: new stock
 */
router.post('/', (req, res, next) => {
  res.send(response)
})

module.exports = router

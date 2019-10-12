import express from 'express';
const router = express.Router();
import { validationResult } from 'express-validator/check';
import { bucketValidation } from './bucket.validation';
import { ERRORS } from '../../common/constants/errors';
import { BucketService} from './bucket.service';

router.get('/', async (req, res) => {
  try {
    const buckets = await BucketService.getAllBucket()
    res.json({ success: true, data: buckets });
    return;
  } catch (e) {
    res.json({ message: 'Error In Get buckets' });
  }
});

router.post('/', bucketValidation('addBucket'), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(ERRORS.BAD_REQUEST.CODE).send(errors.array());
    return;
  }
  const { body } = req;
  try {
    const bucket = await BucketService.addBucket(body);
    res.json({success:true, data: bucket});
    return;
  } catch (e) {
    res.status(ERRORS.INTERNAL_SERVER.CODE).json({ e });
  }
});

export default router;

import { Block } from 'payload'

export const BookingForm: Block = {
  slug: 'bookingForm',
  interfaceName: 'BookingFormBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'successMessage',
      type: 'text',
      required: true,
    },
  ],
}

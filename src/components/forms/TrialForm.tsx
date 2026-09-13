import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TrialFormData } from '../../types';
import { validatePhoneNumber, validateEmail, validateAge, validateName, getDayOptions, getAgeOptions } from '../../lib/utils';
import { Button } from '../common/Button';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface TrialFormProps {
  onSubmit?: (data: TrialFormData) => void;
}

export const TrialForm = ({ onSubmit }: TrialFormProps) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TrialFormData>({
    mode: 'onBlur',
    defaultValues: {
      parentName: '',
      childName: '',
      childAge: undefined,
      phone: '',
      email: '',
      preferredDay: 'saturday',
      message: '',
    },
  });

  const handleFormSubmit = async (data: TrialFormData) => {
    setIsSubmitting(true);

    // Mock async submission
    await new Promise(resolve => setTimeout(resolve, 800));

    console.log('Trial Form Data:', data);

    if (onSubmit) {
      onSubmit(data);
    }

    setSubmitSuccess(true);
    reset();

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);

    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-600 text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-800">
          We've received your trial session request. Our team will get in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Parent Name */}
      <div>
        <label htmlFor="parentName" className="block text-sm font-medium text-vedic-900 mb-2">
          Parent Name *
        </label>
        <input
          {...register('parentName', {
            required: 'Parent name is required',
            validate: validateName,
          })}
          type="text"
          placeholder="Your full name"
          className={`input-field ${errors.parentName ? 'input-error' : ''}`}
        />
        {errors.parentName && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} />
            {errors.parentName.message}
          </div>
        )}
      </div>

      {/* Child Name */}
      <div>
        <label htmlFor="childName" className="block text-sm font-medium text-vedic-900 mb-2">
          Child Name *
        </label>
        <input
          {...register('childName', {
            required: 'Child name is required',
            validate: validateName,
          })}
          type="text"
          placeholder="Your child's name"
          className={`input-field ${errors.childName ? 'input-error' : ''}`}
        />
        {errors.childName && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} />
            {errors.childName.message}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Child Age */}
        <div>
          <label htmlFor="childAge" className="block text-sm font-medium text-vedic-900 mb-2">
            Child Age *
          </label>
          <select
            {...register('childAge', {
              required: 'Age is required',
              validate: (value) => validateAge(Number(value)) || 'Child must be between 6-12 years',
            })}
            className={`input-field ${errors.childAge ? 'input-error' : ''}`}
          >
            <option value="">Select age</option>
            {getAgeOptions().map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.childAge && (
            <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
              <AlertCircle size={16} />
              {errors.childAge.message}
            </div>
          )}
        </div>

        {/* Preferred Day */}
        <div>
          <label htmlFor="preferredDay" className="block text-sm font-medium text-vedic-900 mb-2">
            Preferred Day
          </label>
          <select
            {...register('preferredDay')}
            className="input-field"
          >
            {getDayOptions().map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-vedic-900 mb-2">
          Phone Number *
        </label>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            validate: validatePhoneNumber,
          })}
          type="tel"
          placeholder="10-digit phone number"
          className={`input-field ${errors.phone ? 'input-error' : ''}`}
        />
        {errors.phone && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} />
            Please enter a valid 10-digit phone number
          </div>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-vedic-900 mb-2">
          Email *
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            validate: validateEmail,
          })}
          type="email"
          placeholder="your@email.com"
          className={`input-field ${errors.email ? 'input-error' : ''}`}
        />
        {errors.email && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} />
            Please enter a valid email address
          </div>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-vedic-900 mb-2">
          Message (Optional)
        </label>
        <textarea
          {...register('message')}
          placeholder="Tell us anything else about your child or your expectations..."
          rows={4}
          className="input-field resize-none"
        />
      </div>

      <Button
        type="submit"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className="w-full"
      >
        Book a Trial Session
      </Button>
    </form>
  );
};

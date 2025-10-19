'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  DollarSign,
  Users,
  Target,
} from 'lucide-react';

export default function FinancialInsightsIntakePage() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    phone: '',

    // Business Overview
    industry: '',
    businessValue: '',
    ownershipPercentage: '',
    exitTimeline: '',

    // Financial Snapshot
    netWorth: '',
    annualIncome: '',
    annualTaxBurden: '',
    liquidCash: '',
    annualLifestyle: '',

    // Primary Objective
    primaryGoal: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/financial-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalSteps = 3;

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-6'>
          <div className='flex items-center gap-3'>
            <div className='h-12 w-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <Building2 className='h-7 w-7 text-white' />
            </div>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>
                Financial Insights AI
              </h1>
              <p className='text-sm text-gray-600'>
                Institutional-Grade Analysis for HNWI
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-12'>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Get Your Personalized Financial Strategy Report
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-4'>
            Complete this quick intake form before our consultation call.
            We&apos;ll discuss details during our conversation - just provide
            the basics here.
          </p>
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-3xl mx-auto mb-6'>
            <p className='text-sm text-blue-900'>
              <strong className='text-blue-700'>
                ⚠️ Required vs. Optional:
              </strong>
              <br />
              Fields marked with{' '}
              <span className='text-red-600 font-bold'>*</span> are{' '}
              <strong>required for the system to generate your report</strong>.
              <br />
              Other fields are optional but will{' '}
              <strong>
                significantly improve the quality and specificity
              </strong>{' '}
              of your analysis.
            </p>
          </div>
          <div className='flex items-center justify-center gap-8 text-sm text-gray-500'>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-5 w-5 text-green-600' />
              <span>5 Minutes to Complete</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-5 w-5 text-green-600' />
              <span>Institutional-Grade Formulas</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-5 w-5 text-green-600' />
              <span>$500 Value</span>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className='mb-8'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm font-medium text-gray-700'>
              Step {currentStep} of {totalSteps}
            </span>
            <span className='text-sm text-gray-500'>
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div
              className='bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500'
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-8'>
          {/* Step 1: Contact & Business */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className='bg-white rounded-2xl shadow-lg p-8'
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className='h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                  <Users className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Contact & Business Information
                </h3>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='David Kim'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='david@company.com'
                  />
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='+1 (555) 123-4567'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Industry/Sector *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Determines sector-specific benchmarks and exit
                      strategies
                    </span>
                  </label>
                  <select
                    name='industry'
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  >
                    <option value=''>Select industry</option>
                    <option value='PropTech'>PropTech</option>
                    <option value='FinTech'>FinTech</option>
                    <option value='HealthTech'>HealthTech</option>
                    <option value='SaaS'>SaaS</option>
                    <option value='CleanTech'>CleanTech</option>
                    <option value='AgTech'>AgTech</option>
                    <option value='CyberTech'>CyberTech</option>
                    <option value='EdTech'>EdTech</option>
                    <option value='AI/ML'>AI/ML</option>
                    <option value='Other'>Other Tech</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Business Valuation *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Generates exit scenarios and valuation
                      benchmarks
                    </span>
                  </label>
                  <input
                    type='number'
                    name='businessValue'
                    value={formData.businessValue}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='120000000'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Current estimated business value (USD)
                  </p>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Your Ownership % *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Calculates your exit proceeds and tax liability
                    </span>
                  </label>
                  <input
                    type='number'
                    name='ownershipPercentage'
                    value={formData.ownershipPercentage}
                    onChange={handleInputChange}
                    required
                    min='0'
                    max='100'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='45'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Percentage (0-100)
                  </p>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Exit Timeline *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Prioritizes strategies and structures your
                      roadmap
                    </span>
                  </label>
                  <select
                    name='exitTimeline'
                    value={formData.exitTimeline}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  >
                    <option value=''>Select timeline</option>
                    <option value='6-12 months'>6-12 months</option>
                    <option value='12-18 months'>12-18 months</option>
                    <option value='18-24 months'>18-24 months</option>
                    <option value='2-3 years'>2-3 years</option>
                    <option value='3-5 years'>3-5 years</option>
                    <option value='5+ years'>5+ years</option>
                    <option value='No plans to exit'>No plans to exit</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Financial Information */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className='bg-white rounded-2xl shadow-lg p-8'
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className='h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center'>
                  <DollarSign className='h-6 w-6 text-green-600' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Financial Snapshot
                </h3>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Total Net Worth *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Calculates concentration risk and
                      diversification strategies
                    </span>
                  </label>
                  <input
                    type='number'
                    name='netWorth'
                    value={formData.netWorth}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='28500000'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Total net worth in USD
                  </p>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Annual Income *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Determines tax optimization opportunities
                    </span>
                  </label>
                  <input
                    type='number'
                    name='annualIncome'
                    value={formData.annualIncome}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='10500000'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Total annual income from all sources
                  </p>
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Annual Tax Burden *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Identifies tax reduction strategies (QSBS,
                      relocation, etc.)
                    </span>
                  </label>
                  <input
                    type='number'
                    name='annualTaxBurden'
                    value={formData.annualTaxBurden}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='4200000'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Total annual tax payments
                  </p>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Liquid Cash & Assets *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Calculates liquidity position and cash flow
                      planning
                    </span>
                  </label>
                  <input
                    type='number'
                    name='liquidCash'
                    value={formData.liquidCash}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='2850000'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Cash, savings, and liquid investments (USD)
                  </p>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Annual Lifestyle Expenses *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Models cash flow needs and post-exit planning
                    </span>
                  </label>
                  <input
                    type='number'
                    name='annualLifestyle'
                    value={formData.annualLifestyle}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='1140000'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Total annual living expenses (USD)
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Primary Goal & Submit */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className='bg-white rounded-2xl shadow-lg p-8'
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className='h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                  <Target className='h-6 w-6 text-purple-600' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Your Primary Goal
                </h3>
              </div>

              <div className='space-y-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    What is your primary objective? *
                    <span className='block text-xs font-normal text-gray-500 mt-1'>
                      Required: Guides the entire analysis and recommendations
                    </span>
                  </label>
                  <textarea
                    name='primaryGoal'
                    value={formData.primaryGoal}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder="Example: I want to plan my company's exit within 12-18 months while reducing my concentration risk and addressing my $4.2M annual tax burden, but I also need to protect $120M in business value for my family's future."
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Describe your main goals, concerns, and timeline in your own
                    words - we&apos;ll explore details in our consultation
                  </p>
                </div>

                <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
                  <h4 className='font-semibold text-blue-900 mb-3'>
                    What Happens Next?
                  </h4>
                  <ul className='space-y-2 text-sm text-blue-800'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0' />
                      <span>
                        Your information will be securely submitted to our
                        financial analysis team
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0' />
                      <span>
                        We&apos;ll generate your personalized report using
                        institutional-grade formulas
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0' />
                      <span>
                        You&apos;ll receive your comprehensive analysis within
                        1-2 business days
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0' />
                      <span>
                        Optional: Schedule a follow-up consultation with our
                        financial strategists
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='bg-gray-50 border border-gray-200 rounded-lg p-6'>
                  <h4 className='font-semibold text-gray-900 mb-3'>
                    Privacy & Confidentiality
                  </h4>
                  <p className='text-sm text-gray-700'>
                    All information submitted is encrypted and handled with
                    strict confidentiality. We comply with all financial privacy
                    regulations and will never share your data without your
                    explicit consent.
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className='bg-green-50 border-2 border-green-300 rounded-lg p-8 text-center'>
                    <div className='flex justify-center mb-4'>
                      <CheckCircle className='h-16 w-16 text-green-600' />
                    </div>
                    <h4 className='text-2xl font-bold text-green-900 mb-3'>
                      Thank You!
                    </h4>
                    <p className='text-lg text-green-800 mb-4'>
                      Your information has been successfully submitted.
                    </p>
                    <p className='text-sm text-green-700'>
                      We&apos;ll review your information and be in touch shortly
                      to schedule your personalized financial strategy
                      consultation.
                    </p>
                    <p className='text-sm text-green-600 mt-4'>
                      Please check your email at{' '}
                      <strong>{formData.email}</strong> for confirmation and
                      next steps.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                    <div className='flex items-center gap-3'>
                      <AlertCircle className='h-6 w-6 text-red-600' />
                      <div>
                        <h4 className='font-semibold text-red-900'>
                          Submission Failed
                        </h4>
                        <p className='text-sm text-red-700 mt-1'>
                          There was an error submitting your form. Please try
                          again or contact us at terry@wrigitail.com
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className='flex items-center justify-between pt-6'>
            {currentStep > 1 && (
              <button
                type='button'
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className='px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-colors'
              >
                Previous
              </button>
            )}

            {currentStep < totalSteps && (
              <button
                type='button'
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className='ml-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-semibold transition-colors'
              >
                Next Step
              </button>
            )}

            {currentStep === totalSteps && submitStatus !== 'success' && (
              <button
                type='submit'
                disabled={isSubmitting}
                className='ml-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
              >
                {isSubmitting ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className='h-5 w-5' />
                    <span>Submit for Analysis</span>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-8 mt-12'>
        <div className='max-w-7xl mx-auto px-6 text-center text-sm'>
          <p>
            &copy; {new Date().getFullYear()} Wrigitail. All rights reserved.
          </p>
          <p className='mt-2 text-gray-400'>
            Institutional-Grade Financial Analysis for HNWI
          </p>
        </div>
      </footer>
    </div>
  );
}

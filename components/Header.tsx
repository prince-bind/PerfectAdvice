"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, Globe, Search, Phone, Import } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// 1. Updated Menu Data Structure to support Mega Menus
const NAV_ITEMS = [
  {
    label: 'Company',
    isMegaMenu: false,
    subItems: [
      { name: 'About Us', href: '/company/about-us' },
      { name: 'Partner With Us', href: '/company/partner-with-us' },
      { name: 'Career', href: '/company/career' },
      { name: 'Learning', href: '/company/learning' },
      { name: 'Newsletter', href: '/company/newsletter' },
      { name: 'Our Team', href: '/company/our-team' },
      { name: 'Contact Us', href: '/company/contact-us' }
    ]
  },
  {
    label: 'Advisory',
    isMegaMenu: true,
    subCategories: [
      { 
        name: 'Direct Tax', 
        href: '/advisory/direct-tax',
        links: [
          { name: 'Tax Refund and Rebate Services', href: '/advisory/direct-tax/tax-refund-and-rebate-services' },
          { name: 'Advance Pricing Agreement (APA) Services', href: '/advisory/direct-tax/advance-pricing-agreement-apa-services' },
          { name: 'Goods and Services Tax Compliance (GST)', href: '/advisory/direct-tax/goods-and-services-tax-compliance-gst' },
          { name: 'Employment Tax and Payroll Services', href: '/advisory/direct-tax/employment-tax-and-payroll-services' },
          { name: 'Transfer Pricing Policy Development', href: '/advisory/direct-tax/transfer-pricing-policy-development' },
          { name: 'Taxation for NRIs', href: '/advisory/direct-tax/taxation-for-nris' },
          { name: 'Tax filing services for E-commerce', href: '/advisory/direct-tax/tax-filing-services-for-e-commerce' },
          { name: 'Tax Litigation', href: '/advisory/direct-tax/tax-litigation' },
          { name: 'Intra Group Services Analysis', href: '/advisory/direct-tax/intra-group-services-analysis' },
          { name: 'Tax Preparation Services', href: '/advisory/direct-tax/tax-preparation-services' },
          { name: 'Appellate Tribunal for Benami Transactions', href: '/advisory/direct-tax/appellate-tribunal-for-benami-transactions' },
          { name: 'Tax Optimization', href: '/advisory/direct-tax/tax-optimization' },
          { name: 'Corporate Tax (R&D Tax)', href: '/advisory/direct-tax/corporate-tax-r-d-tax' },
          { name: 'Cost Contribution Arrangements Service', href: '/advisory/direct-tax/cost-contribution-arrangements-service' },
          { name: 'Corporate Tax and Regulatory Compliance', href: '/advisory/direct-tax/corporate-tax-and-regulatory-compliance' },
          { name: 'Transfer Pricing Audit and Risk Management.', href: '/advisory/direct-tax/transfer-pricing-audit-and-risk-management' },
          { name: 'Corporate Tax Advisory Services', href: '/advisory/direct-tax/corporate-tax-advisory-services' },
          { name: 'Intangible Property Valuations', href: '/advisory/direct-tax/intangible-property-valuations' },
          { name: 'Transfer Pricing in India', href: '/advisory/direct-tax/transfer-pricing-in-india' },
          { name: 'TP Planning', href: '/advisory/direct-tax/tp-planning' },
          { name: 'Transfer Pricing Dispute Resolution', href: '/advisory/direct-tax/transfer-pricing-dispute-resolution' },
          { name: 'Domestic Transfer Pricing', href: '/advisory/direct-tax/domestic-transfer-pricing' }
        ]
      },
      { 
        name: 'Consulting', 
        href: '/advisory/consulting', 
        links: [
          { name: 'Tableau Consulting Services', href: '/advisory/consulting/tableau-consulting-services' },
          { name: 'Sustainability and CSR Services', href: '/advisory/consulting/sustainability-and-csr-services' },
          { name: 'Product Development and Innovation', href: '/advisory/consulting/product-development-and-innovation' },
          { name: 'Valuation & Financial Advisory Services', href: '/advisory/consulting/valuation-and-financial-advisory-services' },
          { name: 'E-commerce Business Plan', href: '/advisory/consulting/e-commerce-business-plan' },
          { name: 'E-Commerce Accounting services', href: '/advisory/consulting/e-commerce-accounting-services' },
          { name: 'White-Collar Crime Lawyers', href: '/advisory/consulting/white-collar-crime-lawyers' },
          { name: 'Importer of Record Services', href: '/advisory/consulting/importer-of-record-services' },
          { name: 'Growth Advisory Services', href: '/advisory/consulting/growth-advisory-services' },
          { name: 'Payroll Reconciliation services', href: '/advisory/consulting/payroll-reconciliation-services' },
          { name: 'Income Tax Consultants Service', href: '/advisory/consulting/income-tax-consultants-service' },
          { name: 'ESOP Valuation Service & Sweat Equity Experts', href: '/advisory/consulting/esop-valuation-service-and-sweat-equity-experts' },
          { name: 'Manufacturing Process Consulting', href: '/advisory/consulting/manufacturing-process-consulting' },
          { name: 'BFSI Consulting', href: '/advisory/consulting/bfsi-consulting' },
          { name: 'Employee Benefit Plans', href: '/advisory/consulting/employee-benefit-plans' },
          { name: 'System and Organizational control reporting', href: '/advisory/consulting/system-and-organizational-control-reporting' },
          { name: 'Accounting Advisory and Financial Reporting', href: '/advisory/consulting/accounting-advisory-and-financial-reporting' },
          { name: 'Dispute Advisory', href: '/advisory/consulting/dispute-advisory' },
          { name: 'Global Expansion Advisory', href: '/advisory/consulting/global-expansion-advisory' },
          { name: 'Investment Banking Advisory', href: '/advisory/consulting/investment-banking-advisory' },
          { name: 'IPO Readiness Advisory', href: '/advisory/consulting/ipo-readiness-advisory' }
        ] 
      },
      { 
        name: 'ESG Advisory', 
        href: '/advisory/esg-advisory', 
        links: [
          { name: 'Sustainability and ESG Solutions', href: '/advisory/esg-advisory/sustainability-and-esg-solutions' },
          { name: 'ESG Assurance in Audit', href: '/advisory/esg-advisory/esg-assurance-in-audit' },
          { name: 'ESG Reporting', href: '/advisory/esg-advisory/esg-reporting' },
          { name: 'Sustainable Supply Chain Management', href: '/advisory/esg-advisory/sustainable-supply-chain-management' },
          { name: 'Sustainable Finance', href: '/advisory/esg-advisory/sustainable-finance' },
          { name: 'ESG Due Diligence', href: '/advisory/esg-advisory/esg-due-diligence' },
          { name: 'BRSR Reporting', href: '/advisory/esg-advisory/brsr-reporting' },
          { name: 'Sustainability And Environmental Auditing', href: '/advisory/esg-advisory/sustainability-and-environmental-auditing' }
        ] 
      },
      { 
        name: 'Indirect Tax', 
        href: '/advisory/indirect-tax', 
        links: [
          { name: 'GST Appeal Services', href: '/advisory/indirect-tax/gst-appeal-services' },
          { name: 'GST Advisory Service', href: '/advisory/indirect-tax/gst-advisory-service' },
          { name: 'GST Notice Reply', href: '/advisory/indirect-tax/gst-notice-reply' },
          { name: 'GST Refund Process', href: '/advisory/indirect-tax/gst-refund-process' },
          { name: 'GST Audit and Assessment', href: '/advisory/indirect-tax/gst-audit-and-assessment' },
          { name: 'Custom Duty Services', href: '/advisory/indirect-tax/custom-duty-services' },
          { name: 'Dispute Resolution Panel and PTA', href: '/advisory/indirect-tax/dispute-resolution-panel-and-pta' },
          { name: 'Custom Duty Valuation', href: '/advisory/indirect-tax/custom-duty-valuation' },
          { name: 'Excise tax compliance', href: '/advisory/indirect-tax/excise-tax-compliance' },
          { name: 'Property Tax Assessment and Valuation', href: '/advisory/indirect-tax/property-tax-assessment-and-valuation' },
          { name: 'Excise Tax Warehouse Compliance Evaluation', href: '/advisory/indirect-tax/excise-tax-warehouse-compliance-evaluation' },
          { name: 'Luxury Tax & Compliance', href: '/advisory/indirect-tax/luxury-tax-and-compliance' },
          { name: 'Excise Tax', href: '/advisory/indirect-tax/excise-tax' },
          { name: 'Professional Tax', href: '/advisory/indirect-tax/professional-tax' },
          { name: 'Anti-Dumping Duty Analysis', href: '/advisory/indirect-tax/anti-dumping-duty-analysis' }
        ] 
      },
      { 
        name: 'Growth Advisory', 
        href: '/advisory/growth-advisory', 
        links: [
          { name: 'Future Growth Analysis', href: '/advisory/growth-advisory/future-growth-analysis' },
          { name: 'Transformational Growth', href: '/advisory/growth-advisory/transformational-growth' },
          { name: 'Brand and Demand-Solutions', href: '/advisory/growth-advisory/brand-and-demand-solutions' },
          { name: 'Strategic Growth Pipeline Services', href: '/advisory/growth-advisory/strategic-growth-pipeline-services' },
          { name: 'Business Process Reengineering', href: '/advisory/growth-advisory/business-process-reengineering' },
          { name: 'Investment Research Service', href: '/advisory/growth-advisory/investment-research-service' },
          { name: 'Debt and Equity Financing Solutions', href: '/advisory/growth-advisory/debt-and-equity-financing-solutions' },
          { name: 'SOP Implementation Services', href: '/advisory/growth-advisory/sop-implementation-services' },
          { name: 'Scrap Validation Services', href: '/advisory/growth-advisory/scrap-validation-services' },
          { name: 'Transaction Testing Services', href: '/advisory/growth-advisory/transaction-testing-services' },
          { name: 'Finance Transformation Services', href: '/advisory/growth-advisory/finance-transformation-services' },
          { name: 'IT Staff Augmentation', href: '/advisory/growth-advisory/it-staff-augmentation' }
        ] 
      },
      { 
        name: 'Internal Audit', 
        href: '/advisory/internal-audit', 
        links: [
          { name: 'Legal Due Diligence Audit', href: '/advisory/internal-audit/legal-due-diligence-audit' },
          { name: 'Internal Control Audit', href: '/advisory/internal-audit/internal-control-audit' },
          { name: 'Internal Audit', href: '/advisory/internal-audit/internal-audit' },
          { name: 'Human Resource Audit', href: '/advisory/internal-audit/human-resource-audit' },
          { name: 'Management Audit', href: '/advisory/internal-audit/management-audit' },
          { name: 'Virtual Audit', href: '/advisory/internal-audit/virtual-audit' }
        ] 
      },
      { 
        name: 'BFSI Audit', 
        href: '/advisory/bfsi-audit', 
        links: [
          { name: 'NBFC Compliance Audit', href: '/advisory/bfsi-audit/nbfc-compliance-audit' },
          { name: 'NBFC Audit', href: '/advisory/bfsi-audit/nbfc-audit' },
          { name: 'Insurance Audit', href: '/advisory/bfsi-audit/insurance-audit' }
        ] 
      },
      { 
        name: 'Industry Audit', 
        href: '/advisory/industry-audit', 
        links: [
          { name: 'Dealership Audit', href: '/advisory/industry-audit/dealership-audit' },
          { name: 'Information Systems Audit Services', href: '/advisory/industry-audit/information-systems-audit-services' },
          { name: 'Audit for Charitable Trust', href: '/advisory/industry-audit/audit-for-charitable-trust' },
          { name: 'Business Audit Service', href: '/advisory/industry-audit/business-audit-service' },
          { name: 'Gaming Industry Audit Services', href: '/advisory/industry-audit/gaming-industry-audit-services' },
          { name: 'Special Purpose Audit Services', href: '/advisory/industry-audit/special-purpose-audit-services' },
          { name: 'E-Commerce Audit', href: '/advisory/industry-audit/e-commerce-audit' },
          { name: 'Income Tax Audit', href: '/advisory/industry-audit/income-tax-audit' },
          { name: 'Secretarial Audit in India', href: '/advisory/industry-audit/secretarial-audit-in-india' },
          { name: 'Public Limited Audit', href: '/advisory/industry-audit/public-limited-audit' },
          { name: 'Private Limited Audit', href: '/advisory/industry-audit/private-limited-audit' },
          { name: 'Financial Statement Audit', href: '/advisory/industry-audit/financial-statement-audit' },
          { name: 'NGO Audit', href: '/advisory/industry-audit/ngo-audit' },
          { name: 'Advertising Audit', href: '/advisory/industry-audit/advertising-audit' },
          { name: 'Media Audit', href: '/advisory/industry-audit/media-audit' },
          { name: 'Cinema Audit', href: '/advisory/industry-audit/cinema-audit' }
        ] 
      },
      { 
        name: 'Valuation', 
        href: '/advisory/valuation', 
        links: [
          { name: 'Plant and Machinery Valuation Services', href: '/advisory/valuation/plant-and-machinery-valuation-services' },
          { name: 'Valuation Services', href: '/advisory/valuation/valuation-services' },
          { name: 'Business Valuation Services', href: '/advisory/valuation/business-valuation-services' },
          { name: 'Valuation Services as Per Income Tax Act', href: '/advisory/valuation/valuation-services-as-per-income-tax-act' },
          { name: 'Valuation Of Shares Under Income Tax Act', href: '/advisory/valuation/valuation-of-shares-under-income-tax-act' },
          { name: 'Property Valuation Service', href: '/advisory/valuation/property-valuation-service' },
          { name: 'Valuation under the SARFAESI Act, 2002', href: '/advisory/valuation/valuation-under-the-sarfaesi-act-2002' },
          { name: 'Valuation under Companies Act', href: '/advisory/valuation/valuation-under-companies-act' },
          { name: 'Brand Valuation Service', href: '/advisory/valuation/brand-valuation-service' },
          { name: 'Fairness Opinion Consultants', href: '/advisory/valuation/fairness-opinion-consultants' },
          { name: 'Valuations under SEBI Regulations', href: '/advisory/valuation/valuations-under-sebi-regulations' },
          { name: 'Valuation Under RBI Act', href: '/advisory/valuation/valuation-under-rbi-act' }
        ] 
      },
    ]
  },
  {
    label: 'Regulatory',
    isMegaMenu: true,
    subCategories: [
      { 
        name: 'RBI Services', 
        href: '/regulatory/rbi-services',
        links: [
          { name: 'NBFC Loan Portfolio Audit', href: '/regulatory/rbi-services/nbfc-loan-portfolio-audit' },
          { name: 'FEMA Registration Services', href: '/regulatory/rbi-services/fema-registration-services' },
          { name: 'Mortgage Guarantee Company', href: '/regulatory/rbi-services/mortgage-guarantee-company' },
          { name: 'Capital Adequacy Planning for NBFCs', href: '/regulatory/rbi-services/capital-adequacy-planning-for-nbfcs' },
          { name: 'Asset Liability Management for NBFCs', href: '/regulatory/rbi-services/asset-liability-management-for-nbfcs' },
          { name: 'Cyber Security Audit for NBFCs', href: '/regulatory/rbi-services/cyber-security-audit-for-nbfcs' },
          { name: 'Lend Tech', href: '/regulatory/rbi-services/lend-tech' },
          { name: 'TPAP License', href: '/regulatory/rbi-services/tpap-license' },
          { name: 'NBFC financial modeling', href: '/regulatory/rbi-services/nbfc-financial-modeling' },
          { name: 'NBFC for Sale', href: '/regulatory/rbi-services/nbfc-for-sale' },
          { name: 'Alternative Asset Portfolio Valuation', href: '/regulatory/rbi-services/alternative-asset-portfolio-valuation' },
          { name: 'NBFC Registration', href: '/regulatory/rbi-services/nbfc-registration' },
          { name: 'NBFC Business Plan', href: '/regulatory/rbi-services/nbfc-business-plan' },
          { name: 'NBFC Due Diligence', href: '/regulatory/rbi-services/nbfc-due-diligence' },
          { name: 'NBFC Debt Recovery Advisory', href: '/regulatory/rbi-services/nbfc-debt-recovery-advisory' },
          { name: 'NBFC Legal Support', href: '/regulatory/rbi-services/nbfc-legal-support' },
          { name: 'NBFC Takeover', href: '/regulatory/rbi-services/nbfc-takeover' },
          { name: 'NBFC Marketing', href: '/regulatory/rbi-services/nbfc-marketing' },
          { name: 'Compliance under FEMA', href: '/regulatory/rbi-services/compliance-under-fema' },
          { name: 'Conversion Of NBFC Into Bank', href: '/regulatory/rbi-services/conversion-of-nbfc-into-bank' },
          { name: 'NBFC Account Aggregator (AA) License', href: '/regulatory/rbi-services/nbfc-account-aggregator-aa-license' },
          { name: 'Peer to Peer Lending License', href: '/regulatory/rbi-services/peer-to-peer-lending-license' },
          { name: 'Full Fledged Money Changers', href: '/regulatory/rbi-services/full-fledged-money-changers' },
          { name: 'Prepaid Wallet License', href: '/regulatory/rbi-services/prepaid-wallet-license' }
        ]
      },
      { 
        name: 'SEBI Services', 
        href: '/regulatory/sebi-services', 
        links: [
          { name: 'Reverse Merger in India', href: '/regulatory/sebi-services/reverse-merger-in-india' },
          { name: 'SEBI Research Analyst', href: '/regulatory/sebi-services/sebi-research-analyst' },
          { name: 'Alternative Asset Services', href: '/regulatory/sebi-services/alternative-asset-services' },
          { name: 'Compliance Test Report for AIF', href: '/regulatory/sebi-services/compliance-test-report-for-aif' },
          { name: 'AMFI Registration', href: '/regulatory/sebi-services/amfi-registration' },
          { name: 'Stock Broker License', href: '/regulatory/sebi-services/stock-broker-license' },
          { name: 'Reit Registration', href: '/regulatory/sebi-services/reit-registration' },
          { name: 'Social Stock Exchange License', href: '/regulatory/sebi-services/social-stock-exchange-license' },
          { name: 'Registration of Mutual Fund with SEBI', href: '/regulatory/sebi-services/registration-of-mutual-fund-with-sebi' },
          { name: 'Alternative Investment Fund Registration', href: '/regulatory/sebi-services/alternative-investment-fund-registration' },
          { name: 'Collective Investment Schemes', href: '/regulatory/sebi-services/collective-investment-schemes' },
          { name: 'Credit Rating Agency SEBI Registration', href: '/regulatory/sebi-services/credit-rating-agency-sebi-registration' },
          { name: 'Depository Participant SEBI Registration', href: '/regulatory/sebi-services/depository-participant-sebi-registration' },
          { name: 'Foreign Portfolio Investor Registration', href: '/regulatory/sebi-services/foreign-portfolio-investor-registration' },
          { name: 'Asset Management Company Registration', href: '/regulatory/sebi-services/asset-management-company-registration' },
          { name: 'Investment Advisors registration with SEBI', href: '/regulatory/sebi-services/investment-advisors-registration-with-sebi' },
          { name: 'Portfolio Manager Registration With SEBI', href: '/regulatory/sebi-services/portfolio-manager-registration-with-sebi' },
          { name: 'Registrar and Share Transfer Agent Registration', href: '/regulatory/sebi-services/registrar-and-share-transfer-agent-registration' },
          { name: 'Registration of Underwriters with SEBI', href: '/regulatory/sebi-services/registration-of-underwriters-with-sebi' },
          { name: 'Merchant Bankers License in India', href: '/regulatory/sebi-services/merchant-bankers-license-in-india' }
        ] 
      },
      { 
        name: 'IRDA Registration', 
        href: '/regulatory/irda-registration', 
        links: [
          { name: 'Insurance Repository Registration', href: '/regulatory/irda-registration/insurance-repository-registration' },
          { name: 'IRDA Insurance License', href: '/regulatory/irda-registration/irda-insurance-license' },
          { name: 'Insurance Web Aggregator License', href: '/regulatory/irda-registration/insurance-web-aggregator-license' },
          { name: 'Insurance Broker License', href: '/regulatory/irda-registration/insurance-broker-license' },
          { name: 'Corporate Agency License', href: '/regulatory/irda-registration/corporate-agency-license' },
          { name: 'Third Party Administrator Licence', href: '/regulatory/irda-registration/third-party-administrator-licence' },
          { name: 'Insurance Marketing Firm Licence', href: '/regulatory/irda-registration/insurance-marketing-firm-licence' },
          { name: 'Internal Control and Organisation SOPs', href: '/regulatory/irda-registration/internal-control-and-organisation-sops' },
          { name: 'ISNP Certification', href: '/regulatory/irda-registration/isnp-certification' },
          { name: 'Insurance Web Aggregator Legal Support', href: '/regulatory/irda-registration/insurance-web-aggregator-legal-support' },
          { name: 'IRDAI Regulatory Sandbox', href: '/regulatory/irda-registration/irdai-regulatory-sandbox' }
        ] 
      },
      { 
        name: 'AML Advisory', 
        href: '/regulatory/aml-advisory', 
        links: [
          { name: 'AML Compliance Testing and Monitoring', href: '/regulatory/aml-advisory/aml-compliance-testing-and-monitoring' },
          { name: 'AML Compliance for Cross-Border Transactions', href: '/regulatory/aml-advisory/aml-compliance-for-cross-border-transactions' },
          { name: 'FDI Under Automatic Route', href: '/regulatory/aml-advisory/fdi-under-automatic-route' },
          { name: 'AML Program Implementation and Remediation', href: '/regulatory/aml-advisory/aml-program-implementation-and-remediation' },
          { name: 'Inbound Investment under FEMA', href: '/regulatory/aml-advisory/inbound-investment-under-fema' },
          { name: 'Outbound Investment under FEMA', href: '/regulatory/aml-advisory/outbound-investment-under-fema' },
          { name: 'Establishment of Foreign Office in India', href: '/regulatory/aml-advisory/establishment-of-foreign-office-in-india' },
          { name: 'Appellate Tribunal For Foreign Exchange', href: '/regulatory/aml-advisory/appellate-tribunal-for-foreign-exchange' },
          { name: 'Foreign Direct Investment under the Approval Route', href: '/regulatory/aml-advisory/foreign-direct-investment-under-the-approval-route' },
          { name: 'FEMA Compliance for Insurance Companies', href: '/regulatory/aml-advisory/fema-compliance-for-insurance-companies' },
          { name: 'ECB Compliance Advisory', href: '/regulatory/aml-advisory/ecb-compliance-advisory' },
          { name: 'PMLA Appellate Tribunal', href: '/regulatory/aml-advisory/pmla-appellate-tribunal' },
          { name: 'NBFC AML Consulting', href: '/regulatory/aml-advisory/nbfc-aml-consulting' },
          { name: 'AML Investigations and Forensic Analysis', href: '/regulatory/aml-advisory/aml-investigations-and-forensic-analysis' },
          { name: 'AML Compliance Due Diligence for Mergers and Acquisitions', href: '/regulatory/aml-advisory/aml-compliance-due-diligence-for-mergers-and-acquisitions' },
          { name: 'Transaction Monitoring and Suspicious Activity Reporting (SAR)', href: '/regulatory/aml-advisory/transaction-monitoring-and-suspicious-activity-reporting-sar' },
          { name: 'AML Regulatory Reporting Service', href: '/regulatory/aml-advisory/aml-regulatory-reporting-service' },
          { name: 'AML Training and Awareness Programs', href: '/regulatory/aml-advisory/aml-training-and-awareness-programs' },
          { name: 'Enhanced Due Diligence (EDD) for High-Risk Clients', href: '/regulatory/aml-advisory/enhanced-due-diligence-edd-for-high-risk-clients' },
          { name: 'Customer Due Diligence (CDD) and (KYC) Services', href: '/regulatory/aml-advisory/customer-due-diligence-cdd-and-kyc-services' },
          { name: 'AML Policy and Procedure Development', href: '/regulatory/aml-advisory/aml-policy-and-procedure-development' },
          { name: 'AML Risk Assessment and Compliance Review', href: '/regulatory/aml-advisory/aml-risk-assessment-and-compliance-review' },
          { name: 'AML Internal Controls Assessment Service', href: '/regulatory/aml-advisory/aml-internal-controls-assessment-service' },
          { name: 'AML Consulting and Advisory Services', href: '/regulatory/aml-advisory/aml-consulting-and-advisory-services' }
        ] 
      },
      { 
        name: 'IBC Services', 
        href: '/regulatory/ibc-services', 
        links: [
          { name: 'Pre-Packaged Insolvency Solution', href: '/regulatory/ibc-services/pre-packaged-insolvency-solution' },
          { name: 'Business Liquidation Support', href: '/regulatory/ibc-services/business-liquidation-support' },
          { name: 'Forensic Audit and Investigation', href: '/regulatory/ibc-services/forensic-audit-and-investigation' },
          { name: 'Restructuring and Turnaround Advisory', href: '/regulatory/ibc-services/restructuring-and-turnaround-advisory' },
          { name: 'Due - Diligence at the time of Insolvency', href: '/regulatory/ibc-services/due-diligence-at-the-time-of-insolvency' },
          { name: 'Stress Testing and Risk Management', href: '/regulatory/ibc-services/stress-testing-and-risk-management' },
          { name: 'Creditor Representation in IBC Court', href: '/regulatory/ibc-services/creditor-representation-in-ibc-court' },
          { name: 'Operational Creditor Support', href: '/regulatory/ibc-services/operational-creditor-support' },
          { name: 'Alternative Asset Consulting', href: '/regulatory/ibc-services/alternative-asset-consulting' },
          { name: 'IBC valuation services', href: '/regulatory/ibc-services/ibc-valuation-services' },
          { name: 'NCLT and NCLAT Representation Services', href: '/regulatory/ibc-services/nclt-and-nclat-representation-services' },
          { name: 'Cross-Border Insolvency Services', href: '/regulatory/ibc-services/cross-border-insolvency-services' },
          { name: 'Corporate Insolvency', href: '/regulatory/ibc-services/corporate-insolvency' },
          { name: 'Financial Reporting Advisory', href: '/regulatory/ibc-services/financial-reporting-advisory' }
        ] 
      },
      { 
        name: 'Recovery of Shares', 
        href: '/regulatory/recovery-of-shares', 
        links: [
          { name: 'Dematerialisation of Shares & Debentures', href: '/regulatory/recovery-of-shares/dematerialisation-of-shares-and-debentures' },
          { name: 'Recovery of Dividend from IEPF', href: '/regulatory/recovery-of-shares/recovery-of-dividend-from-iepf' },
          { name: 'Recover Titan Company Share', href: '/regulatory/recovery-of-shares/recover-titan-company-share' },
          { name: 'Duplicate Share Certificate', href: '/regulatory/recovery-of-shares/duplicate-share-certificate' },
          { name: 'Transmission of Shares', href: '/regulatory/recovery-of-shares/transmission-of-shares' }
        ] 
      },
      { 
        name: 'NBFC Compliance', 
        href: '/regulatory/nbfc-compliance', 
        links: [
          { name: 'Foreign Investment and FDI Compliance Services', href: '/regulatory/nbfc-compliance/foreign-investment-and-fdi-compliance-services' },
          { name: 'NBFC Annual Compliance', href: '/regulatory/nbfc-compliance/nbfc-annual-compliance' },
          { name: 'Funding in NBFC', href: '/regulatory/nbfc-compliance/funding-in-nbfc' },
          { name: 'Appeal Against NBFC Registration Cancellation', href: '/regulatory/nbfc-compliance/appeal-against-nbfc-registration-cancellation' },
          { name: 'Financial Intelligence Unit Registration', href: '/regulatory/nbfc-compliance/financial-intelligence-unit-registration' },
          { name: 'Central KYC Registry in India', href: '/regulatory/nbfc-compliance/central-kyc-registry-in-india' },
          { name: 'Money Changer Compliance', href: '/regulatory/nbfc-compliance/money-changer-compliance' },
          { name: 'NBFC Account Aggregator Compliances', href: '/regulatory/nbfc-compliance/nbfc-account-aggregator-compliances' }
        ] 
      },
      { 
        name: 'IRDA Compliance', 
        href: '/regulatory/irda-compliance', 
        links: [
          { name: 'MCA Compliance for Insurance Company', href: '/regulatory/irda-compliance/mca-compliance-for-insurance-company' },
          { name: 'IRDA Compliance for Insurance Company', href: '/regulatory/irda-compliance/irda-compliance-for-insurance-company' },
          { name: 'Insurance Broker Compliances', href: '/regulatory/irda-compliance/insurance-broker-compliances' },
          { name: 'Insurance Web Aggregator Compliances', href: '/regulatory/irda-compliance/insurance-web-aggregator-compliances' },
          { name: 'Payment Gateway Compliances', href: '/regulatory/irda-compliance/payment-gateway-compliances' },
          { name: 'NCLT Appellate Tribunal Services', href: '/regulatory/irda-compliance/nclt-appellate-tribunal-services' }
        ] 
      },
    ]
  },
  {
    label: 'Consulting',
    isMegaMenu: true,
    subCategories: [
      { 
        name: 'Finance & Accounts', 
        href: '/consulting/finance-accounts',
        links: [
          { name: 'Account Reconciliation Services', href: '/consulting/finance-accounts/account-reconciliation-services' },
          { name: 'Accounting & Bookkeeping Software Solutions', href: '/consulting/finance-accounts/accounting-and-bookkeeping-software-solutions' },
          { name: 'Financial Process Outsourcing', href: '/consulting/finance-accounts/financial-process-outsourcing' },
          { name: 'Finance And Accounting Outsourcing', href: '/consulting/finance-accounts/finance-and-accounting-outsourcing' },
          { name: 'Financial Reporting', href: '/consulting/finance-accounts/financial-reporting' },
          { name: 'IFRS Reporting', href: '/consulting/finance-accounts/ifrs-reporting' },
          { name: 'Estate Planning', href: '/consulting/finance-accounts/estate-planning' },
          { name: 'Wealth Management', href: '/consulting/finance-accounts/wealth-management' },
          { name: 'Revenue Recognition', href: '/consulting/finance-accounts/revenue-recognition' },
          { name: 'Accounting Bookkeeping', href: '/consulting/finance-accounts/accounting-bookkeeping' }
        ]
      },
      { 
        name: 'Payroll Compliance Services', 
        href: '/consulting/payroll-compliance', 
        links: [
          { name: 'Customer Experience and Satisfaction', href: '/consulting/payroll-compliance/customer-experience-and-satisfaction' },
          { name: 'Crisis Management and Business Continuity Planning', href: '/consulting/payroll-compliance/crisis-management-and-business-continuity-planning' }
        ] 
      },
      { 
        name: 'HR Outsourcing', 
        href: '/consulting/hr-outsourcing', 
        links: [
          { name: 'Performance Management and Key Performance Indicators', href: '/consulting/hr-outsourcing/performance-management-and-key-performance-indicators' },
          { name: 'Supply Chain and Logistics Optimisation', href: '/consulting/hr-outsourcing/supply-chain-and-logistics-optimisation' },
          { name: 'Organisational Development and Change Management', href: '/consulting/hr-outsourcing/organisational-development-and-change-management' },
          { name: 'Sales and Marketing Strategy', href: '/consulting/hr-outsourcing/sales-and-marketing-strategy' },
          { name: 'Leadership Development and Training', href: '/consulting/hr-outsourcing/leadership-development-and-training' },
          { name: 'Human Resource Outsourcing', href: '/consulting/hr-outsourcing/human-resource-outsourcing' },
          { name: 'Licensing and Franchise Agreements', href: '/consulting/hr-outsourcing/licensing-and-franchise-agreements' },
          { name: 'NCLT Appellate Tribunal', href: '/consulting/hr-outsourcing/nclt-appellate-tribunal' },
          { name: 'PMLA Lawyers', href: '/consulting/hr-outsourcing/pmla-lawyers' },
          { name: 'Financial Crime Lawyer Services', href: '/consulting/hr-outsourcing/financial-crime-lawyer-services' },
          { name: 'Leadership Management', href: '/consulting/hr-outsourcing/leadership-management' },
          { name: 'Arbitration & ADR Services', href: '/consulting/hr-outsourcing/arbitration-and-adr-services' },
          { name: 'Banking and Finance Law', href: '/consulting/hr-outsourcing/banking-and-finance-law' },
          { name: 'Commercial Litigation', href: '/consulting/hr-outsourcing/commercial-litigation' },
          { name: 'International Trade Compliance', href: '/consulting/hr-outsourcing/international-trade-compliance' }
        ] 
      },
      { 
        name: 'LPO', 
        href: '/consulting/lpo', 
        links: [
          { name: 'Legal Due Diligence', href: '/consulting/lpo/legal-due-diligence' },
          { name: 'Regulatory Compliance And Advisory', href: '/consulting/lpo/regulatory-compliance-and-advisory' },
          { name: 'On-demand Legal Services', href: '/consulting/lpo/on-demand-legal-services' },
          { name: 'Legal Process Outsourcing', href: '/consulting/lpo/legal-process-outsourcing' }
        ] 
      },
      { 
        name: 'Fractional CFO', 
        href: '/consulting/fractional-cfo', 
        links: [
          { name: 'International Expansion and Market Entry', href: '/consulting/fractional-cfo/international-expansion-and-market-entry' },
          { name: 'CFO For Startups', href: '/consulting/fractional-cfo/cfo-for-startups' },
          { name: 'Interim CFO', href: '/consulting/fractional-cfo/interim-cfo' },
          { name: 'Fractional CFO', href: '/consulting/fractional-cfo/fractional-cfo' },
          { name: 'Supplier Due Diligence Services', href: '/consulting/fractional-cfo/supplier-due-diligence-services' },
          { name: 'Cost Reduction and Efficiency Improvement', href: '/consulting/fractional-cfo/cost-reduction-and-efficiency-improvement' },
          { name: 'CFO Support Services', href: '/consulting/fractional-cfo/cfo-support-services' },
          { name: 'Virtual CFO Services', href: '/consulting/fractional-cfo/virtual-cfo-services' },
          { name: 'Strategic Planning Services', href: '/consulting/fractional-cfo/strategic-planning-services' },
          { name: 'Risk Management Services', href: '/consulting/fractional-cfo/risk-management-services' },
          { name: 'Hire Virtual CFO', href: '/consulting/fractional-cfo/hire-virtual-cfo' },
          { name: 'Remote CFO Services', href: '/consulting/fractional-cfo/remote-cfo-services' },
          { name: 'Cash Flow Management', href: '/consulting/fractional-cfo/cash-flow-management' },
          { name: 'Compensation and Benefits', href: '/consulting/fractional-cfo/compensation-and-benefits' }
        ] 
      },
      { 
        name: 'General Legal', 
        href: '/consulting/general-legal', 
        links: [
          { name: 'Contract Drafting and Review', href: '/consulting/general-legal/contract-drafting-and-review' },
          { name: 'Labor and employment law', href: '/consulting/general-legal/labor-and-employment-law' },
          { name: 'Intellectual Property Rights Service', href: '/consulting/general-legal/intellectual-property-rights-service' },
          { name: 'Technology and E-commerce Law', href: '/consulting/general-legal/technology-and-e-commerce-law' },
          { name: 'Civil Recovery Suit', href: '/consulting/general-legal/civil-recovery-suit' },
          { name: 'IP Due Diligence Services', href: '/consulting/general-legal/ip-due-diligence-services' }
        ] 
      },
      { 
        name: 'Corporate Law', 
        href: '/consulting/corporate-law', 
        links: [
          { name: 'Competition Law and Antitrust Advisory', href: '/consulting/corporate-law/competition-law-and-antitrust-advisory' },
          { name: 'Corporate Law & Governance', href: '/consulting/corporate-law/corporate-law-and-governance' },
          { name: 'White Collar Crime and Investigation', href: '/consulting/corporate-law/white-collar-crime-and-investigation' },
          { name: 'Appellate Tribunal For Forfeited Property', href: '/consulting/corporate-law/appellate-tribunal-for-forfeited-property' },
          { name: 'Enforcement Of Pledge', href: '/consulting/corporate-law/enforcement-of-pledge' },
          { name: 'Environmental and Energy Law', href: '/consulting/corporate-law/environmental-and-energy-law' }
        ] 
      },
      { 
        name: 'Debt Recovery', 
        href: '/consulting/debt-recovery', 
        links: [
          { name: 'Asset Tracing and Investigation Services', href: '/consulting/debt-recovery/asset-tracing-and-investigation-services' },
          { name: 'B2B Debt Collection', href: '/consulting/debt-recovery/b2b-debt-collection' },
          { name: 'Litigation Support For Debt Recovery', href: '/consulting/debt-recovery/litigation-support-for-debt-recovery' },
          { name: 'Compliance with debt recovery laws and Regulations', href: '/consulting/debt-recovery/compliance-with-debt-recovery-laws-and-regulations' },
          { name: 'Mediation & ADR: Debt Collection', href: '/consulting/debt-recovery/mediation-and-adr-debt-collection' },
          { name: 'Debt Recovery Tribunal', href: '/consulting/debt-recovery/debt-recovery-tribunal' },
          { name: 'Debt Settlement Services', href: '/consulting/debt-recovery/debt-settlement-services' },
          { name: 'Debt Recovery through Insolvency and Bankruptcy', href: '/consulting/debt-recovery/debt-recovery-through-insolvency-and-bankruptcy' },
          { name: 'Debt Recovery and Collection Services', href: '/consulting/debt-recovery/debt-recovery-and-collection-services' },
          { name: 'Legal Consultation for Debt Collection Agency and Creditors', href: '/consulting/debt-recovery/legal-consultation-for-debt-collection-agency-and-creditors' },
          { name: 'Debt Restructuring and Negotiation', href: '/consulting/debt-recovery/debt-restructuring-and-negotiation' },
          { name: 'Debt Restructuring and Settlement Agreement', href: '/consulting/debt-recovery/debt-restructuring-and-settlement-agreement' },
          { name: 'Legal Notice For Debt Recovery', href: '/consulting/debt-recovery/legal-notice-for-debt-recovery' },
          { name: 'Debt Recovery Legal Advisory', href: '/consulting/debt-recovery/debt-recovery-legal-advisory' },
          { name: 'Debt Recovery Solutions', href: '/consulting/debt-recovery/debt-recovery-solutions' }
        ] 
      }
    ]
  }
];

// 2. Component for the Desktop 2-Panel Mega Menu Dropdown
const MegaMenuDropdown = ({ item }: { item: any }) => {
  const [activeTab, setActiveTab] = useState(item.subCategories[0].name);
  const activeCategory = item.subCategories.find((c: any) => c.name === activeTab) || item.subCategories[0];

  return (
    <div className="absolute top-full -left-20 w-237.5 bg-[#f8fafc] shadow-2xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex overflow-hidden min-h-112.5">
      
      {/* Left Sidebar - Categories */}
      <div className="w-[30%] bg-white border-r border-gray-100 py-6">
        {item.subCategories.map((subCat: any) => (
          <div
            key={subCat.name}
            onMouseEnter={() => setActiveTab(subCat.name)}
            className={`px-6 py-3 cursor-pointer flex justify-between items-center text-[15px] font-medium transition-colors duration-150 ${
              activeTab === subCat.name ? 'text-blue-600 bg-blue-50/50 border-r-2 border-blue-600' : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            {subCat.name}
            {activeTab === subCat.name ? (
              <ChevronRight size={18} className="text-blue-600" />
            ) : (
              <ChevronRight size={16} className="text-gray-300" />
            )}
          </div>
        ))}
      </div>
      
      {/* Right Content - Links */}
      <div className="w-[70%] p-8 bg-[#f8fafc]">
        <h3 className="text-xl font-bold text-blue-600 mb-6">{activeCategory.name}</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {activeCategory.links?.map((link: any, idx: number) => (
            <Link key={idx} href={link.href} className="text-[14px] text-slate-700 hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}
          {(!activeCategory.links || activeCategory.links.length === 0) && (
            <span className="text-sm text-gray-400 italic">Links coming soon...</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for mobile Level 1 (Company, Advisory...)
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  
  // NEW: State for mobile Level 2 inner accordion (Direct Tax, Finance & Accounts...)
  const [activeMobileSubCategory, setActiveMobileSubCategory] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileSubMenu(null);
    setActiveMobileSubCategory(null);
  };

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenu(mobileSubMenu === label ? null : label);
    setActiveMobileSubCategory(null); // Reset level 2 when level 1 changes
  };

  const toggleMobileInnerSubMenu = (catName: string) => {
    setActiveMobileSubCategory(activeMobileSubCategory === catName ? null : catName);
  };

  // --- Country Dropdown Logic ---
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<{ code: string, name: string } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const countries = [
    { code: 'in', name: 'India' },
    { code: 'us', name: 'USA' },
    { code: 'sg', name: 'Singapore' },
    { code: 'vg', name: 'British Virgin Island' },
    { code: 'ky', name: 'Cayman Islands' },
    { code: 'pa', name: 'Panama' },
    { code: 'bm', name: 'Bermuda' },
    { code: 'nl', name: 'Netherlands' },
  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <header className="w-full bg-white shadow-sm font-sans relative z-50">

      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 py-1 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer p-0">
            <img src="/PerfectAdvice.png" alt="Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* --- DESKTOP RIGHT SIDE --- */}
          <div className="hidden lg:flex items-center gap-6 text-lg font-medium text-gray-600">
            <div className="flex items-center gap-5">
              <a href="tel:+919818024481" className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">
                <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-6 h-auto rounded-sm shadow-sm" />
                <span className="tracking-wide">(+91) 9818024481</span>
              </a>
              <span className="border-l h-6 border-gray-300"></span>
            </div>

            <Link href="https://wa.me/919818024481" className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-[#25D366] hover:bg-green-100 transition-colors">
              <FaWhatsapp size={24} fill="currentColor" strokeWidth={0} />
            </Link>
            <span className="border-l h-4 border-gray-300"></span>

            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com" className="text-blue-600 hover:scale-110 transition-transform"><FaFacebookF size={24} fill="currentColor" strokeWidth={0} /></a>
              <a href="https://twitter.com" className="text-sky-400 hover:scale-110 transition-transform"><FaTwitter size={24} fill="currentColor" strokeWidth={0} /></a>
              <a href="https://www.linkedin.com" className="text-blue-700 hover:scale-110 transition-transform"><FaLinkedinIn size={24} fill="currentColor" strokeWidth={0} /></a>
              <a href="https://www.youtube.com" className="text-red-600 hover:scale-110 transition-transform" target='_blank'><FaYoutube size={24} fill="currentColor" strokeWidth={0} /></a>
            </div>
          </div>

          {/* --- MOBILE RIGHT SIDE --- */}
          <div className="flex lg:hidden items-center gap-4">
            <Link href="tel:+919818024481" className="text-[#1e3a8a]">
              <Phone size={24} className="fill-current" />
            </Link>
            <Link href="https://wa.me/919818024481" className="text-[#25D366]">
              <FaWhatsapp size={24} className="fill-current" />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-1.5 border-2 border-gray-300 rounded text-gray-500 ml-1 hover:bg-gray-50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block container mx-auto px-4 lg:px-6 py-4">
        <div className="flex justify-between items-center">
          <nav className="flex items-center gap-10 font-medium text-lg text-slate-800">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group cursor-pointer h-full">
                
                <div className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2">
                  {item.label}
                  <ChevronDown size={14} strokeWidth={3} className="mt-0.5 text-gray-400 group-hover:text-blue-600 group-hover:rotate-180 transition-transform duration-200" />
                </div>

                {/* Dropdown Routing Logic */}
                {item.isMegaMenu ? (
                  <MegaMenuDropdown item={item} />
                ) : (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                    <div className="py-2">
                      {item.subItems?.map((sub, index) => (
                        <Link
                          key={index}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {/* Country Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 px-4 py-2 rounded text-md font-semibold text-slate-600 transition uppercase tracking-wide min-w-47.5"
              >
                {selectedCountry ? (
                  <>
                    <img
                      src={`https://flagcdn.com/w20/${selectedCountry.code}.png`}
                      alt={selectedCountry.name}
                      className="w-6 h-auto rounded-sm shadow-sm"
                    />
                    <span className="text-slate-800">{selectedCountry.name}</span>
                  </>
                ) : (
                  <>
                    <Globe size={24} className="text-slate-500" />
                    SELECT COUNTRY
                  </>
                )}
              </button>

              {/* Dropdown Menu */}
              {isCountryDropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-72 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 z-50">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Select Country</h3>

                  <input
                    type="text"
                    placeholder="Enter Location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md mb-4 text-slate-800 placeholder-slate-700 text-[15px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />

                  <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-1">
                    {filteredCountries.map((country) => (
                      <div
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsCountryDropdownOpen(false);
                          setSearchLocation('');
                        }}
                        className={`flex items-center gap-4 px-3 py-2.5 hover:bg-slate-50 cursor-pointer rounded-md transition-colors ${selectedCountry?.code === country.code ? 'bg-blue-50' : ''}`}
                      >
                        <img
                          src={`https://flagcdn.com/w20/${country.code}.png`}
                          alt={country.name}
                          className="w-7 h-auto rounded-sm shadow-sm"
                        />
                        <span className="text-slate-800 text-[17px]">{country.name}</span>
                      </div>
                    ))}

                    {filteredCountries.length === 0 && (
                      <div className="text-slate-500 text-sm py-4 text-center">
                        No locations found.
                      </div>
                    )}
                  </div>
                </div>
              )}

              <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #1a73e8; border-radius: 4px; }
              `}</style>
            </div>

            <span className="border-l h-6 border-gray-300 mx-1"></span>

            <button className="p-2 text-slate-500 hover:text-blue-600 transition hover:bg-blue-50 rounded-full">
              <Search size={24} strokeWidth={2} />
            </button>

            <span className="border-l h-6 border-gray-300 mx-1"></span>

            <Link href="/schedule-meeting" className="bg-[#1a73e8] text-white px-6 py-2.5 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg">
              Schedule Meeting
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 pb-6 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-50">
                
                {/* Level 1 Accordion Toggle (e.g. Advisory) */}
                <button onClick={() => toggleMobileSubMenu(item.label)} className="w-full flex justify-between items-center px-6 py-4 text-slate-800 font-semibold text-[15px] hover:bg-gray-50">
                  {item.label}
                  <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${mobileSubMenu === item.label ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                
                {/* Level 1 Content */}
                <div className={`bg-slate-50 overflow-hidden transition-all duration-300 ease-in-out ${mobileSubMenu === item.label ? 'max-h-1250' : 'max-h-0'}`}>
                  {item.isMegaMenu ? (
                    // --- NESTED ACCORDION FOR MEGA MENUS ---
                    <div className="flex flex-col border-t border-gray-200">
                      {item.subCategories?.map((subCat, idx) => (
                        <div key={idx} className="border-b border-gray-200/60 last:border-0">
                          
                          {/* Level 2 Accordion Toggle (e.g. Direct Tax) */}
                          <button
                            onClick={() => toggleMobileInnerSubMenu(subCat.name)}
                            className="w-full flex justify-between items-center px-8 py-3.5 text-slate-700 font-medium text-[14.5px] hover:bg-slate-100 transition-colors"
                          >
                            {subCat.name}
                            <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${activeMobileSubCategory === subCat.name ? 'rotate-180 text-blue-600' : ''}`} />
                          </button>
                          
                          {/* Level 3 Links (e.g. Tax Refund Services) */}
                          <div className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${activeMobileSubCategory === subCat.name ? 'max-h-750 border-t border-gray-100 py-2' : 'max-h-0'}`}>
                            {subCat.links?.map((link, lIdx) => (
                              <Link
                                key={lIdx}
                                href={link.href}
                                className="block px-12 py-2.5 text-[13.5px] text-gray-500 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>

                        </div>
                      ))}
                    </div>
                  ) : (
                    // --- STANDARD LINKS FOR NON-MEGA MENUS (e.g. Company) ---
                    <div className="py-2">
                      {item.subItems?.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 hover:bg-blue-50/50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Country & Search Row */}
            <div className="flex items-center justify-center gap-4 py-6 px-6 mt-4">
              <button className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-5 py-3 rounded text-sm font-bold text-slate-700 uppercase tracking-wide w-full justify-center">
                {selectedCountry ? (
                  <>
                    <img src={`https://flagcdn.com/w20/${selectedCountry.code}.png`} alt={selectedCountry.name} className="w-5 h-auto rounded-sm shadow-sm" />
                    {selectedCountry.name}
                  </>
                ) : (
                  <>
                    <Globe size={18} className="text-slate-500" />
                    Select Country
                  </>
                )}
              </button>

              <button className="text-slate-500 p-3 bg-slate-50 rounded border border-slate-100">
                <Search size={22} />
              </button>
            </div>

            {/* CTA Button */}
            <div className="px-6 pb-6">
              <Link href="/schedule-meeting" className="flex justify-center w-full bg-[#1a73e8] text-white py-3.5 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition">
                Schedule Meeting
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
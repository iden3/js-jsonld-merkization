export const doc1 = `
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/iden3credential-v2.json-ld",
        "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld"
    ],
    "@type": [
        "VerifiableCredential",
        "KYCAgeCredential"
    ],
    "id": "http://myid.com",
    "expirationDate": "2261-03-21T21:14:48+02:00",
    "credentialSubject": {
        "type": "KYCAgeCredential",
        "id": "did:iden3:polygon:mumbai:wyFiV4w71QgWPn6bYLsZoysFay66gKtVa9kfu6yMZ",
        "documentType": 1,
        "birthday": 19960424
    },
    "credentialStatus": {
        "type": "SparseMerkleTreeProof",
        "id": "http://localhost:8001/api/v1/identities/1195DjqzhZ9zpHbezahSevDMcxN41vs3Y6gb4noRW/claims/revocation/status/127366661"
    },
    "credentialSchema": {
        "type": "JsonSchemaValidator2018",
        "id": "http://json1.com"
    }
}`;

export const multigraphDoc = `{
  "@context":[
    "https://www.w3.org/2018/credentials/v1",
    "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld"
  ],
  "@type":"VerifiablePresentation",
  "holder": ["http://example.com/holder1", "http://example.com/holder2"],
  "verifiableCredential": {
    "@id": "http://example.com/vc2",
    "@type":"KYCAgeCredential",
    "birthday":19960425
  }
}`;

export const multigraphDoc2 = `{
  "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
      "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/iden3credential-v2.json-ld"
  ],
  "@type": "VerifiablePresentation",
  "holder": [
      "http://example.com/holder1",
      "http://example.com/holder2"
  ],
  "verifiableCredential": [
      {
          "@id": "http://example.com/vc1",
          "@type": "KYCAgeCredential",
          "birthday": 19960424
      },
      {
          "@id": "http://example.com/vc3",
          "@type": "Iden3SparseMerkleTreeProof",
          "issuerData": {
              "state": {
                  "blockTimestamp": 123
              }
          }
      }
  ]
}`;

export const testDocument = `{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1",
    "https://w3id.org/security/bbs/v1"
  ],
  "id": "https://issuer.oidp.uscis.gov/credentials/83627465",
  "type": ["VerifiableCredential", "PermanentResidentCard"],
  "issuer": "did:example:489398593",
  "identifier": 83627465,
  "name": "Permanent Resident Card",
  "description": "Government of Example Permanent Resident Card.",
  "issuanceDate": "2019-12-03T12:19:52Z",
  "expirationDate": "2029-12-03T12:19:52Z",
  "credentialSubject": [
    {
      "id": "did:example:b34ca6cd37bbf23",
      "type": ["PermanentResident", "Person"],
      "givenName": "JOHN",
      "familyName": "SMITH",
      "gender": "Male",
      "image": "data:image/png;base64,iVBORw0KGgokJggg==",
      "residentSince": "2015-01-01",
      "lprCategory": "C09",
      "lprNumber": "999-999-999",
      "commuterClassification": "C1",
      "birthCountry": "Bahamas",
      "birthDate": "1958-07-17"
    },
    {
      "id": "did:example:b34ca6cd37bbf24",
      "type": ["PermanentResident", "Person"],
      "givenName": "JOHN",
      "familyName": "SMITH",
      "gender": "Male",
      "image": "data:image/png;base64,iVBORw0KGgokJggg==",
      "residentSince": "2015-01-01",
      "lprCategory": "C09",
      "lprNumber": "999-999-999",
      "commuterClassification": "C1",
      "birthCountry": "Bahamas",
      "birthDate": "1958-07-18"
    }
  ]
}`;

export const credentials_v1 = `
{
  "@context": {
    "@version": 1.1,
    "@protected": true,

    "id": "@id",
    "type": "@type",

    "VerifiableCredential": {
      "@id": "https://www.w3.org/2018/credentials#VerifiableCredential",
      "@context": {
        "@version": 1.1,
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "cred": "https://www.w3.org/2018/credentials#",
        "sec": "https://w3id.org/security#",
        "xsd": "http://www.w3.org/2001/XMLSchema#",

        "credentialSchema": {
          "@id": "cred:credentialSchema",
          "@type": "@id",
          "@context": {
            "@version": 1.1,
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "cred": "https://www.w3.org/2018/credentials#",

            "JsonSchemaValidator2018": "cred:JsonSchemaValidator2018"
          }
        },
        "credentialStatus": {"@id": "cred:credentialStatus", "@type": "@id"},
        "credentialSubject": {"@id": "cred:credentialSubject", "@type": "@id"},
        "evidence": {"@id": "cred:evidence", "@type": "@id"},
        "expirationDate": {"@id": "cred:expirationDate", "@type": "xsd:dateTime"},
        "holder": {"@id": "cred:holder", "@type": "@id"},
        "issued": {"@id": "cred:issued", "@type": "xsd:dateTime"},
        "issuer": {"@id": "cred:issuer", "@type": "@id"},
        "issuanceDate": {"@id": "cred:issuanceDate", "@type": "xsd:dateTime"},
        "proof": {"@id": "sec:proof", "@type": "@id", "@container": "@graph"},
        "refreshService": {
          "@id": "cred:refreshService",
          "@type": "@id",
          "@context": {
            "@version": 1.1,
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "cred": "https://www.w3.org/2018/credentials#",

            "ManualRefreshService2018": "cred:ManualRefreshService2018"
          }
        },
        "termsOfUse": {"@id": "cred:termsOfUse", "@type": "@id"},
        "validFrom": {"@id": "cred:validFrom", "@type": "xsd:dateTime"},
        "validUntil": {"@id": "cred:validUntil", "@type": "xsd:dateTime"}
      }
    },

    "VerifiablePresentation": {
      "@id": "https://www.w3.org/2018/credentials#VerifiablePresentation",
      "@context": {
        "@version": 1.1,
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "cred": "https://www.w3.org/2018/credentials#",
        "sec": "https://w3id.org/security#",

        "holder": {"@id": "cred:holder", "@type": "@id"},
        "proof": {"@id": "sec:proof", "@type": "@id", "@container": "@graph"},
        "verifiableCredential": {"@id": "cred:verifiableCredential", "@type": "@id", "@container": "@graph"}
      }
    },

    "EcdsaSecp256k1Signature2019": {
      "@id": "https://w3id.org/security#EcdsaSecp256k1Signature2019",
      "@context": {
        "@version": 1.1,
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "sec": "https://w3id.org/security#",
        "xsd": "http://www.w3.org/2001/XMLSchema#",

        "challenge": "sec:challenge",
        "created": {"@id": "http://purl.org/dc/terms/created", "@type": "xsd:dateTime"},
        "domain": "sec:domain",
        "expires": {"@id": "sec:expiration", "@type": "xsd:dateTime"},
        "jws": "sec:jws",
        "nonce": "sec:nonce",
        "proofPurpose": {
          "@id": "sec:proofPurpose",
          "@type": "@vocab",
          "@context": {
            "@version": 1.1,
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "sec": "https://w3id.org/security#",

            "assertionMethod": {"@id": "sec:assertionMethod", "@type": "@id", "@container": "@set"},
            "authentication": {"@id": "sec:authenticationMethod", "@type": "@id", "@container": "@set"}
          }
        },
        "proofValue": "sec:proofValue",
        "verificationMethod": {"@id": "sec:verificationMethod", "@type": "@id"}
      }
    },

    "EcdsaSecp256r1Signature2019": {
      "@id": "https://w3id.org/security#EcdsaSecp256r1Signature2019",
      "@context": {
        "@version": 1.1,
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "sec": "https://w3id.org/security#",
        "xsd": "http://www.w3.org/2001/XMLSchema#",

        "challenge": "sec:challenge",
        "created": {"@id": "http://purl.org/dc/terms/created", "@type": "xsd:dateTime"},
        "domain": "sec:domain",
        "expires": {"@id": "sec:expiration", "@type": "xsd:dateTime"},
        "jws": "sec:jws",
        "nonce": "sec:nonce",
        "proofPurpose": {
          "@id": "sec:proofPurpose",
          "@type": "@vocab",
          "@context": {
            "@version": 1.1,
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "sec": "https://w3id.org/security#",

            "assertionMethod": {"@id": "sec:assertionMethod", "@type": "@id", "@container": "@set"},
            "authentication": {"@id": "sec:authenticationMethod", "@type": "@id", "@container": "@set"}
          }
        },
        "proofValue": "sec:proofValue",
        "verificationMethod": {"@id": "sec:verificationMethod", "@type": "@id"}
      }
    },

    "Ed25519Signature2018": {
      "@id": "https://w3id.org/security#Ed25519Signature2018",
      "@context": {
        "@version": 1.1,
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "sec": "https://w3id.org/security#",
        "xsd": "http://www.w3.org/2001/XMLSchema#",

        "challenge": "sec:challenge",
        "created": {"@id": "http://purl.org/dc/terms/created", "@type": "xsd:dateTime"},
        "domain": "sec:domain",
        "expires": {"@id": "sec:expiration", "@type": "xsd:dateTime"},
        "jws": "sec:jws",
        "nonce": "sec:nonce",
        "proofPurpose": {
          "@id": "sec:proofPurpose",
          "@type": "@vocab",
          "@context": {
            "@version": 1.1,
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "sec": "https://w3id.org/security#",

            "assertionMethod": {"@id": "sec:assertionMethod", "@type": "@id", "@container": "@set"},
            "authentication": {"@id": "sec:authenticationMethod", "@type": "@id", "@container": "@set"}
          }
        },
        "proofValue": "sec:proofValue",
        "verificationMethod": {"@id": "sec:verificationMethod", "@type": "@id"}
      }
    },

    "RsaSignature2018": {
      "@id": "https://w3id.org/security#RsaSignature2018",
      "@context": {
        "@version": 1.1,
        "@protected": true,

        "challenge": "sec:challenge",
        "created": {"@id": "http://purl.org/dc/terms/created", "@type": "xsd:dateTime"},
        "domain": "sec:domain",
        "expires": {"@id": "sec:expiration", "@type": "xsd:dateTime"},
        "jws": "sec:jws",
        "nonce": "sec:nonce",
        "proofPurpose": {
          "@id": "sec:proofPurpose",
          "@type": "@vocab",
          "@context": {
            "@version": 1.1,
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "sec": "https://w3id.org/security#",

            "assertionMethod": {"@id": "sec:assertionMethod", "@type": "@id", "@container": "@set"},
            "authentication": {"@id": "sec:authenticationMethod", "@type": "@id", "@container": "@set"}
          }
        },
        "proofValue": "sec:proofValue",
        "verificationMethod": {"@id": "sec:verificationMethod", "@type": "@id"}
      }
    },

    "proof": {"@id": "https://w3id.org/security#proof", "@type": "@id", "@container": "@graph"}
  }
}`;

export const kycschema_jsonld = `{
  "@context": [
    {
      "@version": 1.1,
      "@protected": true,
      "id": "@id",
      "type": "@type",
      "KYCAgeCredential": {
        "@id": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v4.json-ld#KYCAgeCredential",
        "@context": {
          "@version": 1.1,
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "kyc-vocab": "https://github.com/iden3/claim-schema-vocab/blob/main/credentials/kyc.md#",
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "birthday": {
            "@id": "kyc-vocab:birthday",
            "@type": "xsd:integer"
          },
          "documentType": {
            "@id": "kyc-vocab:documentType",
            "@type": "xsd:integer"
          }
        }
      },
      "KYCCountryOfResidenceCredential": {
        "@id": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v4.json-ld#KYCCountryOfResidenceCredential",
        "@context": {
          "@version": 1.1,
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "kyc-vocab": "https://github.com/iden3/claim-schema-vocab/blob/main/credentials/kyc.md#",
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "countryCode": {
            "@id": "kyc-vocab:countryCode",
            "@type": "xsd:integer"
          },
          "documentType": {
            "@id": "kyc-vocab:documentType",
            "@type": "xsd:integer"
          }
        }
      },
      "KYCEmployee": {
        "@id": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v4.json-ld#KYCJobExperiance",
        "@context": {
          "@version": 1.1,
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "kyc-vocab": "https://github.com/iden3/claim-schema-vocab/blob/main/credentials/kyc.md#",
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "documentType": {
            "@id": "kyc-vocab:documentType",
            "@type": "xsd:integer"
          },
          "ZKPexperiance": {
            "@id": "kyc-vocab:hasZKPexperiance",
            "@type": "xsd:boolean"
          },
          "hireDate": {
            "@id": "kyc-vocab:hireDate",
            "@type": "xsd:dateTime"
          },
          "position": {
            "@id": "kyc-vocab:position",
            "@type": "xsd:string"
          },
          "salary": {
            "@id": "kyc-vocab:salary",
            "@type": "xsd:double"
          }
        }
      }
    }
  ]
}`;
export const docWithDouble = `{
  "http://example.com/field1": {
    "@type": "http://www.w3.org/2001/XMLSchema#double",
    "@value": 123
  },
  "http://example.com/field2": {
    "@type": "http://www.w3.org/2001/XMLSchema#double",
    "@value": "123"
  }
}`
export const vp = `{
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v101.json-ld"
    ],
    "@type": [
      "VerifiableCredential",
      "KYCEmployee"
    ],
    "credentialSubject": {
      "@type": "KYCEmployee",
      "salary": 170000
    }
  },
  "@type": "VerifiablePresentation",
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ]
}`

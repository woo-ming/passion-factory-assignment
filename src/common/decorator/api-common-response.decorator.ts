import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

type SchemaType = 'primitiveType' | 'object' | 'array' | 'void';

export const ApiCommonResponse = ({
  schemaType,
  dto,
}: {
  schemaType: SchemaType;
  dto: Type<unknown>;
}) => {
  switch (schemaType) {
    case 'primitiveType': {
      return applyDecorators(
        ApiOkResponse({
          schema: {
            allOf: [
              {
                properties: {
                  data: {
                    type: typeof dto,
                  },
                },
              },
            ],
          },
        }),
      );
    }
    case 'object': {
      return applyDecorators(
        ApiExtraModels(dto),
        ApiOkResponse({
          schema: {
            allOf: [
              {
                properties: {
                  data: {
                    $ref: getSchemaPath(dto),
                  },
                },
              },
            ],
          },
        }),
      );
    }
    case 'array': {
      return applyDecorators(
        ApiExtraModels(dto),
        ApiOkResponse({
          schema: {
            allOf: [
              {
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      $ref: getSchemaPath(dto),
                    },
                  },
                },
              },
            ],
          },
        }),
      );
    }
    case 'void': {
      return applyDecorators(
        ApiOkResponse({
          schema: {},
        }),
      );
    }
  }
};

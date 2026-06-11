import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const steps = [
  { name: "Order Placed", description: "on 1 Jun", value: "PLACED" },
  { name: "Packed", description: "Item packed, ready to dispatch", value: "CONFIRM" },
  { name: "Shipped", description: "by 2 Jun", value: "SHIPPED" },
  { name: "Arriving", description: "by 2 Jun - 4 Jun", value: "ARRIVING" },
  { name: "Out for Delivery", description: "by 4 Jun", value: "OUTFORDELIVERY" },
  { name: "Arrived", description: "by 4 Jun - 5 Jun", value: "DELIVERED" }
];

const canceledStep = [
  { name: "Order Placed", description: "on 1 Jun", value: "PLACED" },
  { name: "Order Cancelled", description: "on 1 Jun", value: "CANCELLED" }
];

const currentStep = 2;

const OrderStepper = ({ orderStatus }: { orderStatus: string }) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  return (
    <Box className="mx-auto my-10">
      {statusStep.map((step, index) => (
        <div key={index} className="flex px-4">
          <div className="flex flex-col items-center">
            <Box
              className={`w-8 h-8 rounded-full flex items-center justify-center
                ${index <= currentStep ? "bg-gray-200 text-teal-500" : "bg-gray-300 text-gray-600"}`}
            >
              {step.value === orderStatus ? (
                <CheckCircleIcon />
              ) : (
                <FiberManualRecordIcon />
              )}
            </Box>

            {index < statusStep.length - 1 && (
              <div
                className={`border h-20 w-[2px] ${
                  index < currentStep ? "bg-primary-color" : "bg-gray-300 text-gray-600"
                }`}
              ></div>
            )}
          </div>

          <div className="ml-2 w-full">
            <div
              className={`${
                step.value === orderStatus
                  ? "bg-primary-color p-2 text-white font-medium rounded-md -translate-y-3"
                  : ""
              } ${
                orderStatus === "CANCELLED" && step.value === orderStatus ? "bg-red-500" : ""
              } w-full`}
            >
              <p>{step.name}</p>
              <p
                className={`${
                  step.value === orderStatus ? "text-gray-200" : "text-gray-500"
                } text-xs`}
                >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default OrderStepper;

# Create Order Saga - gRPC Microservices in Go

**Author:** Yossi Afridho  
**NIM:** 122140211  
**Mata Kuliah:** Pemrograman Web Lanjut  

---

## Overview

This project implements a **Create Order Saga** using a microservices architecture in **Go** with **gRPC** for inter-service communication. It demonstrates how to handle distributed transactions with compensating actions when part of a process fails.

---

## Architecture

```
+-------------+     +----------------+     +----------------+     +----------------+
| Orchestrator| --> | Order Service  | --> | Payment Service| --> | Shipping Service|
+-------------+     +----------------+     +----------------+     +----------------+
      |                        |                   |                      |
      |<-------- Compensation logic (cancel/refund) if failure --------->|
```

Each service runs on its own gRPC server:
- Order Service (port 50051)
- Payment Service (port 50052)
- Shipping Service (port 50053)
- Orchestrator calls all of them as a client.

---

## Services

- **OrderService**
  - `CreateOrder(userId)`
  - `CancelOrder(orderId)`
- **PaymentService**
  - `ProcessPayment(orderId)`
  - `RefundPayment(paymentId)`
- **ShippingService**
  - `StartShipping(orderId)`
  - `CancelShipping(shippingId)`

---

## How to Run

```bash
# Open separate terminals for each service:

# Order service
go run order/server/main.go

# Payment service
go run payment/server/main.go

# Shipping service
go run shipping/server/main.go

# Orchestrator (from root folder)
go run orchestrator/main.go
```

---

## Testing Scenarios

1. **Success Flow**  
   All services succeed, final output: `All steps completed successfully`

2. **Payment Failure**  
   Payment fails → `CancelOrder` is triggered

3. **Shipping Failure**  
   Shipping fails → `RefundPayment` and `CancelOrder` are triggered

To simulate failure, you can edit `status := "FAILED"` or `status := "CANCELLED"` in the corresponding service.

---

## Technologies Used

- **Go** (Golang)
- **gRPC**
- **Protocol Buffers**
- **Go Modules**

---

## Folder Structure

```
create_order_saga/
├── go.mod
├── proto/              # .proto files and generated pb.go
├── order/server/
├── payment/server/
├── shipping/server/
└── orchestrator/
```

---

## License

This project is intended for educational purposes in the context of the course **Pemrograman Web Lanjut** at Institut Teknologi Sumatera.

---

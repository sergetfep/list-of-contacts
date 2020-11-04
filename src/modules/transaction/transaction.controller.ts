import { Controller, Get, Post, Body } from "@nestjs/common";
import { TransactionService } from "./transaction.service";

@Controller("api/v1/transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get("ping")
  ping(): string {
    return "pong";
  }

  @Post("add")
  async add(@Body() data: Parameters<TransactionService["add"]>[0]) {
    return this.transactionService.add(data);
  }

  @Get("list")
  async list() {
    return this.transactionService.get_list();
  }
}

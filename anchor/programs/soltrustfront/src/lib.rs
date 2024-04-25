#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("HcVeQinoi7WsFJtJE9FzjmUceH5w3Tg1YBQgvMUCqqq9");

#[program]
pub mod soltrustfront {
    use super::*;

  pub fn close(_ctx: Context<CloseSoltrustfront>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.soltrustfront.count = ctx.accounts.soltrustfront.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.soltrustfront.count = ctx.accounts.soltrustfront.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeSoltrustfront>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.soltrustfront.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeSoltrustfront<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + Soltrustfront::INIT_SPACE,
  payer = payer
  )]
  pub soltrustfront: Account<'info, Soltrustfront>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseSoltrustfront<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub soltrustfront: Account<'info, Soltrustfront>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub soltrustfront: Account<'info, Soltrustfront>,
}

#[account]
#[derive(InitSpace)]
pub struct Soltrustfront {
  count: u8,
}
